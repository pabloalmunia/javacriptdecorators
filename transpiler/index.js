const recast           = require ('recast');
const walker           = require ('../lib/walker.js');
const clone            = require ('../lib/clone.js');
const unique           = () => Math.random ().toString (32).substring (2);
const insertAfter      = (arr, current, elements) => arr
  .splice (arr.indexOf (current) + 1, 0, ...elements);
const insertBefore     = (arr, current, elements) => arr
  .splice (arr.indexOf (current), 0, ...elements);
const insertBeforeNext = (arr, next, elements) => next !== null ?
  arr.splice (arr.indexOf (next), 0, ...elements) :
  arr.push (...elements);
const replace          = (arr, current, elements) => arr
  .splice (arr.indexOf (current), 1, ...elements);


module.exports = (ast) =>
  prettySource (
    recast.print (
      transform (ast),
      {tabWidth : 2, reuseWhitespace : false}
    ).code);


function transform (ast) {
  const source              = clone (ast);
  let defineMetadataCreated = false;
  let applyDecoratorCreated = false;
  let preClassLocation      = null;
  
  //-----------------------------------
  // By Class
  //-----------------------------------
  walker (
    source,
    (o) => {
      return o.type === 'ClassDeclaration';
    },
    (klass, parent) => {
      
      let decoratorsCreated         = 0;
      let initDecoratorsCreated     = 0;
      const className               = klass.id.name;
      const i                       = parent.indexOf (klass);
      preClassLocation              = preClassLocation || i;
      let nextElement               = parent[ i + 1 ] || null;
      const classInitializersName   = '_class_initializers_' + unique ();
      let classInitializersCreated  = false;
      const memberInitializersName  = '_member_initializers_' + unique ();
      let memberInitializersCreated = false;
      const staticInitializersName  = '_static_initializers_' + unique ();
      let staticInitializersCreated = false;
      
      //---------------------------------
      // Static members
      // Public methods and fields
      //---------------------------------
      walker (
        klass,
        (o) => {
          return (o.type === 'MethodDefinition' || o.type === 'ClassProperty') &&
            o.static &&
            !o.accessor &&
            o.key.type !== 'PrivateName' &&
            o.decorators?.length;
        },
        (o) => {
          for (let decorator of (o.decorators || [])) {
            insertAfter (
              parent,
              klass,
              publicMemberGenerator ({
                kind             : decorator.kind,
                className        : className,
                elementName      : o.key.name,
                decoratorName    : decorator.expression,
                variableName     : (decorator.kind === 'getter' || decorator.kind === 'setter' ?
                  '_descriptor_' :
                  '_initializer_') + unique (),
                initializersName : staticInitializersName,
                isStatic         : true
              })
            );
            decoratorsCreated++;
            if (decorator.kind.substring (0, 5) === 'init-') {
              initDecoratorsCreated++;
              if (!staticInitializersCreated) {
                staticInitializersCreated = true;
                insertBefore (parent, klass, [{
                  'type'         : 'VariableDeclaration',
                  'declarations' : [{
                    'type' : 'VariableDeclarator',
                    'id'   : {'type' : 'Identifier', 'name' : staticInitializersName},
                    'init' : {'type' : 'ArrayExpression', 'elements' : []}
                  }],
                  'kind'         : 'const'
                }]);
                insertBeforeNext (parent, nextElement, [{
                  'type'       : 'ExpressionStatement',
                  'expression' : {
                    'type'      : 'CallExpression',
                    'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : staticInitializersName}, 'property' : {'type' : 'Identifier', 'name' : 'forEach'}},
                    'arguments' : [
                      {
                        'type'       : 'ArrowFunctionExpression',
                        'expression' : true,
                        'params'     : [{'type' : 'Identifier', 'name' : 'initialize'}],
                        'body'       : {
                          'type'      : 'CallExpression',
                          'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'initialize'}, 'property' : {'type' : 'Identifier', 'name' : 'call'}},
                          'arguments' : [{'type' : 'Identifier', 'name' : className}, {'type' : 'Identifier', 'name' : className}]
                        }
                      }
                    ]
                  }
                }]);
              }
            }
          }
          o.decorators = undefined;
        }
      );
      
      //---------------------------------
      // Class decorators
      //---------------------------------
      for (let decorator of (klass.decorators || [])) {
        insertAfter (
          parent,
          klass,
          decorator.kind === 'init-class' ?
            classInitGenerator (klass.id.name, decorator.expression, classInitializersName) :
            classGenerator (klass.id.name, decorator.expression)
        );
        decoratorsCreated++;
        if (decorator.kind === 'init-class') {
          initDecoratorsCreated++;
          if (!classInitializersCreated) {
            classInitializersCreated = true;
            insertBefore (parent, klass, [
              variableDeclaration (
                'const',
                classInitializersName,
                {'type' : 'ArrayExpression', 'elements' : []}
              )
            ]);
            insertBeforeNext (parent, nextElement, [{
              'type'       : 'ExpressionStatement',
              'expression' : {
                'type'      : 'CallExpression',
                'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : classInitializersName}, 'property' : {'type' : 'Identifier', 'name' : 'forEach'}},
                'arguments' : [
                  {
                    'type'       : 'ArrowFunctionExpression',
                    'expression' : true,
                    'params'     : [{'type' : 'Identifier', 'name' : 'initialize'}],
                    'body'       : {
                      'type'      : 'CallExpression',
                      'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'initialize'}, 'property' : {'type' : 'Identifier', 'name' : 'call'}},
                      'arguments' : [{'type' : 'Identifier', 'name' : className}, {'type' : 'Identifier', 'name' : className}]
                    }
                  }
                ]
              }
            }]);
          }
        }
      }
      klass.decorators = undefined;
      
      //-----------------------------------
      // Methods public and static+private
      //-----------------------------------
      walker (
        klass,
        (o) => {
          return o.type === 'MethodDefinition' &&
            (!o.static || (o.key.type === 'PrivateName' && o.static)) &&
            o.decorators?.length;
        },
        (o) => {
          if (o.key.type === 'PrivateName') {
            //--------
            // Private
            //--------
            const symbolName         = '_symbol_' + unique ();
            const tempName           = '_temp_' + unique ();
            const elementName        = o.key.id.name;
            const elementPrivateName = '#' + elementName;
            const beforeClass        = privateMemberBeforeGenerator (symbolName);
            const afterClass         = privateMemberAfterGenerator (
              className,
              tempName,
              !!o.static
            );
            let replaceElement;
            for (let decorator of (o.decorators || [])) {
              if (!replaceElement) {
                replaceElement = privateFirstMemberGenerator ({
                  kind             : decorator.kind,
                  element          : o,
                  decoratorName    : decorator.expression,
                  isStatic         : !!o.static,
                  initializersName : o.static ? staticInitializersName : memberInitializersName,
                  tempName,
                  symbolName,
                  className,
                  elementName,
                  elementPrivateName
                });
              } else {
                privateNextMemberGenerator (
                  replaceElement,
                  {
                    kind             : decorator.kind,
                    decoratorName    : decorator.expression,
                    isStatic         : !!o.static,
                    initializersName : o.static ? staticInitializersName : memberInitializersName,
                    symbolName,
                    className,
                    elementPrivateName
                  }
                );
                
              }
              decoratorsCreated++;
              initDecorator (decorator);
            }
            insertBefore (parent, klass, beforeClass);
            replace (klass.body.body, o, replaceElement);
            insertAfter (parent, klass, afterClass);
          } else {
            //--------
            // Public
            //--------
            for (let n = (o.decorators || []).length; --n > -1;) {
              const decorator = o.decorators[ n ];
              insertAfter (
                parent,
                klass,
                publicMemberGenerator ({
                  kind             : decorator.kind,
                  className        : className,
                  elementName      : o.key.name,
                  decoratorName    : decorator.expression,
                  variableName     : '_descriptor_' + unique (),
                  initializersName : memberInitializersName,
                  isStatic         : false
                })
              );
              decoratorsCreated++;
              initDecorator (decorator);
            }
          }
          o.decorators = undefined;
          
          function initDecorator (decorator) {
            if (decorator.kind.substring (0, 5) === 'init-') {
              initDecoratorsCreated++;
              if (!memberInitializersCreated) {
                memberInitializersCreated = true;
                insertBefore (parent, klass, [{
                  'type'         : 'VariableDeclaration',
                  'declarations' : [{
                    'type' : 'VariableDeclarator',
                    'id'   : {
                      'type' : 'Identifier', 'name' : o.static ?
                        staticInitializersName :
                        memberInitializersName
                    },
                    'init' : {'type' : 'ArrayExpression', 'elements' : []}
                  }],
                  'kind'         : 'const'
                }]);
                if (o.static) {
                  insertBeforeNext (parent, nextElement, [{
                    'type'       : 'ExpressionStatement',
                    'expression' : {
                      'type'      : 'CallExpression',
                      'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : staticInitializersName}, 'property' : {'type' : 'Identifier', 'name' : 'forEach'}},
                      'arguments' : [
                        {
                          'type'       : 'ArrowFunctionExpression',
                          'expression' : true,
                          'params'     : [{'type' : 'Identifier', 'name' : 'initialize'}],
                          'body'       : {
                            'type'      : 'CallExpression',
                            'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'initialize'}, 'property' : {'type' : 'Identifier', 'name' : 'call'}},
                            'arguments' : [{'type' : 'Identifier', 'name' : className}, {'type' : 'Identifier', 'name' : className}]
                          }
                        }
                      ]
                    }
                  }]);
                } else {
                  addIntoConstructor (klass, [{
                    'type'       : 'ExpressionStatement',
                    'expression' : {
                      'type'      : 'CallExpression',
                      'callee'    : {
                        'type'     : 'MemberExpression',
                        'object'   : {'type' : 'Identifier', 'name' : memberInitializersName},
                        'property' : {'type' : 'Identifier', 'name' : 'forEach'}
                      },
                      'arguments' : [
                        {
                          'type'   : 'ArrowFunctionExpression',
                          'params' : [{'type' : 'Identifier', 'name' : 'initialize'}],
                          'body'   : {
                            'type'      : 'CallExpression',
                            'callee'    : {
                              'type'                                                                : 'MemberExpression',
                              'object' : {'type' : 'Identifier', 'name' : 'initialize'}, 'property' : {'type' : 'Identifier', 'name' : 'call'}
                            },
                            'arguments' : [{'type' : 'ThisExpression'}]
                          }
                        }
                      ]
                    }
                  }]);
                }
              }
            }
          }
        }
      );
      
      //---------------------------------
      // Fields
      //---------------------------------
      walker (
        klass,
        (o) => {
          return o.type === 'ClassProperty' && (o.decorators?.length || o.accessor);
        },
        (o) => {
          const symbolGetName = '_symbol_' + unique ();
          const symbolSetName = '_symbol_' + unique ();
          const isStatic      = !!o.static;
          const isPrivate     = o.key.type === 'PrivateName';
          const propertyName  = o.key.name;
          if (isPrivate && o.decorators?.length) {
            insertBefore (
              parent,
              klass,
              [
                variableDeclaration ('const', symbolGetName, callExpression ('Symbol')),
                variableDeclaration ('const', symbolSetName, callExpression ('Symbol'))
              ]
            );
            insertAfter (
              klass.body.body,
              o,
              accessorInitialization ({className, propertyName : o.key.name, symbolGetName, symbolSetName, isStatic})
            );
          }
          // Accessor
          if (o.accessor) {
            const privateName = '_property_' + unique ();
            // Transform current field to private
            o.key.type        = 'PrivateName';
            o.key.name        = privateName;
            o.key.id          = {type : 'Identifier', name : privateName};
            o.accessor        = false;
            // Create getter and setter methods
            const methods     = addGetterAndSetter ({privateName, propertyName, isPrivate, isStatic});
            if (isPrivate && o.decorators?.length) {
              // Variables
              const getName               = '_getter_' + unique ();
              const setName               = '_setter_' + unique ();
              const globalInitializerName = '_initializer_' + unique ();
              insertBefore (parent, klass,
                [
                  variableDeclaration ('let', getName),
                  variableDeclaration ('let', setName)
                ]
              );
              // Transform getter and setter
              methods[ 0 ].value.body.body[ 0 ].argument = callExpression (
                getName + '.call',
                [{'type' : 'ThisExpression'}]
              );
              methods[ 1 ].value.body.body[ 0 ]          = clone (methods[ 0 ].value.body.body[ 0 ]);
              methods[ 1 ].value.body.body[ 0 ].argument = callExpression (
                setName + '.call',
                [{'type' : 'ThisExpression'}, identifier ('v')]
              );
              // Add static methods
              methods.push (...staticMethodPrivateAccessor ({privateName, getName, setName}));
              for (let n = (o.decorators || []).length; --n > -1;) {
                const decorator       = o.decorators[ n ];
                const initializerName = '_initializer_' + unique ();
                if (!isStatic) {
                  insertBefore (parent, klass, [variableDeclaration ('let', initializerName)]);
                }
                insertAfter (parent, klass, accessorPrivateGenerator ({
                  className,
                  propertyName,
                  initializerName,
                  globalInitializerName,
                  symbolGetName,
                  symbolSetName,
                  getName,
                  setName,
                  isStatic,
                  decoratorName : decorator.expression,
                  resultName    : '_result_' + unique ()
                }));
                if (!isStatic) {
                  o.value = callExpression (
                    initializerName + '.call',
                    [{'type' : 'ThisExpression'}, o.value]
                  );
                }
                decoratorsCreated++;
              }
              insertAfter (parent, klass, removeStaticMethodPrivateAccessor ({getName, setName}));
              if (isStatic) {
                insertAfter (parent, klass, addIntializerPrivateStaticAccessor ({
                  className,
                  globalInitializerName,
                  getName,
                  setName
                }));
              }
            } else {
              for (let n = (o.decorators || []).length; --n > -1;) {
                const decorator      = o.decorators[ n ];
                const initializeName = '_initializer_' + unique ();
                insertBefore (parent, klass, [variableDeclaration ('let', initializeName)]);
                if (!o.static) {
                  o.value = callExpression (
                    initializeName + '.call',
                    [{'type' : 'ThisExpression'}, o.value]
                  );
                }
                insertAfter (
                  parent,
                  klass,
                  accessorGenerator ({
                    className, initializeName, propertyName, decoratorName : decorator.expression, isStatic : !!o.static
                  })
                );
                decoratorsCreated++;
              }
            }
            // Add setter and getter
            insertAfter (
              klass.body.body,
              o,
              methods
            );
            o.decorators = undefined;
          } else {
            for (let decorator of (o.decorators || [])) {
              if (decorator.kind === 'init-field') {
                throw new TypeError ('wrong decorator @init: with a field');
              }
              decoratorsCreated++;
              const initializerName = '_initializer_' + unique ();
              if (!o.static) {
                insertBefore (
                  parent,
                  klass,
                  [variableDeclaration ('let', initializerName)]
                );
              }
              insertAfter (
                parent,
                klass,
                o.key.type === 'PrivateName' ?
                  privateFieldGenerator ({
                    kind          : decorator.kind,
                    elementName   : o.key.name,
                    decoratorName : decorator.expression,
                    isStatic      : !!o.static,
                    className,
                    variableName  : initializerName,
                    symbolGetName,
                    symbolSetName
                    
                  }) :
                  publicMemberGenerator ({
                    kind          : decorator.kind,
                    elementName   : o.key.name,
                    decoratorName : decorator.expression,
                    isStatic      : !!o.static,
                    className,
                    variableName  : initializerName
                  })
              );
              if (!o.static) {
                o.value = callExpression (
                  initializerName + '.call',
                  [{'type' : 'ThisExpression'}, o.value]
                );
              }
              decoratorsCreated++;
            }
          }
          o.decorators = undefined;
        }
      );
      
      //-------------------------------
      // Global helpers
      //-------------------------------
      if (decoratorsCreated && !defineMetadataCreated) {
        parent.splice (preClassLocation, 0, ...defineMetadataGenerator ());
        preClassLocation += 2;
        defineMetadataCreated = true;
      }
      if (initDecoratorsCreated && !applyDecoratorCreated) {
        parent.splice (preClassLocation++, 0, applyDecoratorGenerator ());
        applyDecoratorCreated = true;
      }
      
    }
  );
  
  return source;
}

function variableDeclaration (kind, name, value) {
  return {
    'type'         : 'VariableDeclaration',
    'declarations' : [
      {
        'type' : 'VariableDeclarator',
        'id'   : {'type' : 'Identifier', 'name' : name},
        'init' : value
      }
    ],
    'kind'         : kind
  };
}

function callExpression (name, arguments = []) {
  return {'type' : 'CallExpression', 'callee' : identifier (name), 'arguments' : arguments};
}

function identifier (name) {
  const dotPosition = name.indexOf ('.');
  if (dotPosition === -1) {
    return {'type' : 'Identifier', 'name' : name};
  }
  return {
    'type'     : 'MemberExpression',
    'object'   : {'type' : 'Identifier', 'name' : name.substring (0, dotPosition)},
    'property' : identifier (name.substring (dotPosition + 1))
  };
}

function staticMethodPrivateAccessor ({privateName, getName, setName}) {
  return [{
    'type'   : 'MethodDefinition',
    'kind'   : 'method',
    'static' : true,
    'key'    : {'type' : 'Identifier', 'name' : getName},
    'value'  : {
      'type' : 'FunctionExpression',
      'body' : {
        'type' : 'BlockStatement',
        'body' : [
          {
            'type'     : 'ReturnStatement',
            'argument' : {
              'type'     : 'MemberExpression',
              'object'   : {'type' : 'ThisExpression'},
              'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : {'type' : 'Identifier', 'name' : privateName}}
            }
          }
        ]
      }
    }
  },
    {
      'type'   : 'MethodDefinition',
      'kind'   : 'method',
      'static' : true,
      'key'    : {'type' : 'Identifier', 'name' : setName},
      'value'  : {
        'type'   : 'FunctionExpression',
        'params' : [{'type' : 'Identifier', 'name' : 'v'}],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            {
              'type'       : 'ExpressionStatement',
              'expression' : {
                'type'     : 'AssignmentExpression',
                'operator' : '=',
                'left'     : {
                  'type'     : 'MemberExpression',
                  'object'   : {'type' : 'ThisExpression'},
                  'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : {'type' : 'Identifier', 'name' : privateName}}
                },
                'right'    : {'type' : 'Identifier', 'name' : 'v'}
              }
            }
          ]
        }
      }
    }
  ];
}

function removeStaticMethodPrivateAccessor ({getName, setName}) {
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : {'type' : 'Identifier', 'name' : getName},
        'right'    : {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : 'C'},
          'property' : {'type' : 'Identifier', 'name' : getName}
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
          'name' : setName
        },
        'right'    : {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : 'C'},
          'property' : {'type' : 'Identifier', 'name' : setName}
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'UnaryExpression',
        'operator' : 'delete',
        'prefix'   : true,
        'argument' : {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : 'C'},
          'property' : {'type' : 'Identifier', 'name' : getName}
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'UnaryExpression',
        'operator' : 'delete',
        'prefix'   : true,
        'argument' : {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : 'C'},
          'property' : {'type' : 'Identifier', 'name' : setName}
        }
      }
    }
  ];
}

function addIntializerPrivateStaticAccessor ({className, globalInitializerName, getName, setName}) {
  return [{
    'type'         : 'VariableDeclaration',
    'declarations' : [
      {
        'type' : 'VariableDeclarator',
        'id'   : {'type' : 'Identifier', 'name' : globalInitializerName},
        'init' : {
          'type'       : 'ObjectExpression',
          'properties' : [
            {
              'type'  : 'Property',
              'key'   : {'type' : 'Identifier', 'name' : 'get'},
              'value' : identifier (className + '.' + getName)
            },
            {
              'type'  : 'Property',
              'key'   : {'type' : 'Identifier', 'name' : 'set'},
              'value' : identifier (className + '.' + setName)
            }
          ]
        }
      }
    ],
    'kind'         : 'const'
  }];
}

function accessorInitialization ({className, propertyName, symbolGetName, symbolSetName, isStatic}) {
  return [
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'method',
      'static'   : isStatic,
      'computed' : true,
      'key'      : {'type' : 'Identifier', 'name' : symbolGetName},
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            {
              'type'     : 'ReturnStatement',
              'argument' : {
                'type'     : 'MemberExpression',
                'object'   : (isStatic) ?
                  {'type' : 'Identifier', 'name' : className} :
                  {'type' : 'ThisExpression'},
                'property' : {'type' : 'PrivateName', 'name' : propertyName, 'id' : {'type' : 'Identifier', 'name' : propertyName}}
              }
            }
          ]
        }
      }
    },
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'method',
      'static'   : isStatic,
      'computed' : true,
      'key'      : {'type' : 'Identifier', 'name' : symbolSetName},
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [{'type' : 'Identifier', 'name' : 'v'}],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            {
              'type'       : 'ExpressionStatement',
              'expression' : {
                'type'     : 'AssignmentExpression',
                'operator' : '=',
                'left'     : {
                  'type'     : 'MemberExpression',
                  'object'   : (isStatic) ?
                    {'type' : 'Identifier', 'name' : className} :
                    {'type' : 'ThisExpression'},
                  'property' : {'type' : 'PrivateName', 'name' : propertyName, 'id' : {'type' : 'Identifier', 'name' : propertyName}}
                },
                'right'    : {'type' : 'Identifier', 'name' : 'v'}
              }
            }
          ]
        }
      }
    }
  ];
}

function addGetterAndSetter ({propertyName, privateName, isPrivate, isStatic}) {
  return [
    {
      'type'   : 'MethodDefinition',
      'kind'   : 'get',
      'static' : isStatic,
      'key'    : isPrivate ?
        {'type' : 'PrivateName', 'name' : propertyName, 'id' : {'type' : 'Identifier', 'name' : propertyName}} :
        {'type' : 'Identifier', 'name' : propertyName},
      'value'  : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            {
              'type'     : 'ReturnStatement',
              'argument' : {
                'type'     : 'MemberExpression',
                'object'   : {'type' : 'ThisExpression'},
                'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : {'type' : 'Identifier', 'name' : privateName}}
              }
            }
          ]
        }
      }
    },
    {
      'type'   : 'MethodDefinition',
      'kind'   : 'set',
      'static' : isStatic,
      'key'    : isPrivate ?
        {'type' : 'PrivateName', 'name' : propertyName, 'id' : {'type' : 'Identifier', 'name' : propertyName}} :
        {'type' : 'Identifier', 'name' : propertyName},
      'value'  : {
        'type'   : 'FunctionExpression',
        'params' : [{'type' : 'Identifier', 'name' : 'v'}],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            {
              'type'       : 'ExpressionStatement',
              'expression' : {
                'type'     : 'AssignmentExpression',
                'operator' : '=',
                'left'     : {
                  'type'     : 'MemberExpression',
                  'object'   : {'type' : 'ThisExpression'},
                  'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : {'type' : 'Identifier', 'name' : privateName}}
                },
                'right'    : {'type' : 'Identifier', 'name' : 'v'}
              }
            }
          ]
        }
      }
    }
  ];
}

function accessorPrivateGenerator ({className, decoratorName, propertyName, initializerName, globalInitializerName, symbolGetName, symbolSetName, getName, setName, resultName, isStatic}) {
  return [
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : {'type' : 'Identifier', 'name' : resultName},
          'init' : {
            'type'     : 'LogicalExpression',
            'left'     : {
              'type'      : 'CallExpression',
              'callee'    : decoratorName,
              'arguments' : [
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'get'},
                      'value' : {'type' : 'Identifier', 'name' : getName}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'set'},
                      'value' : {'type' : 'Identifier', 'name' : setName}
                    }
                  ]
                },
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'kind'},
                      'value' : {'type' : 'Literal', 'value' : 'auto-accessor'}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'name'},
                      'value' : {'type' : 'Literal', 'value' : '#' + propertyName}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'access'},
                      'value' : {
                        'type'       : 'ObjectExpression',
                        'properties' : [
                          {
                            'type'  : 'Property',
                            'key'   : {'type' : 'Identifier', 'name' : 'get'},
                            'value' : {
                              'type'     : 'MemberExpression',
                              'object'   : identifier (isStatic ?
                                className :
                                className + '.prototype'),
                              'property' : {'type' : 'Identifier', 'name' : symbolGetName},
                              'computed' : true
                            }
                          },
                          {
                            'type'  : 'Property',
                            'key'   : {'type' : 'Identifier', 'name' : 'set'},
                            'value' : {
                              'type'     : 'MemberExpression',
                              'object'   : identifier (isStatic ?
                                className :
                                className + '.prototype'),
                              'property' : {'type' : 'Identifier', 'name' : symbolSetName},
                              'computed' : true
                            }
                          }
                        ]
                      }
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'isStatic'},
                      'value' : {'type' : 'Literal', 'value' : isStatic}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'isPrivate'},
                      'value' : {'type' : 'Literal', 'value' : true}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'defineMetadata'},
                      'value' : callExpression (
                        '__DefineMetadata',
                        [
                          identifier (isStatic ? className : className + '.prototype'),
                          {'type' : 'Literal', 'value' : '#p'}
                        ]
                      )
                    }
                  ]
                }
              ]
            },
            'operator' : '||',
            'right'    : {'type' : 'ObjectExpression', 'properties' : []}
          }
        }
      ],
      'kind'         : 'const'
    },
    isStatic ?
      {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'      : 'CallExpression',
          'callee'    : identifier (globalInitializerName + '.set.call'),
          'arguments' : [
            identifier (className),
            {
              'type'      : 'CallExpression',
              'callee'    : {
                'type'     : 'LogicalExpression',
                'left'     : identifier (resultName + '.initialize'),
                'operator' : '||',
                'right'    : {
                  'type'   : 'ArrowFunctionExpression',
                  'params' : [{'type' : 'Identifier', 'name' : 'v'}],
                  'body'   : {'type' : 'Identifier', 'name' : 'v'}
                }
              },
              'arguments' : [
                callExpression (globalInitializerName + '.get.call', [identifier (className)])
              ]
            }
          ]
        }
      } :
      {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'     : 'AssignmentExpression',
          'operator' : '=',
          'left'     : {'type' : 'Identifier', 'name' : initializerName},
          'right'    : {
            'type'     : 'LogicalExpression',
            'left'     : identifier (resultName + '.initialize'),
            'operator' : '||',
            'right'    : {
              'type'   : 'ArrowFunctionExpression',
              'params' : [{'type' : 'Identifier', 'name' : 'v'}],
              'body'   : {'type' : 'Identifier', 'name' : 'v'}
            }
          }
        }
      },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : identifier (getName),
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : identifier (resultName + '.get'),
          'operator' : '||',
          'right'    : identifier (getName)
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : identifier (setName),
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : identifier (resultName + '.set'),
          'operator' : '||',
          'right'    : identifier (setName)
        }
      }
    }
  ];
}

function accessorGenerator ({className, initializeName, propertyName, decoratorName, isStatic}) {
  const descriptorName = '_descriptor_' + unique ();
  const resultName     = '_result_' + unique ();
  return [
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : {'type' : 'Identifier', 'name' : descriptorName},
          'init' : {
            'type'      : 'CallExpression',
            'callee'    : {
              'type'     : 'MemberExpression',
              'object'   : {'type' : 'Identifier', 'name' : 'Object'},
              'property' : {'type' : 'Identifier', 'name' : 'getOwnPropertyDescriptor'}
            },
            'arguments' : [
              isStatic ?
                {'type' : 'Identifier', 'name' : className} :
                {
                  'type'     : 'MemberExpression',
                  'object'   : {'type' : 'Identifier', 'name' : className},
                  'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                },
              {
                'type'  : 'Literal',
                'value' : propertyName
              }
            ]
          }
        }
      ],
      'kind'         : 'const'
    },
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : {'type' : 'Identifier', 'name' : resultName},
          'init' : {
            'type'     : 'LogicalExpression',
            'left'     : {
              'type'      : 'CallExpression',
              'callee'    : decoratorName,
              'arguments' : [
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'get'},
                      'value' : {
                        'type'     : 'MemberExpression',
                        'object'   : {'type' : 'Identifier', 'name' : descriptorName},
                        'property' : {'type' : 'Identifier', 'name' : 'get'}
                      }
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'set'},
                      'value' : {
                        'type'     : 'MemberExpression',
                        'object'   : {'type' : 'Identifier', 'name' : descriptorName},
                        'property' : {'type' : 'Identifier', 'name' : 'set'}
                      }
                    }
                  ]
                },
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'kind'},
                      'value' : {'type' : 'Literal', 'value' : 'auto-accessor'}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'name'},
                      'value' : {'type' : 'Literal', 'value' : propertyName}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'isStatic'},
                      'value' : {'type' : 'Literal', 'value' : isStatic}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'isPrivate'},
                      'value' : {'type' : 'Literal', 'value' : false}
                    },
                    defineMetadataGeneratorCall (
                      isStatic ? className : `${ className }.prototype`,
                      propertyName
                    )
                  ]
                }
              ]
            },
            'operator' : '||',
            'right'    : {
              'type'       : 'ObjectExpression',
              'properties' : []
            }
          }
        }
      ],
      'kind'         : 'const'
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : {'type' : 'Identifier', 'name' : initializeName},
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : {
            'type'     : 'MemberExpression',
            'object'   : {'type' : 'Identifier', 'name' : resultName},
            'property' : {'type' : 'Identifier', 'name' : 'initialize'}
          },
          'operator' : '||',
          'right'    : {
            'type'       : 'ArrowFunctionExpression',
            'expression' : true,
            'params'     : [{'type' : 'Identifier', 'name' : 'v'}],
            'body'       : {'type' : 'Identifier', 'name' : 'v'}
          }
        }
      }
      
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'      : 'CallExpression',
        'callee'    : {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : 'Object'},
          'property' : {'type' : 'Identifier', 'name' : 'defineProperty'}
        },
        'arguments' : [
          (isStatic) ?
            {'type' : 'Identifier', 'name' : className} :
            {
              'type'     : 'MemberExpression',
              'object'   : {'type' : 'Identifier', 'name' : className},
              'property' : {'type' : 'Identifier', 'name' : 'prototype'}
            },
          {'type' : 'Literal', 'value' : propertyName},
          {
            'type'       : 'ObjectExpression',
            'properties' : [
              {
                'type'  : 'Property',
                'key'   : {'type' : 'Identifier', 'name' : 'get'},
                'value' : {
                  'type'     : 'LogicalExpression',
                  'left'     : {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : resultName},
                    'property' : {'type' : 'Identifier', 'name' : 'get'}
                  },
                  'operator' : '||',
                  'right'    : {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : descriptorName},
                    'property' : {'type' : 'Identifier', 'name' : 'get'}
                  }
                }
              },
              {
                'type'  : 'Property',
                'key'   : {'type' : 'Identifier', 'name' : 'set'},
                'value' : {
                  'type'     : 'LogicalExpression',
                  'left'     : {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : resultName},
                    'property' : {'type' : 'Identifier', 'name' : 'set'}
                  },
                  'operator' : '||',
                  'right'    : {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : descriptorName},
                    'property' : {'type' : 'Identifier', 'name' : 'set'}
                  }
                }
              }
            ]
          }
        ]
      }
    },
    (isStatic) ? {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'     : 'AssignmentExpression',
          'operator' : '=',
          'left'     : {
            'type'     : 'MemberExpression',
            'object'   : {'type' : 'Identifier', 'name' : className},
            'property' : {'type' : 'Identifier', 'name' : propertyName}
          },
          'right'    : {
            'type'      : 'CallExpression',
            'callee'    : {
              'type' : 'Identifier',
              'name' : initializeName
            },
            'arguments' : [
              {
                'type'     : 'MemberExpression',
                'object'   : {'type' : 'Identifier', 'name' : className},
                'property' : {'type' : 'Identifier', 'name' : propertyName}
              }
            ]
          }
        }
      } :
      undefined
  ];
}

function publicMemberGenerator ({kind, className, elementName, decoratorName, variableName, initializersName, isStatic}) {
  const isInit        = kind.substring (0, 5) === 'init-';
  const decoratorCall = {
    'type'      : 'CallExpression',
    'callee'    : decoratorName,
    'arguments' : [
      (kind === 'setter' || kind === 'getter' || kind === 'init-setter' || kind === 'init-getter') ?
        {
          'type'     : 'MemberExpression',
          'object'   : {
            'type' : 'Identifier',
            'name' : variableName
          },
          'property' : {
            'type' : 'Identifier',
            'name' : kind === 'setter' || kind === 'init-setter' ? 'set' : 'get'
          }
        } :
        (kind === 'field') ?
          {'type' : 'Identifier', 'name' : 'undefined'} :
          {
            'type'     : 'MemberExpression',
            'object'   :
              (isStatic) ?
                {'type' : 'Identifier', 'name' : className} :
                {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : className}, 'property' : {'type' : 'Identifier', 'name' : 'prototype'}},
            'property' : {'type' : 'Identifier', 'name' : elementName}
          },
      {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'kind'},
            'value' : {'type' : 'Literal', 'value' : kind}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'name'},
            'value' : {'type' : 'Literal', 'value' : elementName}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'isStatic'},
            'value' : {'type' : 'Literal', 'value' : !!isStatic}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'isPrivate'},
            'value' : {'type' : 'Literal', 'value' : false}
          },
          defineMetadataGeneratorCall (
            isStatic ? className : `${ className }.prototype`,
            elementName
          )
        ]
      }
    ]
  };
  const defaultValue  = (kind === 'setter' || kind === 'getter' || kind === 'init-setter' || kind === 'init-getter') ?
    {
      'type'     : 'MemberExpression',
      'object'   : {'type' : 'Identifier', 'name' : variableName},
      'property' : {
        'type' : 'Identifier', 'name' : kind === 'setter' || kind === 'init-setter' ?
          'set' :
          'get'
      }
    } :
    (kind === 'field') ?
      {
        'type'   : 'ArrowFunctionExpression',
        'params' : [{'type' : 'Identifier', 'name' : 'v'}],
        'body'   : {'type' : 'Identifier', 'name' : 'v'}
      } :
      {
        'type'     : 'MemberExpression',
        'object'   :
          (isStatic) ?
            {'type' : 'Identifier', 'name' : className} :
            {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : className}, 'property' : {'type' : 'Identifier', 'name' : 'prototype'}},
        'property' : {'type' : 'Identifier', 'name' : elementName}
      };
  return [
    (kind === 'setter' || kind === 'getter' || kind === 'init-setter' || kind === 'init-getter') && {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : {'type' : 'Identifier', 'name' : variableName},
          'init' : {
            'type'      : 'CallExpression',
            'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'Object'}, 'property' : {'type' : 'Identifier', 'name' : 'getOwnPropertyDescriptor'}},
            'arguments' : [
              (isStatic) ?
                {'type' : 'Identifier', 'name' : className} :
                {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : className}, 'property' : {'type' : 'Identifier', 'name' : 'prototype'}},
              {'type' : 'Literal', 'value' : elementName}
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
          (kind === 'setter' || kind === 'getter' || kind === 'init-setter' || kind === 'init-getter') ?
            {
              'type'     : 'MemberExpression',
              'object'   : {'type' : 'Identifier', 'name' : variableName},
              'property' : {
                'type' : 'Identifier', 'name' : kind === 'setter' || kind === 'init-setter' ?
                  'set' :
                  'get'
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
                    {'type' : 'Identifier', 'name' : className} :
                    {
                      'type'     : 'MemberExpression',
                      'object'   : {'type' : 'Identifier', 'name' : className},
                      'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                    },
                'property' : {
                  'type' : 'Identifier',
                  'name' : elementName
                }
              },
        'operator' : '=',
        'right'    : isInit ?
          {
            'type'      : 'CallExpression',
            'callee'    : {'type' : 'Identifier', 'name' : '__applyDecorator'},
            'arguments' : [
              decoratorCall,
              defaultValue,
              {'type' : 'Identifier', 'name' : initializersName}]
          } :
          {
            'type'     : 'LogicalExpression',
            'left'     : decoratorCall,
            'operator' : '??',
            'right'    : defaultValue
          }
      }
    },
    (kind === 'setter' || kind === 'getter' || kind === 'init-setter' || kind === 'init-getter') ?
      {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'      : 'CallExpression',
          'callee'    : {
            'type'     : 'MemberExpression',
            'object'   : {'type' : 'Identifier', 'name' : 'Object'},
            'property' : {'type' : 'Identifier', 'name' : 'defineProperty'}
          },
          'arguments' : [
            (isStatic) ?
              {'type' : 'Identifier', 'name' : className} :
              {
                'type'     : 'MemberExpression',
                'object'   : {'type' : 'Identifier', 'name' : className},
                'property' : {'type' : 'Identifier', 'name' : 'prototype'}
              },
            {'type' : 'Literal', 'value' : elementName},
            {'type' : 'Identifier', 'name' : variableName}
          ]
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
              'object'   : {'type' : 'Identifier', 'name' : className},
              'property' : {'type' : 'Identifier', 'name' : elementName}
            },
            'right'    : {
              'type'      : 'CallExpression',
              'callee'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : variableName}, 'property' : {'type' : 'Identifier', 'name' : 'call'}},
              'arguments' : [
                {'type' : 'Identifier', 'name' : className},
                {
                  'type'     : 'MemberExpression',
                  'object'   : {'type' : 'Identifier', 'name' : className},
                  'property' : {'type' : 'Identifier', 'name' : elementName}
                }
              ]
            }
          }
        } :
        undefined
  ];
}

function privateFieldGenerator ({kind, className, elementName, decoratorName, variableName, symbolGetName, symbolSetName, isStatic}) {
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'left'     :
          {'type' : 'Identifier', 'name' : (isStatic ? 'const ' : '') + variableName},
        'operator' : '=',
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : {
            'type'      : 'CallExpression',
            'callee'    : decoratorName,
            'arguments' : [
              {'type' : 'Identifier', 'name' : 'undefined'},
              {
                'type'       : 'ObjectExpression',
                'properties' : [
                  {
                    'type'  : 'Property',
                    'key'   : {'type' : 'Identifier', 'name' : 'kind'},
                    'value' : {'type' : 'Literal', 'value' : kind}
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {'type' : 'Identifier', 'name' : 'name'},
                    'value' : {'type' : 'Literal', 'value' : '#' + elementName}
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {
                      'type' : 'Identifier',
                      'name' : 'access'
                    },
                    'value' : {
                      'type'       : 'ObjectExpression',
                      'properties' : [
                        {
                          'type'  : 'Property',
                          'key'   : {'type' : 'Identifier', 'name' : 'get'},
                          'value' : {
                            'type'     : 'MemberExpression',
                            'object'   : (isStatic) ?
                              {'type' : 'Identifier', 'name' : className} :
                              {
                                'type'     : 'MemberExpression',
                                'object'   : {'type' : 'Identifier', 'name' : className},
                                'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                              },
                            'property' : {'type' : 'Identifier', 'name' : symbolGetName},
                            'computed' : true
                          }
                        },
                        {
                          'type'  : 'Property',
                          'key'   : {'type' : 'Identifier', 'name' : 'set'},
                          'value' : {
                            'type'     : 'MemberExpression',
                            'object'   : (isStatic) ?
                              {'type' : 'Identifier', 'name' : className} :
                              {
                                'type'     : 'MemberExpression',
                                'object'   : {'type' : 'Identifier', 'name' : className},
                                'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                              },
                            'property' : {'type' : 'Identifier', 'name' : symbolSetName},
                            'computed' : true
                          }
                        }
                      ]
                    }
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {'type' : 'Identifier', 'name' : 'isStatic'},
                    'value' : {'type' : 'Literal', 'value' : isStatic}
                  },
                  {
                    'type'  : 'Property',
                    'key'   : {'type' : 'Identifier', 'name' : 'isPrivate'},
                    'value' : {'type' : 'Literal', 'value' : true}
                  },
                  defineMetadataGeneratorCall (
                    className + (isStatic ? '' : '.prototype'),
                    '#' + elementName
                  )
                ]
              }
            ]
          },
          'operator' : '??',
          'right'    :
            {
              'type'   : 'ArrowFunctionExpression',
              'params' : [{'type' : 'Identifier', 'name' : 'v'}],
              'body'   : {'type' : 'Identifier', 'name' : 'v'}
            }
        }
      }
    },
    isStatic ? {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'      : 'CallExpression',
          'callee'    : {
            'type'     : 'MemberExpression',
            'object'   : {'type' : 'Identifier', 'name' : className},
            'property' : {'type' : 'Identifier', 'name' : symbolSetName},
            'computed' : true
          },
          'arguments' : [
            {
              'type'      : 'CallExpression',
              'callee'    : {'type' : 'Identifier', 'name' : variableName},
              'arguments' : [
                {
                  'type'      : 'CallExpression',
                  'callee'    : {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : className},
                    'property' : {'type' : 'Identifier', 'name' : symbolGetName},
                    'computed' : true
                  },
                  'arguments' : []
                }
              ]
            }
          ]
        }
      } :
      undefined
  ];
}

function privateMemberBeforeGenerator (symbolName) {
  return [{
    'type'         : 'VariableDeclaration',
    'kind'         : 'const',
    'declarations' : [
      {
        'type' : 'VariableDeclarator',
        'id'   : {
          'type' : 'Identifier',
          'name' : symbolName
        },
        'init' : {
          'type'      : 'CallExpression',
          'callee'    : {
            'type' : 'Identifier',
            'name' : 'Symbol'
          },
          'arguments' : []
        }
      }
    ]
  }];
}

function privateCallDecorator ({kind, className, decoratorName, symbolName, tempName, elementPrivateName, isStatic, isFirst}) {
  return {
    'type'      : 'CallExpression',
    'callee'    : decoratorName,
    'arguments' : [
      (isFirst) ?
        {
          'type'     : 'MemberExpression',
          'object'   :
            (isStatic) ?
              {'type' : 'Identifier', 'name' : className} :
              {
                'type'     : 'MemberExpression',
                'object'   : {'type' : 'Identifier', 'name' : className},
                'property' : {'type' : 'Identifier', 'name' : 'prototype'}
              },
          'property' : {'type' : 'Identifier', 'name' : tempName}
        } :
        {
          'type'     : 'MemberExpression',
          'object'   : {'type' : 'Identifier', 'name' : className},
          'property' : {'type' : 'Identifier', 'name' : symbolName},
          'computed' : true
        },
      {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'kind'},
            'value' : {'type' : 'Literal', 'value' : kind}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'name'},
            'value' : {'type' : 'Literal', 'value' : elementPrivateName}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'isStatic'},
            'value' : {'type' : 'Literal', 'value' : isStatic}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'isPrivate'},
            'value' : {'type' : 'Literal', 'value' : true}
          },
          {
            'type'  : 'Property',
            'key'   : {'type' : 'Identifier', 'name' : 'access'},
            'value' : {
              'type'       : 'ObjectExpression',
              'properties' : [
                {
                  'type'  : 'Property',
                  'key'   : {'type' : 'Identifier', 'name' : 'get'},
                  'value' : {
                    'type'     : 'MemberExpression',
                    'object'   :
                      (isStatic) ?
                        {'type' : 'Identifier', 'name' : className} :
                        {
                          'type'     : 'MemberExpression',
                          'object'   : {'type' : 'Identifier', 'name' : className},
                          'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                        },
                    'property' : {'type' : 'Identifier', 'name' : symbolName},
                    'computed' : true
                  }
                }
              ]
            }
          },
          defineMetadataGeneratorCall (
            className + (isStatic ? '' : '.prototype'),
            elementPrivateName
          )
        ]
      }
    ],
    'optional'  : false
  };
}

function privateFirstMemberGenerator ({kind, className, element, elementName, elementPrivateName, decoratorName, tempName, symbolName, initializersName, isStatic}) {
  return [
    {
      'type'   : 'MethodDefinition',
      'kind'   : 'method',
      'static' : isStatic,
      'key'    : {
        'type' : 'Identifier',
        'name' : tempName
      },
      'value'  : element.value
    },
    {
      'type'     : 'ClassProperty',
      'static'   : true,
      'computed' : true,
      'key'      : {
        'type' : 'Identifier',
        'name' : symbolName
      },
      'value'    : kind.substring (0, 5) === 'init-' ?
        {
          'type'      : 'CallExpression',
          'callee'    : {'type' : 'Identifier', 'name' : '__applyDecorator'},
          'arguments' : [
            privateCallDecorator ({kind, className, element, elementName, elementPrivateName, decoratorName, tempName, symbolName, isStatic, isFirst : true}),
            {
              'type'     : 'MemberExpression',
              'object'   :
                (isStatic) ?
                  {'type' : 'Identifier', 'name' : className} :
                  {
                    'type'     : 'MemberExpression',
                    'object'   : {'type' : 'Identifier', 'name' : className},
                    'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                  },
              'property' : {'type' : 'Identifier', 'name' : tempName}
            },
            {
              'type' : 'Identifier',
              'name' : initializersName
            }
          ]
        } :
        {
          'type'     : 'LogicalExpression',
          'left'     : privateCallDecorator ({kind, className, element, elementName, elementPrivateName, decoratorName, tempName, symbolName, isStatic, isFirst : true}),
          'operator' : '??',
          'right'    : {
            'type'     : 'MemberExpression',
            'object'   :
              (isStatic) ?
                {'type' : 'Identifier', 'name' : className} :
                {
                  'type'     : 'MemberExpression',
                  'object'   : {'type' : 'Identifier', 'name' : className},
                  'property' : {'type' : 'Identifier', 'name' : 'prototype'}
                },
            'property' : {'type' : 'Identifier', 'name' : tempName}
          }
        }
    },
    (kind === 'getter' || kind === 'setter' || kind === 'init-getter' || kind === 'init-setter') ?
      {
        'type'   : 'MethodDefinition',
        'kind'   : (kind === 'getter' || kind === 'init-getter') ? 'get' : 'set',
        'static' : isStatic,
        'key'    : {
          'type' : 'PrivateName',
          'name' : elementName,
          'id'   : {'type' : 'Identifier', 'name' : elementName}
        },
        'value'  : {
          'type'   : 'FunctionExpression',
          'params' : [
            (kind === 'setter' || kind === 'init-setter') ?
              {'type' : 'Identifier', 'name' : 'v'} :
              undefined
          ],
          'body'   : {
            'type' : 'BlockStatement',
            'body' : [
              {
                'type'     : 'ReturnStatement',
                'argument' : {
                  'type'      : 'CallExpression',
                  'callee'    : {
                    'type'      : 'CallExpression',
                    'callee'    : {
                      'type'     : 'MemberExpression',
                      'object'   : {
                        'type'     : 'MemberExpression',
                        'object'   : {'type' : 'Identifier', 'name' : className},
                        'property' : {'type' : 'Identifier', 'name' : symbolName},
                        'computed' : true
                      },
                      'property' : {'type' : 'Identifier', 'name' : 'bind'}
                    },
                    'arguments' : [{'type' : 'ThisExpression'}]
                  },
                  'arguments' : [
                    (kind === 'setter' || kind === 'init-setter') ?
                      {'type' : 'Identifier', 'name' : 'v'} :
                      undefined
                  ]
                }
              }
            ]
          }
        }
      } :
      {
        'type'   : 'ClassProperty',
        'static' : isStatic,
        'key'    : {
          'type' : 'PrivateName',
          'name' : elementName,
          'id'   : {
            'type' : 'Identifier',
            'name' : elementName
          }
        },
        'value'  : {
          'type'     : 'MemberExpression',
          'object'   : {
            'type' : 'Identifier',
            'name' : className
          },
          'property' : {
            'type' : 'Identifier',
            'name' : symbolName
          },
          'computed' : true,
          'optional' : false
        }
      },
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'method',
      'static'   : isStatic,
      'computed' : true,
      'key'      : {
        'type' : 'Identifier',
        'name' : symbolName
      },
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            (kind === 'getter' || kind === 'setter' || kind === 'init-getter' || kind === 'init-setter') ?
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
                        'name' : className
                      },
                      'property' : {
                        'type' : 'Identifier',
                        'name' : symbolName
                      },
                      'computed' : true
                    },
                    'property' : {
                      'type' : 'Identifier',
                      'name' : 'bind'
                    }
                  },
                  'arguments' : [
                    {
                      'type' : 'ThisExpression'
                    }
                  ]
                }
              } :
              {
                'type'     : 'ReturnStatement',
                'argument' : {
                  'type'     : 'MemberExpression',
                  'object'   : {
                    'type' : 'ThisExpression'
                  },
                  'property' : {
                    'type' : 'PrivateName',
                    'name' : elementName,
                    'id'   : {
                      'type' : 'Identifier',
                      'name' : elementName
                    }
                  }
                }
              }
          ]
        }
      }
    }
  ];
}

function privateNextMemberGenerator (descriptor, {kind, className, elementPrivateName, decoratorName, initializersName, isStatic, symbolName}) {
  descriptor.splice (descriptor.length - 2, 0,
    {
      'type'     : 'ClassProperty',
      'static'   : true,
      'computed' : true,
      'key'      : {
        'type' : 'Identifier',
        'name' : symbolName
      },
      'value'    : kind.substring (0, 5) === 'init-' ?
        {
          'type'      : 'CallExpression',
          'callee'    : {'type' : 'Identifier', 'name' : '__applyDecorator'},
          'arguments' : [
            privateCallDecorator ({kind, className, elementPrivateName, decoratorName, symbolName, isStatic, isFirst : true}),
            {
              'type'     : 'MemberExpression',
              'object'   : {
                'type' : 'Identifier',
                'name' : className
              },
              'property' : {
                'type' : 'Identifier',
                'name' : symbolName
              },
              'computed' : true
            },
            {
              'type' : 'Identifier',
              'name' : initializersName
            }
          ]
        } :
        {
          'type'     : 'LogicalExpression',
          'left'     : privateCallDecorator ({kind, className, elementPrivateName, decoratorName, isStatic, symbolName}),
          'operator' : '??',
          'right'    : {
            'type'     : 'MemberExpression',
            'object'   : {
              'type' : 'Identifier',
              'name' : className
            },
            'property' : {
              'type' : 'Identifier',
              'name' : symbolName
            },
            'computed' : true
          }
        }
    }
  );
}

function privateMemberAfterGenerator (className, tempName, isStatic) {
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'UnaryExpression',
        'operator' : 'delete',
        'prefix'   : true,
        'argument' : {
          'type'     : 'MemberExpression',
          'object'   :
            (isStatic) ? {
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
            'name' : tempName
          }
        }
      }
    }
  ];
}

function classInitGenerator (className, decoratorName, collection) {
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : {'type' : 'Identifier', 'name' : className},
        'right'    : {
          'type'      : 'CallExpression',
          'callee'    : {'type' : 'Identifier', 'name' : '__applyDecorator'},
          'arguments' : [
            {
              'type'      : 'CallExpression',
              'callee'    : decoratorName,
              'arguments' : [
                {'type' : 'Identifier', 'name' : className},
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'kind'},
                      'value' : {'type' : 'Literal', 'value' : 'init-class'}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'name'},
                      'value' : {'type' : 'Literal', 'value' : className}
                    },
                    {
                      'type'  : 'Property',
                      'key'   : {'type' : 'Identifier', 'name' : 'defineMetadata'},
                      'value' : {
                        'type'      : 'CallExpression',
                        'callee'    : {'type' : 'Identifier', 'name' : '__DefineMetadata'},
                        'arguments' : [
                          {'type' : 'Identifier', 'name' : className},
                          {'type' : 'Literal', 'value' : 'constructor'}
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {'type' : 'Identifier', 'name' : className},
            {'type' : 'Identifier', 'name' : collection}
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
                    'value' : className,
                    'raw'   : `"${ className }"`
                  }
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
                        'type'        : 'MemberExpression',
                        'object'      : {
                          'type' : 'Identifier',
                          'name' : 'base'
                        },
                        'property'    : {
                          'type'     : 'MemberExpression',
                          'object'   : {
                            'type' : 'Identifier',
                            'name' : 'Symbol'
                          },
                          'property' : {
                            'type' : 'Identifier',
                            'name' : 'metadata'
                          }
                        }, 'computed' : true
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
                              'type'        : 'MemberExpression',
                              'object'      : {
                                'type' : 'Identifier',
                                'name' : 'base'
                              },
                              'property'    : {
                                'type'     : 'MemberExpression',
                                'object'   : {
                                  'type' : 'Identifier',
                                  'name' : 'Symbol'
                                },
                                'property' : {
                                  'type' : 'Identifier',
                                  'name' : 'metadata'
                                }
                              }, 'computed' : true
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
                        'type'        : 'MemberExpression',
                        'object'      : {
                          'type'        : 'MemberExpression',
                          'object'      : {
                            'type' : 'Identifier',
                            'name' : 'base'
                          },
                          'property'    : {
                            'type'     : 'MemberExpression',
                            'object'   : {
                              'type' : 'Identifier',
                              'name' : 'Symbol'
                            },
                            'property' : {
                              'type' : 'Identifier',
                              'name' : 'metadata'
                            }
                          }, 'computed' : true
                        },
                        'property'    : {
                          'type' : 'Identifier',
                          'name' : 'name'
                        }, 'computed' : true
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
                              'type'        : 'MemberExpression',
                              'object'      : {
                                'type'        : 'MemberExpression',
                                'object'      : {
                                  'type' : 'Identifier',
                                  'name' : 'base'
                                },
                                'property'    : {
                                  'type'     : 'MemberExpression',
                                  'object'   : {
                                    'type' : 'Identifier',
                                    'name' : 'Symbol'
                                  },
                                  'property' : {
                                    'type' : 'Identifier',
                                    'name' : 'metadata'
                                  }
                                }, 'computed' : true
                              },
                              'property'    : {
                                'type' : 'Identifier',
                                'name' : 'name'
                              }, 'computed' : true
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
                          'type'        : 'MemberExpression',
                          'object'      : {
                            'type'        : 'MemberExpression',
                            'object'      : {
                              'type' : 'Identifier',
                              'name' : 'base'
                            },
                            'property'    : {
                              'type'     : 'MemberExpression',
                              'object'   : {
                                'type' : 'Identifier',
                                'name' : 'Symbol'
                              },
                              'property' : {
                                'type' : 'Identifier',
                                'name' : 'metadata'
                              }
                            }, 'computed' : true
                          },
                          'property'    : {
                            'type' : 'Identifier',
                            'name' : 'name'
                          }, 'computed' : true
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
                                  'type'        : 'MemberExpression',
                                  'object'      : {
                                    'type' : 'Identifier',
                                    'name' : 'db'
                                  },
                                  'property'    : {
                                    'type' : 'Identifier',
                                    'name' : 'key'
                                  }, 'computed' : true
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
                                'type'        : 'MemberExpression',
                                'object'      : {
                                  'type' : 'Identifier',
                                  'name' : 'db'
                                },
                                'property'    : {
                                  'type' : 'Identifier',
                                  'name' : 'key'
                                }, 'computed' : true
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
                        'type'        : 'MemberExpression',
                        'object'      : {
                          'type' : 'Identifier',
                          'name' : 'db'
                        },
                        'property'    : {
                          'type' : 'Identifier',
                          'name' : 'key'
                        }, 'computed' : true
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

function applyDecoratorGenerator () {
  return {
    'type'   : 'FunctionDeclaration',
    'id'     : {'type' : 'Identifier', 'name' : '__applyDecorator'},
    'params' : [
      {'type' : 'Identifier', 'name' : 'result'},
      {'type' : 'Identifier', 'name' : 'origin'},
      {'type' : 'Identifier', 'name' : 'collection'}
    ],
    'body'   : {
      'type' : 'BlockStatement',
      'body' : [
        {
          'type'       : 'IfStatement',
          'test'       : {
            'type'     : 'BinaryExpression',
            'left'     : {'type' : 'UnaryExpression', 'operator' : 'typeof', 'prefix' : true, 'argument' : {'type' : 'Identifier', 'name' : 'result'}},
            'operator' : '===',
            'right'    : {'type' : 'Literal', 'value' : 'undefined'}
          },
          'consequent' : {'type' : 'BlockStatement', 'body' : [{'type' : 'ReturnStatement', 'argument' : {'type' : 'Identifier', 'name' : 'origin'}}]}
        },
        {
          'type'       : 'IfStatement',
          'test'       : {
            'type'     : 'BinaryExpression',
            'left'     : {'type' : 'UnaryExpression', 'operator' : 'typeof', 'prefix' : true, 'argument' : {'type' : 'Identifier', 'name' : 'result'}},
            'operator' : '===',
            'right'    : {'type' : 'Literal', 'value' : 'function'}
          },
          'consequent' : {'type' : 'BlockStatement', 'body' : [{'type' : 'ReturnStatement', 'argument' : {'type' : 'Identifier', 'name' : 'result'}}]}
        },
        {
          'type'       : 'IfStatement',
          'test'       : {
            'type'     : 'BinaryExpression',
            'left'     : {'type' : 'UnaryExpression', 'operator' : 'typeof', 'prefix' : true, 'argument' : {'type' : 'Identifier', 'name' : 'result'}},
            'operator' : '===',
            'right'    : {'type' : 'Literal', 'value' : 'object'}
          },
          'consequent' : {
            'type' : 'BlockStatement',
            'body' : [
              {
                'type'       : 'IfStatement',
                'test'       : {
                  'type'     : 'BinaryExpression',
                  'left'     : {'type' : 'UnaryExpression', 'operator' : 'typeof', 'prefix' : true, 'argument' : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'initialize'}}},
                  'operator' : '===',
                  'right'    : {'type' : 'Literal', 'value' : 'function'}
                },
                'consequent' : {
                  'type' : 'BlockStatement',
                  'body' : [
                    {
                      'type'       : 'ExpressionStatement',
                      'expression' : {
                        'type'      : 'CallExpression', 'callee' : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'collection'}, 'property' : {'type' : 'Identifier', 'name' : 'push'}},
                        'arguments' : [
                          {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'initialize'}}
                        ]
                      }
                    }
                  ]
                }
              },
              {
                'type'     : 'ReturnStatement',
                'argument' : {
                  'type'     : 'LogicalExpression',
                  'left'     : {
                    'type'     : 'LogicalExpression',
                    'left'     : {
                      'type'     : 'LogicalExpression',
                      'left'     : {
                        'type'     : 'LogicalExpression',
                        'left'     : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'method'}},
                        'operator' : '||',
                        'right'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'get'}}
                      },
                      'operator' : '||',
                      'right'    : {'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'set'}}
                    },
                    'operator' : '||',
                    'right'    : {
                      'type' : 'MemberExpression', 'object' : {'type' : 'Identifier', 'name' : 'result'}, 'property' : {'type' : 'Identifier', 'name' : 'definition'}
                    }
                  },
                  'operator' : '||',
                  'right'    : {'type' : 'Identifier', 'name' : 'origin'}
                }
              }
            ]
          }
        },
        {
          'type'     : 'ThrowStatement',
          'argument' : {
            'type'      : 'NewExpression', 'callee' : {'type' : 'Identifier', 'name' : 'TypeError'},
            'arguments' : [{'type' : 'Literal', 'value' : 'invalid decorator return'}]
          }
        }
      ]
    }
  };
}

function addIntoConstructor (klass, elements) {
  let foundConstructor = false;
  walker (
    klass.body.body,
    (o) => o.kind === 'constructor',
    (o) => {
      foundConstructor = true;
      o.value.body.body.push (...elements);
    }
  );
  if (!foundConstructor) {
    klass.body.body.unshift ({
      'type'  : 'MethodDefinition',
      'kind'  : 'constructor',
      'key'   : {'type' : 'Identifier', 'name' : 'constructor'},
      'value' : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            (klass.superClass) ? {
                'type'       : 'ExpressionStatement',
                'expression' : {'type' : 'CallExpression', 'callee' : {'type' : 'Super'}, 'arguments' : []}
              } :
              undefined,
            ...elements
          ]
        }
      }
    });
  }
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