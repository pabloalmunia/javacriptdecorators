const recast = require ('recast');
const walker = require ('../lib/walker.js');
const clone  = require ('../lib/clone.js');
const unique = () => Math.random ().toString (32).substring (2);

module.exports = (ast) =>
  prettySource (
    recast.print (
      transform (ast),
      {tabWidth : 2, reuseWhitespace : false}
    ).code);


function transform (ast) {
  const source = clone (ast);
  let preClassLocation  = 0;
  let preClassCreated   = false;
  let decoratorsCreated = 0;
  
  // By Class
  walker (
    source,
    (o) => o.type === 'ClassDeclaration',
    (klass, parent) => {
      preClassLocation = parent.indexOf(klass)
      // Static members
      // Methods and fields
      walker (
        klass,
        (o) => (o.type === 'MethodDefinition' || o.type === 'ClassProperty') && o.static && o.decorators?.length,
        (o, p) => {
          const className = getClassName (source, o);
          for (let decorator of (o.decorators || [])) {
            insertAfter (
              parent,
              klass,
              memberGenerator ({
                kind          : decorator.kind,
                className     : className,
                methodName    : o.key.name,
                decoratorName : decorator.expression,
                variableName  : (decorator.kind === 'getter' || decorator.kind === 'setter' ?
                  '_descriptor_' :
                  '_initializer_') + unique (),
                isStatic      : true
              })
            );
            decoratorsCreated++;
          }
          o.decorators = undefined;
        }
      );
      
      // Class decorators
      for (let decorator of (klass.decorators || [])) {
        insertAfter (
          parent,
          klass,
          (decorator.kind === 'init-class' ?
            classInitGenerator :
            classGenerator) (klass.id.name, decorator.expression)
        );
        decoratorsCreated++;
      }
      klass.decorators = undefined;
      
      // Methods
      walker (
        klass,
        (o) => o.type === 'MethodDefinition' && !o.static && o.decorators?.length,
        (o, p) => {
          const className = getClassName (source, o);
          for (let decorator of (o.decorators || [])) {
            insertAfter (
              parent,
              klass,
              memberGenerator ({
                kind          : decorator.kind,
                className     : className,
                methodName    : o.key.name,
                decoratorName : decorator.expression,
                variableName  : '_descriptor_' + unique (),
                isStatic      : false
              })
            );
            decoratorsCreated++;
          }
          o.decorators = undefined;
        }
      );
      
      // Fields
      walker (
        klass,
        (o) => o.type === 'ClassProperty' && o.decorators?.length,
        (o, p) => {
          const className = getClassName (source, o);
          for (let decorator of (o.decorators || [])) {
            decoratorsCreated = true;
            const variableName = '_initializer_' + unique ();
            insertBefore (
              parent,
              klass, [{
                'type'         : 'VariableDeclaration',
                'declarations' : [
                  {
                    'type' : 'VariableDeclarator',
                    'id'   : {'type' : 'Identifier', 'name' : variableName}
                  }
                ],
                'kind'         : 'let'
              }]
            );
            insertAfter (
              parent,
              klass,
              memberGenerator ({
                kind          : decorator.kind,
                className     : className,
                methodName    : o.key.name,
                decoratorName : decorator.expression,
                variableName  : variableName,
                isStatic      : o.static
              })
            );
            o.value = {
              'type'      : 'CallExpression',
              'callee'    : {
                'type' : 'Identifier',
                'name' : variableName
              },
              'arguments' : [o.value]
            };
            decoratorsCreated++;
          }
          o.decorators = undefined;
        }
      );
      if (decoratorsCreated && !preClassCreated) {
        parent.splice (preClassLocation, 0, ...defineMetadataGenerator());
        preClassCreated = true;
      }
    }
  );
  return source;
}

function memberGenerator ({
                            kind,
                            className,
                            methodName,
                            decoratorName,
                            variableName,
                            isStatic
                          }) {
  return [
    (kind === 'setter' || kind === 'getter') && {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : {
            'type' : 'Identifier',
            'name' : variableName
          },
          'init' : {
            'type'      : 'CallExpression',
            'callee'    : {
              'type'     : 'MemberExpression',
              'object'   : {
                'type' : 'Identifier',
                'name' : 'Object'
              },
              'property' : {
                'type' : 'Identifier',
                'name' : 'getOwnPropertyDescriptor'
              }
            },
            'arguments' : [
              (isStatic) ?
                {
                  'type' : 'Identifier',
                  'name' : className
                } :
                {
                  'type'     : 'MemberExpression',
                  'object'   : {
                    'type' : 'Identifier',
                    'name' : className
                  },
                  'property' : {
                    'type' : 'Identifier',
                    'name' : 'prototype'
                  }
                },
              {
                'type'  : 'Literal',
                'value' : methodName
              }
            ]
          }
        }
      ],
      'kind'         : 'const'
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'left'     :
          (kind === 'setter' || kind === 'getter') ?
            {
              'type'     : 'MemberExpression',
              'object'   : {
                'type' : 'Identifier',
                'name' : variableName
              },
              'property' : {
                'type' : 'Identifier',
                'name' : kind === 'setter' ? 'set' : 'get'
              }
            } :
            (kind === 'field') ?
              {
                'type' : 'Identifier',
                'name' : (isStatic ? 'const ' : '') + variableName
              } :
              {
                'type'     : 'MemberExpression',
                'object'   :
                  (isStatic) ?
                    {
                      'type' : 'Identifier',
                      'name' : className
                    } :
                    {
                      'type'     : 'MemberExpression',
                      'object'   : {
                        'type' : 'Identifier',
                        'name' : className
                      },
                      'property' : {
                        'type' : 'Identifier',
                        'name' : 'prototype'
                      }
                    },
                'property' : {
                  'type' : 'Identifier',
                  'name' : methodName
                }
              },
        'operator' : '=',
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : {
            'type'      : 'CallExpression',
            'callee'    : decoratorName,
            'arguments' : [
              (kind === 'setter' || kind === 'getter') ?
                {
                  'type'     : 'MemberExpression',
                  'object'   : {
                    'type' : 'Identifier',
                    'name' : variableName
                  },
                  'property' : {
                    'type' : 'Identifier',
                    'name' : kind === 'setter' ? 'set' : 'get'
                  }
                } :
                (kind === 'field') ?
                  {
                    'type' : 'Identifier',
                    'name' : 'undefined'
                  } :
                  {
                    'type'     : 'MemberExpression',
                    'object'   :
                      (isStatic) ?
                        {
                          'type' : 'Identifier',
                          'name' : className
                        } :
                        {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : className
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : 'prototype'
                          }
                        },
                    'property' : {
                      'type' : 'Identifier',
                      'name' : methodName
                    }
                  },
              {
                'type'       : 'ObjectExpression',
                'properties' : [
                  {
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'kind'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : kind
                    }
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {
                      'type' : 'Identifier',
                      'name' : 'name'
                    },
                    'value' : {
                      'type'  : 'Literal',
                      'value' : methodName
                    }
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {
                      'type' : 'Identifier',
                      'name' : 'isStatic'
                    },
                    'value' : {
                      'type'  : 'Literal',
                      'value' : !!isStatic
                    }
                  },
                  {
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'isPrivate'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : false,
                      'raw'   : 'false'
                    }
                  },
                  defineMetadataGeneratorCall (
                    isStatic ? className : `${ className }.prototype`,
                    methodName
                  )
                ]
              }
            ]
          },
          'operator' : '??',
          'right'    :
            (kind === 'setter' || kind === 'getter') ?
              {
                'type'     : 'MemberExpression',
                'object'   : {
                  'type' : 'Identifier',
                  'name' : variableName
                },
                'property' : {
                  'type' : 'Identifier',
                  'name' : kind === 'setter' ? 'set' : 'get'
                }
              } :
              (kind === 'field') ?
                {
                  'type'   : 'ArrowFunctionExpression',
                  'params' : [
                    {
                      'type' : 'Identifier',
                      'name' : 'v'
                    }
                  ],
                  'body'   : {
                    'type' : 'Identifier',
                    'name' : 'v'
                  }
                } :
                {
                  'type'     : 'MemberExpression',
                  'object'   :
                    (isStatic) ?
                      {
                        'type' : 'Identifier',
                        'name' : className
                      } :
                      {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : className
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : 'prototype'
                        }
                      },
                  'property' : {
                    'type' : 'Identifier',
                    'name' : methodName
                  }
                }
        }
      }
    },
    (kind === 'setter' || kind === 'getter') ?
      {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'      : 'CallExpression',
          'callee'    : {
            'type'     : 'MemberExpression',
            'object'   : {
              'type' : 'Identifier',
              'name' : 'Object'
            },
            'property' : {
              'type' : 'Identifier',
              'name' : 'defineProperty'
            }
          },
          'arguments' : [
            (isStatic) ?
              {
                'type' : 'Identifier',
                'name' : className
              } :
              {
                'type'     : 'MemberExpression',
                'object'   : {
                  'type' : 'Identifier',
                  'name' : className
                },
                'property' : {
                  'type' : 'Identifier',
                  'name' : 'prototype'
                }
              },
            {
              'type'  : 'Literal',
              'value' : methodName
            },
            {
              'type'  : 'Identifier',
              'start' : 246,
              'end'   : 257,
              'name'  : variableName
            }
          ],
          'optional'  : false
        }
      } :
      (isStatic && kind === 'field') ?
        {
          'type'       : 'ExpressionStatement',
          'expression' : {
            'type'     : 'AssignmentExpression',
            'operator' : '=',
            'left'     : {
              'type'     : 'MemberExpression',
              'object'   : {
                'type' : 'Identifier',
                'name' : className
              },
              'property' : {
                'type' : 'Identifier',
                'name' : methodName
              }
            },
            'right'    : {
              'type'      : 'CallExpression',
              'callee'    : {
                'type' : 'Identifier',
                'name' : variableName
              },
              'arguments' : [
                {
                  'type'     : 'MemberExpression',
                  'object'   : {
                    'type' : 'Identifier',
                    'name' : className
                  },
                  'property' : {
                    'type' : 'Identifier',
                    'name' : methodName
                  }
                }
              ],
              'optional'  : false
            }
          }
        } :
        undefined
  ];
}

function classInitGenerator (className, decoratorName) {
  const uniqueName = '_result_' + unique ();
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : {
          'type' : 'Identifier',
          'name' : uniqueName
        },
        'right'    : {
          'type'     : 'LogicalExpression',
          'operator' : '||',
          'left'     : {
            'type'      : 'CallExpression',
            'callee'    : decoratorName,
            'arguments' : [
              {
                'type' : 'Identifier',
                'name' : className
              },
              {
                'type'       : 'ObjectExpression',
                'properties' : [
                  {
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'kind'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : 'init-class',
                      'raw'   : '"init-class"'
                    }
                    
                    
                  },
                  {
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'name'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : className
                    }
                    
                    
                  },
                  defineMetadataGeneratorCall (className, 'constructor')
                ]
              }
            ]
          },
          'right'    : {
            'type'       : 'ObjectExpression',
            'properties' : []
          }
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : {
          'type' : 'Identifier',
          'name' : className
        },
        'right'    : {
          'type'     : 'LogicalExpression',
          'operator' : '||',
          'left'     : {
            'type' : 'MemberExpression',
            
            'object'   : {
              'type' : 'Identifier',
              'name' : uniqueName
            },
            'property' : {
              'type' : 'Identifier',
              'name' : 'definition'
            }
          },
          'right'    : {
            'type' : 'Identifier',
            'name' : className
          }
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'LogicalExpression',
        'operator' : '&&',
        'left'     : {
          'type' : 'MemberExpression',
          
          'object'   : {
            'type' : 'Identifier',
            'name' : uniqueName
          },
          'property' : {
            'type' : 'Identifier',
            'name' : 'initialize'
          }
        },
        'right'    : {
          'type'      : 'CallExpression',
          'callee'    : {
            'type' : 'MemberExpression',
            
            'object'   : {
              'type' : 'MemberExpression',
              
              'object'   : {
                'type' : 'Identifier',
                'name' : uniqueName
              },
              'property' : {
                'type' : 'Identifier',
                'name' : 'initialize'
              }
            },
            'property' : {
              'type' : 'Identifier',
              'name' : 'call'
            }
          },
          'arguments' : [
            {
              'type' : 'Identifier',
              'name' : className
            }
          ]
        }
      }
    }
  ];
}

function classGenerator (className, decoratorName) {
  return [{
    'type'       : 'ExpressionStatement',
    'expression' : {
      'type'     : 'AssignmentExpression',
      'operator' : '=',
      'left'     : {
        'type' : 'Identifier',
        'name' : className
      },
      'right'    : {
        'type'     : 'LogicalExpression',
        'left'     : {
          'type'      : 'CallExpression',
          'callee'    : decoratorName,
          'arguments' : [
            {
              'type' : 'Identifier',
              'name' : className
            },
            {
              'type'       : 'ObjectExpression',
              'properties' : [
                {
                  'type'  : 'Property',
                  'key'   : {
                    'type' : 'Identifier',
                    'name' : 'kind'
                  },
                  'value' : {
                    'type'  : 'Literal',
                    'value' : 'class',
                    'raw'   : '"class"'
                  },
                  'kind'  : 'init'
                },
                {
                  'type'  : 'Property',
                  'key'   : {
                    'type' : 'Identifier',
                    'name' : 'name'
                  },
                  'value' : {
                    'type'  : 'Literal',
                    'value' : className,
                    'raw'   : `"${ className }"`
                  },
                  'kind'  : 'init'
                },
                defineMetadataGeneratorCall (className, 'constructor')
              ]
            }
          ],
          'optional'  : false
        },
        'operator' : '??',
        'right'    : {
          'type' : 'Identifier',
          'name' : className
        }
      }
    }
  }];
}

function defineMetadataGeneratorCall (storage, metaKey) {
  return {
    'type'  : 'Property',
    'key'   : {
      'type' : 'Identifier',
      'name' : 'defineMetadata'
    },
    'value' : {
      'type'      : 'CallExpression',
      'callee'    : {
        'type' : 'Identifier',
        'name' : '__DefineMetadata'
      },
      'arguments' : [
        {
          'type' : 'Identifier',
          'name' : storage
        },
        {
          'type'  : 'Literal',
          'value' : metaKey
        }
      ],
      'optional'  : false
    }
  };
}

function defineMetadataGenerator () {
  return [{
    'type'       : 'IfStatement',
    'test'       : {
      'type'     : 'UnaryExpression',
      'operator' : '!',
      'prefix'   : true,
      'argument' : {
        'type'     : 'MemberExpression',
        'object'   : {
          'type' : 'Identifier',
          'name' : 'Symbol'
        },
        'property' : {
          'type' : 'Identifier',
          'name' : 'metadata'
        }
      }
    },
    'consequent' : {
      'type' : 'BlockStatement',
      'body' : [
        {
          'type'       : 'ExpressionStatement',
          'expression' : {
            'type'     : 'AssignmentExpression',
            'operator' : '=',
            'left'     : {
              'type'     : 'MemberExpression',
              'object'   : {
                'type' : 'Identifier',
                'name' : 'Symbol'
              },
              'property' : {
                'type' : 'Identifier',
                'name' : 'metadata'
              }
            },
            'right'    : {
              'type'      : 'CallExpression',
              'callee'    : {
                'type' : 'Identifier',
                'name' : 'Symbol'
              },
              'arguments' : [],
              'optional'  : false
            }
          }
        }
      ]
    }
  },
    {
      'type'   : 'FunctionDeclaration',
      'id'     : {
        'type' : 'Identifier',
        'name' : '__DefineMetadata'
      },
      'params' : [
        {
          'type' : 'Identifier',
          'name' : 'base'
        },
        {
          'type' : 'Identifier',
          'name' : 'name'
        }
      ],
      'body'   : {
        'type' : 'BlockStatement',
        'body' : [
          {
            'type'     : 'ReturnStatement',
            'argument' : {
              'type'   : 'FunctionExpression',
              'params' : [
                {
                  'type' : 'Identifier',
                  'name' : 'key'
                },
                {
                  'type' : 'Identifier',
                  'name' : 'value'
                }
              ],
              'body'   : {
                'type' : 'BlockStatement',
                'body' : [
                  {
                    'type'       : 'IfStatement',
                    'test'       : {
                      'type'     : 'UnaryExpression',
                      'operator' : '!',
                      'prefix'   : true,
                      'argument' : {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : 'base'
                        },
                        'property' : {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : 'Symbol'
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : 'metadata'
                          }
                        }, "computed": true
                      },
                    },
                    'consequent' : {
                      'type' : 'BlockStatement',
                      'body' : [
                        {
                          'type'       : 'ExpressionStatement',
                          'expression' : {
                            'type'     : 'AssignmentExpression',
                            'operator' : '=',
                            'left'     : {
                              'type'     : 'MemberExpression',
                              'object'   : {
                                'type' : 'Identifier',
                                'name' : 'base'
                              },
                              'property' : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'Symbol'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'metadata'
                                }
                              }, "computed": true
                            },
                            'right'    : {
                              'type'      : 'CallExpression',
                              'callee'    : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'Object'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'create'
                                }
                              },
                              'arguments' : [
                                {
                                  'type'  : 'Literal',
                                  'value' : null,
                                  'raw'   : 'null'
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    'type'       : 'IfStatement',
                    'test'       : {
                      'type'     : 'UnaryExpression',
                      'operator' : '!',
                      'prefix'   : true,
                      'argument' : {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : 'base'
                          },
                          'property' : {
                            'type'     : 'MemberExpression',
                            'object'   : {
                              'type' : 'Identifier',
                              'name' : 'Symbol'
                            },
                            'property' : {
                              'type' : 'Identifier',
                              'name' : 'metadata'
                            }
                          }, "computed": true
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : 'name'
                        }, "computed": true
                      }
                    },
                    'consequent' : {
                      'type' : 'BlockStatement',
                      'body' : [
                        {
                          'type'       : 'ExpressionStatement',
                          'expression' : {
                            'type'     : 'AssignmentExpression',
                            'operator' : '=',
                            'left'     : {
                              'type'     : 'MemberExpression',
                              'object'   : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'base'
                                },
                                'property' : {
                                  'type'     : 'MemberExpression',
                                  'object'   : {
                                    'type' : 'Identifier',
                                    'name' : 'Symbol'
                                  },
                                  'property' : {
                                    'type' : 'Identifier',
                                    'name' : 'metadata'
                                  }
                                }, "computed": true
                              },
                              'property' : {
                                'type' : 'Identifier',
                                'name' : 'name'
                              }, "computed": true
                            },
                            'right'    : {
                              'type'       : 'ObjectExpression',
                              'properties' : []
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    'type'         : 'VariableDeclaration',
                    'declarations' : [
                      {
                        'type' : 'VariableDeclarator',
                        'id'   : {
                          'type' : 'Identifier',
                          'name' : 'db'
                        },
                        'init' : {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type'     : 'MemberExpression',
                            'object'   : {
                              'type' : 'Identifier',
                              'name' : 'base'
                            },
                            'property' : {
                              'type'     : 'MemberExpression',
                              'object'   : {
                                'type' : 'Identifier',
                                'name' : 'Symbol'
                              },
                              'property' : {
                                'type' : 'Identifier',
                                'name' : 'metadata'
                              }
                            }, "computed": true
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : 'name'
                          }, "computed": true
                        }
                      }
                    ],
                    'kind'         : 'const'
                  },
                  {
                    'type'       : 'IfStatement',
                    'test'       : {
                      'type'     : 'BinaryExpression',
                      'left'     : {
                        'type' : 'Identifier',
                        'name' : 'key'
                      },
                      'operator' : 'in',
                      'right'    : {
                        'type' : 'Identifier',
                        'name' : 'db'
                      }
                    },
                    'consequent' : {
                      'type' : 'BlockStatement',
                      'body' : [
                        {
                          'type'       : 'IfStatement',
                          'test'       : {
                            'type'     : 'UnaryExpression',
                            'operator' : '!',
                            'prefix'   : true,
                            'argument' : {
                              'type'      : 'CallExpression',
                              'callee'    : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'Array'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'isArray'
                                }
                              },
                              'arguments' : [
                                {
                                  'type'     : 'MemberExpression',
                                  'object'   : {
                                    'type' : 'Identifier',
                                    'name' : 'db'
                                  },
                                  'property' : {
                                    'type' : 'Identifier',
                                    'name' : 'key'
                                  }, "computed": true
                                }
                              ]
                            }
                          },
                          'consequent' : {
                            'type' : 'BlockStatement',
                            'body' : [
                              {
                                'type'     : 'ReturnStatement',
                                'argument' : {
                                  'type'     : 'AssignmentExpression',
                                  'operator' : '=',
                                  'left'     : {
                                    'type'     : 'MemberExpression',
                                    'object'   : {
                                      'type' : 'Identifier',
                                      'name' : 'db'
                                    },
                                    'property' : {
                                      'type' : 'Identifier',
                                      'name' : 'key'
                                    },
                                    'computed' : true
                                  },
                                  'right'    : {
                                    'type'     : 'ArrayExpression',
                                    'elements' : [
                                      {
                                        'type'     : 'MemberExpression',
                                        'object'   : {
                                          'type' : 'Identifier',
                                          'name' : 'db'
                                        },
                                        'property' : {
                                          'type' : 'Identifier',
                                          'name' : 'key'
                                        },
                                        'computed' : true
                                      },
                                      {
                                        'type' : 'Identifier',
                                        'name' : 'value'
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          'type'     : 'ReturnStatement',
                          'argument' : {
                            'type'      : 'CallExpression',
                            'callee'    : {
                              'type'     : 'MemberExpression',
                              'object'   : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'db'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'key'
                                }, "computed": true
                              },
                              'property' : {
                                'type' : 'Identifier',
                                'name' : 'push'
                              }
                            },
                            'arguments' : [
                              {
                                'type' : 'Identifier',
                                'name' : 'value'
                              }
                            ]
                          }
                        }
                      ]
                    },
                    'alternate'  : null
                  },
                  {
                    'type'     : 'ReturnStatement',
                    'argument' : {
                      'type'     : 'AssignmentExpression',
                      'operator' : '=',
                      'left'     : {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : 'db'
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : 'key'
                        }, "computed": true
                      },
                      'right'    : {
                        'type' : 'Identifier',
                        'name' : 'value'
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }];
}


function getClassName (ast, member) {
  let result;
  walker (
    ast,
    o => {
      const v = o.type === 'ClassDeclaration' && o.body.body.indexOf (member) !== -1;
      return v;
    },
    o => result = o.id.name
  );
  return result;
}

function insertAfter (arr, current, elements) {
  arr.splice (arr.indexOf (current) + 1, 0, ...elements);
}

function insertBefore (arr, current, elements) {
  arr.splice (arr.indexOf (current), 0, ...elements);
}

function prettySource (source) {
  const lines = source.split (/\n|\r\n/);
  for (let n = 0; n < lines.length; n++) {
    const line = lines[ n ];
    const next = n + 1 < lines.length ? lines [ n + 1 ] : '';
    if (!line) {
      if (next.substring (0, 1) === ' ') {
        lines.splice (n--, 1);
      }
    } else {
      if (line.substring (0, 1) !== ' ' && next && next.substring (0, 1) !== ' ') {
        lines.splice (++n, 0, '');
      }
    }
  }
  return lines.join ('\n');
}