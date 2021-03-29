const recast = require ('recast');
const walker = require ('../lib/walker.js');
const clone  = require ('../lib/clone.js');
const unique = () => Math.random ().toString (32).substring (2);

module.exports = (ast) => {
  return recast.print (transform (ast), {tabWidth : 2, reuseWhitespace : false}).code;
};

function transform (ast) {
  const source = clone (ast);
  // Class
  walker (
    source,
    (o) => o.type === 'ClassDeclaration',
    (klass, parent) => {
      // Class decorators
      for (let decorator of (klass.decorators || [])) {
        insertAfter (
          parent,
          klass,
          (decorator.kind === 'init-class' ?
            classInitGenerator :
            classGenerator) (klass.id.name, decorator.expression)
        );
      }
      klass.decorators = undefined;
      
      // Methods
      walker (
        klass,
        (o) => o.type === 'MethodDefinition' && o.decorators?.length,
        (o, p) => {
          const className = getClassName (source, o);
          for (let decorator of (o.decorators || [])) {
            insertAfter (
              parent,
              klass,
              memberGenerator (decorator.kind, className, o.key.name, decorator.expression)
            );
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
            const variableName = '_initializer_' + unique();

            insertBefore(
              parent,
              klass, [{
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {"type": "Identifier", "name": variableName}
                }
              ],
              "kind": "let"
            }]);

            insertAfter (
              parent,
              klass,
              memberGenerator (
                decorator.kind,
                className,
                o.key.name,
                decorator.expression,
                variableName
              )
            );
            o.value = {
              'type'      : 'CallExpression',
              'callee'    : {
                'type' : 'Identifier',
                'name' : variableName
              },
              'arguments' : [o.value]
            };
          }
          o.decorators = undefined;
        }
      );
      
    }
  );
  return source;
}


function memberGenerator (kind, className, methodName, decoratorName, variableName = '_descriptor_' + unique ()) {
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
                'type'  : 'Identifier',
                'start' : 0,
                'end'   : 1,
                'name'  : variableName
              } :
              {
                'type'     : 'MemberExpression',
                'object'   : {
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
                    'type' : 'MemberExpression',
                    
                    'object'   : {
                      'type' : 'MemberExpression',
                      
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
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'name'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : methodName
                    }
                    
                    
                  },
                  {
                    'type' : 'Property',
                    'key'  : {
                      'type' : 'Identifier',
                      'name' : 'isStatic'
                    },
                    
                    'value' : {
                      'type'  : 'Literal',
                      'value' : false,
                      'raw'   : 'false'
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
                  defineMetadataGenerator (
                    `${ className }.prototype`,
                    methodName,
                    (kind === 'setter' ? 'set' : kind === 'getter' ? 'get' : undefined)
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
                  'type' : 'MemberExpression',
                  
                  'object'   : {
                    'type' : 'MemberExpression',
                    
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
    (kind === 'setter' || kind === 'getter') && {
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
    }
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
                  defineMetadataGenerator (className, 'constructor')
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
                defineMetadataGenerator (className, 'constructor')
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

function defineMetadataGenerator (storage, metaKey, subKey) {
  return {
    'type' : 'Property',
    'key'  : {
      'type' : 'Identifier',
      'name' : 'defineMetadata'
    },
    
    'value' : {
      'type'   : 'FunctionExpression',
      'id'     : null,
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
              'argument' : {
                'type' : 'MemberExpression',
                
                'object'   : {
                  'type' : 'Identifier',
                  'name' : 'Symbol'
                },
                'property' : {
                  'type' : 'Identifier',
                  'name' : 'metadata'
                }
              },
              'prefix'   : true
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
                      'type' : 'MemberExpression',
                      
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
                      'arguments' : []
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
              'argument' : {
                'type'     : 'MemberExpression',
                'computed' : true,
                'object'   : {
                  'type' : 'Identifier',
                  'name' : storage
                },
                'property' : {
                  'type' : 'MemberExpression',
                  
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
              'prefix'   : true
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
                      'computed' : true,
                      'object'   : {
                        'type' : 'Identifier',
                        'name' : storage
                      },
                      'property' : {
                        'type' : 'MemberExpression',
                        
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
                    'right'    : {
                      'type'      : 'CallExpression',
                      'callee'    : {
                        'type' : 'MemberExpression',
                        
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
              'argument' : {
                'type' : 'MemberExpression',
                
                'object'   : {
                  'type'     : 'MemberExpression',
                  'computed' : true,
                  'object'   : {
                    'type' : 'Identifier',
                    'name' : storage
                  },
                  'property' : {
                    'type' : 'MemberExpression',
                    
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
                'property' : {
                  'type' : 'Identifier',
                  'name' : metaKey
                }
              },
              'prefix'   : true
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
                      'type' : 'MemberExpression',
                      
                      'object'   : {
                        'type'     : 'MemberExpression',
                        'computed' : true,
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : storage
                        },
                        'property' : {
                          'type' : 'MemberExpression',
                          
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
                      'property' : {
                        'type' : 'Identifier',
                        'name' : metaKey
                      }
                    },
                    'right'    : {
                      'type'       : 'ObjectExpression',
                      'properties' :
                        (subKey ?
                          [{
                            'type'  : 'Property',
                            'key'   : {
                              'type' : 'Identifier',
                              'name' : 'get'
                            },
                            'value' : {
                              'type'       : 'ObjectExpression',
                              'properties' : []
                            },
                            'kind'  : 'init'
                          },
                            {
                              'type'  : 'Property',
                              'key'   : {
                                'type' : 'Identifier',
                                'name' : 'set'
                              },
                              'value' : {
                                'type'       : 'ObjectExpression',
                                'properties' : []
                              },
                              'kind'  : 'init'
                            }] :
                          [])
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
                'init' :
                  (subKey ?
                      {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type'     : 'MemberExpression',
                            'computed' : true,
                            'object'   : {
                              'type' : 'Identifier',
                              'name' : storage
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
                            }
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : metaKey
                          }
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : subKey
                        }
                      } :
                      {
                        'type'     : 'MemberExpression',
                        'object'   : {
                          'type'     : 'MemberExpression',
                          'computed' : true,
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : storage
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
                          }
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : metaKey
                        }
                      }
                  )
              }
            ],
            'kind'         : 'const'
          },
          {
            'type'       : 'IfStatement',
            'test'       : {
              'type'     : 'BinaryExpression',
              'operator' : 'in',
              'left'     : {
                'type' : 'Identifier',
                'name' : 'key'
              },
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
                    'argument' : {
                      'type'      : 'CallExpression',
                      'callee'    : {
                        'type' : 'MemberExpression',
                        
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
                          'computed' : true,
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : 'db'
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : 'key'
                          }
                        }
                      ]
                    },
                    'prefix'   : true
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
                            'computed' : true,
                            'object'   : {
                              'type' : 'Identifier',
                              'name' : 'db'
                            },
                            'property' : {
                              'type' : 'Identifier',
                              'name' : 'key'
                            }
                          },
                          'right'    : {
                            'type'     : 'ArrayExpression',
                            'elements' : [
                              {
                                'type'     : 'MemberExpression',
                                'computed' : true,
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'db'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'key'
                                }
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
                      'type' : 'MemberExpression',
                      
                      'object'   : {
                        'type'     : 'MemberExpression',
                        'computed' : true,
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : 'db'
                        },
                        'property' : {
                          'type' : 'Identifier',
                          'name' : 'key'
                        }
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
            }
            
          },
          {
            'type'     : 'ReturnStatement',
            'argument' : {
              'type'     : 'AssignmentExpression',
              'operator' : '=',
              'left'     : {
                'type'     : 'MemberExpression',
                'computed' : true,
                'object'   : {
                  'type' : 'Identifier',
                  'name' : 'db'
                },
                'property' : {
                  'type' : 'Identifier',
                  'name' : 'key'
                }
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
    
    
  };
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
  const i = arr.indexOf (current);
  if (i === 0) {
    arr.unshift (...elements);
  } else {
    arr.splice (i, 0, ...elements);
  }
}