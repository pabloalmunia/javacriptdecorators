const recast = require ('recast');
const walker = require ('../walker/index.js');

module.exports = (ast) => {
  classDecorator (ast);
  return recast.print (ast, {tabWidth : 2, reuseWhitespace : false}).code;
};

function classDecorator (ast) {
  walker (
    ast,
    (o) => o.type === 'ClassDeclaration' && o.decorators?.length,
    (o, p) => {
      for (let decorator of o.decorators) {
        insertAfter (
          p,
          o,
          (decorator.kind === 'init-class' ?
            classInitDecoratorGenerator :
            classDecoratorGenerator) (o.id.name, decorator.expression)
        );
      }
      o.decorators = undefined;
    }
  );
}

function insertAfter (arr, current, next) {
  arr.splice (arr.indexOf (current) + 1, 0, ...next);
}

function classInitDecoratorGenerator (className, decoratorName) {
  const uniqueName = '_result' + Math.random ().toString (32).substring (2);
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
                    'type'      : 'Property',
                    'key'       : {
                      'type' : 'Identifier',
                      'name' : 'kind'
                    },
                    'computed'  : false,
                    'value'     : {
                      'type'  : 'Literal',
                      'value' : 'init-class',
                      'raw'   : '"init-class"'
                    },
                    'kind'      : 'init',
                    'method'    : false,
                    'shorthand' : false
                  },
                  {
                    'type'      : 'Property',
                    'key'       : {
                      'type' : 'Identifier',
                      'name' : 'name'
                    },
                    'computed'  : false,
                    'value'     : {
                      'type'  : 'Literal',
                      'value' : className
                    },
                    'kind'      : 'init',
                    'method'    : false,
                    'shorthand' : false
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
            'type'     : 'MemberExpression',
            'computed' : false,
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
          'type'     : 'MemberExpression',
          'computed' : false,
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
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": uniqueName,
              },
              "property": {
                "type": "Identifier",
                "name": "initialize",
              },
            },
            "property": {
              "type": "Identifier",
              "name": "call",
            },
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": className,
            },
            {
              "type": "Identifier",
              "name": className,
            }
          ],
        }
      }
    }
  ];
}


function classDecoratorGenerator (className, decoratorName) {
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

function defineMetadataGenerator (storage, metaKey) {
  return {
    'type'      : 'Property',
    'key'       : {
      'type' : 'Identifier',
      'name' : 'defineMetadata'
    },
    'computed'  : false,
    'value'     : {
      'type'       : 'FunctionExpression',
      'id'         : null,
      'params'     : [
        {
          'type' : 'Identifier',
          'name' : 'key'
        },
        {
          'type' : 'Identifier',
          'name' : 'value'
        }
      ],
      'body'       : {
        'type' : 'BlockStatement',
        'body' : [
          {
            'type'       : 'IfStatement',
            'test'       : {
              'type'     : 'UnaryExpression',
              'operator' : '!',
              'argument' : {
                'type'     : 'MemberExpression',
                'computed' : false,
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
                      'type'     : 'MemberExpression',
                      'computed' : false,
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
            },
            'alternate'  : null
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
                  'type'     : 'MemberExpression',
                  'computed' : false,
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
                        'type'     : 'MemberExpression',
                        'computed' : false,
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
                        'type'     : 'MemberExpression',
                        'computed' : false,
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
            },
            'alternate'  : null
          },
          {
            'type'       : 'IfStatement',
            'test'       : {
              'type'     : 'UnaryExpression',
              'operator' : '!',
              'argument' : {
                'type'     : 'MemberExpression',
                'computed' : false,
                'object'   : {
                  'type'     : 'MemberExpression',
                  'computed' : true,
                  'object'   : {
                    'type' : 'Identifier',
                    'name' : storage
                  },
                  'property' : {
                    'type'     : 'MemberExpression',
                    'computed' : false,
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
                      'type'     : 'MemberExpression',
                      'computed' : false,
                      'object'   : {
                        'type'     : 'MemberExpression',
                        'computed' : true,
                        'object'   : {
                          'type' : 'Identifier',
                          'name' : 'C'
                        },
                        'property' : {
                          'type'     : 'MemberExpression',
                          'computed' : false,
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
                      'properties' : []
                    }
                  }
                }
              ]
            },
            'alternate'  : null
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
                  'computed' : false,
                  'object'   : {
                    'type'     : 'MemberExpression',
                    'computed' : true,
                    'object'   : {
                      'type' : 'Identifier',
                      'name' : 'C'
                    },
                    'property' : {
                      'type'     : 'MemberExpression',
                      'computed' : false,
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
                        'type'     : 'MemberExpression',
                        'computed' : false,
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
                  },
                  'alternate'  : null
                },
                {
                  'type'     : 'ReturnStatement',
                  'argument' : {
                    'type'      : 'CallExpression',
                    'callee'    : {
                      'type'     : 'MemberExpression',
                      'computed' : false,
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
      },
      'generator'  : false,
      'expression' : false,
      'async'      : false
    },
    'kind'      : 'init',
    'method'    : false,
    'shorthand' : false
  };
}