const acorn            = require ('acorn');
const stage3           = require ('acorn-stage3');
const recast           = require ('recast');
const walker           = require ('../lib/walker.js');
const clone            = require ('../lib/clone.js');
const unique           = () => Math.random ().toString (32).substring (7);
const insertAfter      = (arr, current, elements) => arr.splice (
  arr.indexOf (current) + 1,
  0,
  ...elements
);
const insertBefore     = (arr, current, elements) => arr.splice (
  arr.indexOf (current),
  0,
  ...elements
);
const insertBeforeNext = (arr, next, elements) => next !== null ?
  arr.splice (arr.indexOf (next), 0, ...elements) :
  arr.push (...elements);
const replace          = (arr, current, elements) => arr.splice (
  arr.indexOf (current),
  1,
  ...elements
);

module.exports = (ast) =>
  prettySource (
    recast.print (
      transform (ast),
      {tabWidth : 2, reuseWhitespace : false}
    ).code);


/**
 *
 * Transpile the AST with decorators to ES2021
 *
 * @param {object} ast - The parsed AST
 * @returns {object}   - The transpiled AST
 *
 */
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
      const classInitializersName   = `_${ className }_class_initializers_${ unique () }`;
      let classInitializersCreated  = false;
      const memberInitializersName  = `_${ className }_member_initializers_${ unique () }`;
      let memberInitializersCreated = false;
      const staticInitializersName  = `_${ className }_static_initializers_${ unique () }`;
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
                init           : decorator.init,
                kind           : decorator.kind,
                className      : className,
                elementName    : o.key.name,
                decoratorName  : decorator.expression,
                variableName   : `_${ className }_${ o.key.name }_${ (decorator.kind === 'getter' || decorator.kind === 'setter' ?
                  'descriptor' :
                  'initializer') }_${ unique () }`,
                initCollection : staticInitializersName,
                isStatic       : true,
                isSymbol       : o.computed
              })
            );
            decoratorsCreated++;
            if (decorator.init) {
              initDecoratorsCreated++;
              if (!staticInitializersCreated) {
                staticInitializersCreated = true;
                insertBefore (parent, klass, [{
                  'type'         : 'VariableDeclaration',
                  'declarations' : [{
                    'type' : 'VariableDeclarator',
                    'id'   : I (staticInitializersName),
                    'init' : {'type' : 'ArrayExpression', 'elements' : []}
                  }],
                  'kind'         : 'const'
                }]);
                insertBeforeNext (parent, nextElement, [{
                  'type'       : 'ExpressionStatement',
                  'expression' : callExpression (staticInitializersName + '.forEach', [
                    {
                      'type'       : 'ArrowFunctionExpression',
                      'expression' : true,
                      'params'     : [I ('initializer')],
                      'body'       : callExpression ('initializer.call', [className, className])
                    }
                  ])
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
          classGenerator (
            klass.id.name,
            decorator.expression,
            decorator.init ? classInitializersName : undefined
          )
        );
        decoratorsCreated++;
        if (decorator.init) {
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
              'expression' : callExpression (
                classInitializersName + '.forEach',
                [
                  {
                    'type'       : 'ArrowFunctionExpression',
                    'expression' : true,
                    'params'     : [I ('initializer')],
                    'body'       : callExpression ('initializer.call', [className, className])
                  }
                ]
              )
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
            const elementName        = o.key.id.name;
            const elementPrivateName = '#' + elementName;
            const symbolName         = `_${ className }_${ elementName }_symbol_${ unique () }`;
            const tempName           = `_${ className }_${ elementName }_temp_${ unique () }`;
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
                  init             : decorator.init,
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
                    init             : decorator.init,
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
              initDecorator (o, decorator);
              decoratorsCreated++;
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
                  init           : decorator.init,
                  kind           : decorator.kind,
                  className      : className,
                  elementName    : o.key.name,
                  decoratorName  : decorator.expression,
                  variableName   : `_${ className }_${ o.key.name }_descriptor_${ unique () }`,
                  initCollection : memberInitializersName,
                  isStatic       : false,
                  isSymbol       : o.computed
                })
              );
              initDecorator (o, decorator);
              decoratorsCreated++;
            }
          }
          o.decorators = undefined;
          
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
          const propertyName  = o.key.name;
          const symbolGetName = `_${ className }_${ propertyName }_get_symbol_${ unique () }`;
          const symbolSetName = `_${ className }_${ propertyName }_set_symbol_${ unique () }`;
          const isStatic      = !!o.static;
          const isPrivate     = o.key.type === 'PrivateName';
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
            const isSymbol    = o.computed;
            const privateName = `_${ o.key.name }_private_property_${ unique () }`;
            // Transform current field to private
            o.key.type        = 'PrivateName';
            o.key.name        = privateName;
            o.key.id          = I (privateName);
            o.accessor        = false;
            o.computed        = false;
            // Create getter and setter methods
            const methods     = addGetterAndSetter ({privateName, propertyName, isPrivate, isStatic, isSymbol});
            if (isPrivate && o.decorators?.length) {
              // Variables
              const getName               = `_${ className }_${ propertyName }_getter_${ unique () }`;
              const setName               = `_${ className }_${ propertyName }_setter_${ unique () }`;
              const globalInitializerName = `_${ className }_${ propertyName }_initializer_${ unique () }`;
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
                [{'type' : 'ThisExpression'}, I ('v')]
              );
              // Add static methods
              methods.push (...staticMethodPrivateAccessor ({privateName, getName, setName}));
              for (let n = (o.decorators || []).length; --n > -1;) {
                const decorator       = o.decorators[ n ];
                const initializerName = `_${ className }_${ propertyName }_initializer_${ unique () }`;
                if (!isStatic) {
                  insertBefore (parent, klass, [variableDeclaration ('let', initializerName)]);
                }
                insertAfter (parent, klass, accessorPrivateGenerator ({
                  init           : decorator.init,
                  initCollection : o.static ? staticInitializersName : memberInitializersName,
                  className,
                  propertyName,
                  initializerName,
                  globalInitializerName,
                  symbolGetName,
                  symbolSetName,
                  getName,
                  setName,
                  isStatic,
                  decoratorName  : decorator.expression,
                  resultName     : `_${ className }_${ propertyName }_result_${ unique () }`
                }));
                if (!isStatic) {
                  o.value = callExpression (
                    initializerName + '.call',
                    [{'type' : 'ThisExpression'}, o.value]
                  );
                }
                initDecorator (o, decorator);
                decoratorsCreated++;
              }
              insertAfter (parent, klass, removeStaticMethodPrivateAccessor ({getName, setName}));
              if (isStatic) {
                insertAfter (parent, klass, addInitializerPrivateStaticAccessor ({
                  className,
                  globalInitializerName,
                  getName,
                  setName
                }));
              }
            } else {
              for (let n = (o.decorators || []).length; --n > -1;) {
                const decorator      = o.decorators[ n ];
                const initializeName = `_${ className }_${ propertyName }_initializer_${ unique () }`;
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
                    init           : decorator.init,
                    decoratorName  : decorator.expression,
                    isStatic       : !!o.static,
                    initCollection : o.static ? staticInitializersName : memberInitializersName,
                    className,
                    initializeName,
                    propertyName,
                    isSymbol
                  })
                );
                initDecorator (o, decorator);
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
              // if (decorator.init && decorator.kind === 'field') {
              //   throw new TypeError ('wrong decorator @init: with a field');
              // }
              // decoratorsCreated++;
              const initializerName = `_${ className }_${ propertyName }_initializer_${ unique () }`;
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
                    init           : decorator.init,
                    initCollection : o.static ? staticInitializersName : memberInitializersName,
                    kind           : decorator.kind,
                    elementName    : o.key.name,
                    decoratorName  : decorator.expression,
                    isStatic       : !!o.static,
                    className,
                    variableName   : initializerName,
                    symbolGetName,
                    symbolSetName
                    
                  }) :
                  publicMemberGenerator ({
                    init           : decorator.init,
                    initCollection : memberInitializersName,
                    kind           : decorator.kind,
                    elementName    : o.key.name,
                    decoratorName  : decorator.expression,
                    isStatic       : !!o.static,
                    className,
                    variableName   : initializerName,
                    isSymbol       : o.computed
                  })
              );
              if (!o.static) {
                o.value = callExpression (
                  initializerName + '.call',
                  [{'type' : 'ThisExpression'}, o.value]
                );
              }
              initDecorator (o, decorator);
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
        parent.splice (preClassLocation, 0, ...metadataHelpers ());
        preClassLocation += 2;
        defineMetadataCreated = true;
      }
      
      function initDecorator (member, decorator) {
        if (decorator.init) {
          initDecoratorsCreated++;
          if (!memberInitializersCreated) {
            memberInitializersCreated = true;
            insertBefore (parent, klass, [{
              'type'         : 'VariableDeclaration',
              'declarations' : [{
                'type' : 'VariableDeclarator',
                'id'   : I (member.static ? staticInitializersName : memberInitializersName),
                'init' : {'type' : 'ArrayExpression', 'elements' : []}
              }],
              'kind'         : 'const'
            }]);
            if (member.static) {
              insertBeforeNext (parent, nextElement, [{
                'type'       : 'ExpressionStatement',
                'expression' : callExpression (
                  staticInitializersName + '.forEach',
                  [
                    {
                      'type'       : 'ArrowFunctionExpression',
                      'expression' : true,
                      'params'     : [I ('initialize')],
                      'body'       : callExpression ('initialize.call', [className, className])
                    }
                  ]
                )
              }]);
            } else {
              addIntoConstructor (klass, [{
                'type'       : 'ExpressionStatement',
                'expression' : callExpression (
                  memberInitializersName + '.forEach',
                  [
                    {
                      'type'   : 'ArrowFunctionExpression',
                      'params' : [I ('initialize')],
                      'body'   : callExpression (
                        'initialize.call',
                        [{'type' : 'ThisExpression'}]
                      )
                    }
                  ]
                )
              }]);
            }
          }
        }
      }
      
    }
  );
  
  return source;
}

/* AST Helpers */

function variableDeclaration (kind, name, value) {
  return {
    'type'         : 'VariableDeclaration',
    'declarations' : [
      {
        'type' : 'VariableDeclarator',
        'id'   : I (name),
        'init' : value
      }
    ],
    'kind'         : kind
  };
}

function I (name, computed = false) {
  const dotPosition = name.indexOf ('.');
  if (dotPosition === -1) {
    return {'type' : 'Identifier', 'name' : name};
  }
  return {
    'type'     : 'MemberExpression',
    'object'   : {'type' : 'Identifier', 'name' : name.substring (0, dotPosition)},
    'property' : I (name.substring (dotPosition + 1)),
    computed
  };
}

function L (name) {
  return {
    'type' : 'Literal', 'value' : name, raw : (
      typeof name === 'string' ? `"${ name }"` :
        typeof boolean ?
          !!name ? 'true' :
            false :
          name
    )
  };
}

function callExpression (functionName, parameters = []) {
  return {
    'type'      : 'CallExpression',
    'callee'    : typeof functionName === 'string' ? I (functionName) : functionName,
    'arguments' : parameters.map (parameter => typeof parameter === 'string' ?
      I (parameter) :
      parameter)
  };
}

function byCode (code) {
  return acorn.Parser.extend (stage3).parse (code, {ecmaVersion : 2020, locations : false}).body;
}

/* Decorator code builders */

function staticMethodPrivateAccessor ({privateName, getName, setName}) {
  return [{
    'type'   : 'MethodDefinition',
    'kind'   : 'method',
    'static' : true,
    'key'    : I (getName),
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
              'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : I (privateName)}
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
      'key'    : I (setName),
      'value'  : {
        'type'   : 'FunctionExpression',
        'params' : [I ('v')],
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
                  'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : I (privateName)}
                },
                'right'    : I ('v')
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
        'left'     : I (getName),
        'right'    : I ('C.' + getName)
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : I (setName),
        'right'    : I ('C.' + setName)
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'UnaryExpression',
        'operator' : 'delete',
        'prefix'   : true,
        'argument' : I ('C.' + getName)
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'UnaryExpression',
        'operator' : 'delete',
        'prefix'   : true,
        'argument' : I ('C.' + setName)
      }
    }
  ];
}

function addInitializerPrivateStaticAccessor ({className, globalInitializerName, getName, setName}) {
  return [{
    'type'         : 'VariableDeclaration',
    'declarations' : [
      {
        'type' : 'VariableDeclarator',
        'id'   : I (globalInitializerName),
        'init' : {
          'type'       : 'ObjectExpression',
          'properties' : [
            {
              'type'  : 'Property',
              'key'   : I ('get'),
              'value' : I (className + '.' + getName)
            },
            {
              'type'  : 'Property',
              'key'   : I ('set'),
              'value' : I (className + '.' + setName)
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
      'key'      : I (symbolGetName),
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
                  I (className) :
                  {'type' : 'ThisExpression'},
                'property' : {'type' : 'PrivateName', 'name' : propertyName, 'id' : I (propertyName)}
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
      'key'      : I (symbolSetName),
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [I ('v')],
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
                    I (className) :
                    {'type' : 'ThisExpression'},
                  'property' : {
                    'type' : 'PrivateName', 'name' : propertyName, 'id' : I (propertyName)
                  }
                },
                'right'    : I ('v')
              }
            }
          ]
        }
      }
    }
  ];
}

function addGetterAndSetter ({propertyName, privateName, isPrivate, isStatic, isSymbol}) {
  return [
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'get',
      'static'   : isStatic,
      'key'      : isPrivate ?
        {'type' : 'PrivateName', 'name' : propertyName, 'id' : I (propertyName)} :
        I (propertyName),
      'computed' : isSymbol,
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
                'object'   : {'type' : 'ThisExpression'},
                'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : I (privateName)}
              }
            }
          ]
        }
      }
    },
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'set',
      'static'   : isStatic,
      'key'      : isPrivate ?
        {'type' : 'PrivateName', 'name' : propertyName, 'id' : I (propertyName)} :
        I (propertyName),
      'computed' : isSymbol,
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [I ('v')],
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
                  'property' : {'type' : 'PrivateName', 'name' : privateName, 'id' : I (privateName)}
                },
                'right'    : I ('v')
              }
            }
          ]
        }
      }
    }
  ];
}

function accessorPrivateGenerator ({init, className, decoratorName, propertyName, initializerName, globalInitializerName, symbolGetName, symbolSetName, getName, setName, resultName, initCollection, isStatic}) {
  const decoratorParameter = [
    {
      'type'  : 'Property',
      'key'   : I ('kind'),
      'value' : L ('auto-accessor')
    },
    {
      'type'  : 'Property',
      'key'   : I ('name'),
      'value' : L ('#' + propertyName)
    },
    {
      'type'  : 'Property',
      'key'   : I ('access'),
      'value' : {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : I ('get'),
            'value' : {
              'type'     : 'MemberExpression',
              'object'   : I (isStatic ? className : className + '.prototype'),
              'property' : I (symbolGetName),
              'computed' : true
            }
          },
          {
            'type'  : 'Property',
            'key'   : I ('set'),
            'value' : {
              'type'     : 'MemberExpression',
              'object'   : I (isStatic ? className : className + '.prototype'),
              'property' : I (symbolSetName),
              'computed' : true
            }
          }
        ]
      }
    },
    {
      'type'  : 'Property',
      'key'   : I ('isStatic'),
      'value' : L (isStatic)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isPrivate'),
      'value' : L (true)
    },
    ContextMetadata (
      isStatic ? className : className + '.prototype',
      'private'
    )
  ];
  if (init) {
    decoratorParameter.push (addInitializer (initCollection));
  }
  return [
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : I (resultName),
          'init' : {
            'type'     : 'LogicalExpression',
            'left'     : callExpression (
              decoratorName,
              [
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : I ('get'),
                      'value' : I (getName)
                    },
                    {
                      'type'  : 'Property',
                      'key'   : I ('set'),
                      'value' : I (setName)
                    }
                  ]
                },
                {
                  'type'       : 'ObjectExpression',
                  'properties' : decoratorParameter
                }
              ]
            ),
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
        'expression' : callExpression (globalInitializerName + '.set.call', [
            className,
            callExpression (
              {
                'type'     : 'LogicalExpression',
                'left'     : I (resultName + '.initialize'),
                'operator' : '||',
                'right'    : {
                  'type'   : 'ArrowFunctionExpression',
                  'params' : [I ('v')],
                  'body'   : I ('v')
                }
              },
              [
                callExpression (globalInitializerName + '.get.call', [I (className)])
              ]
            )
          ]
        )
      } :
      {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'     : 'AssignmentExpression',
          'operator' : '=',
          'left'     : I (initializerName),
          'right'    : {
            'type'     : 'LogicalExpression',
            'left'     : I (resultName + '.initialize'),
            'operator' : '||',
            'right'    : {
              'type'   : 'ArrowFunctionExpression',
              'params' : [I ('v')],
              'body'   : I ('v')
            }
          }
        }
      },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : I (getName),
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : I (resultName + '.get'),
          'operator' : '||',
          'right'    : I (getName)
        }
      }
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'operator' : '=',
        'left'     : I (setName),
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : I (resultName + '.set'),
          'operator' : '||',
          'right'    : I (setName)
        }
      }
    }
  ];
}

function accessorGenerator ({init, className, initializeName, propertyName, decoratorName, initCollection, isStatic, isSymbol}) {
  const descriptorName     = `_${ className }_${ propertyName }_descriptor_${ unique () }`;
  const resultName         = `_${ className }_${ propertyName }_result_${ unique () }`;
  const decoratorParameter = [
    {
      'type'  : 'Property',
      'key'   : I ('kind'),
      'value' : L ('auto-accessor')
    },
    {
      'type'  : 'Property',
      'key'   : I ('name'),
      'value' : L (propertyName)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isStatic'),
      'value' : L (isStatic)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isPrivate'),
      'value' : L (false)
    },
    ContextMetadata (
      isStatic ? className : `${ className }.prototype`,
      'public',
      propertyName,
      isSymbol
    )
  ];
  if (init) {
    decoratorParameter.push (addInitializer (initCollection));
  }
  return [
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : I (descriptorName),
          'init' : callExpression (
            'Object.getOwnPropertyDescriptor',
            [
              isStatic ? className : className + '.prototype',
              isSymbol ?
                I (propertyName) :
                L (propertyName)
            ]
          )
        }
      ],
      'kind'         : 'const'
    },
    {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : I (resultName),
          'init' : {
            'type'     : 'LogicalExpression',
            'left'     : callExpression (decoratorName, [
                {
                  'type'       : 'ObjectExpression',
                  'properties' : [
                    {
                      'type'  : 'Property',
                      'key'   : I ('get'),
                      'value' : I (descriptorName + '.get')
                    },
                    {
                      'type'  : 'Property',
                      'key'   : I ('set'),
                      'value' : I (descriptorName + '.set')
                    }
                  ]
                },
                {
                  'type'       : 'ObjectExpression',
                  'properties' : decoratorParameter
                }
              ]
            ),
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
        'left'     : I (initializeName),
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : I (resultName + '.initialize'),
          'operator' : '||',
          'right'    : {
            'type'       : 'ArrowFunctionExpression',
            'expression' : true,
            'params'     : [I ('v')],
            'body'       : I ('v')
          }
        }
      }
      
    },
    {
      'type'       : 'ExpressionStatement',
      'expression' : callExpression (
        'Object.defineProperty',
        [
          (isStatic) ?
            I (className) :
            I (className + '.prototype'),
          isSymbol ?
            I (propertyName) :
            L (propertyName),
          {
            'type'       : 'ObjectExpression',
            'properties' : [
              {
                'type'  : 'Property',
                'key'   : I ('get'),
                'value' : {
                  'type'     : 'LogicalExpression',
                  'left'     : I (resultName + '.get'),
                  'operator' : '||',
                  'right'    : I (descriptorName + '.get')
                }
              },
              {
                'type'  : 'Property',
                'key'   : I ('set'),
                'value' : {
                  'type'     : 'LogicalExpression',
                  'left'     : I (resultName + '.set'),
                  'operator' : '||',
                  'right'    : I (descriptorName + '.set')
                }
              }
            ]
          }
        ]
      )
    },
    (isStatic) ? {
        'type'       : 'ExpressionStatement',
        'expression' : {
          'type'     : 'AssignmentExpression',
          'operator' : '=',
          'left'     : I (className + '.' + propertyName),
          'right'    : callExpression (
            initializeName,
            [
              I (className + '.' + propertyName)
            ]
          )
        }
      } :
      undefined
  ];
}

function publicMemberGenerator ({init, kind, className, elementName, decoratorName, variableName, initCollection, isStatic, isSymbol}) {
  const isInit        = init;
  const decoratorCall = callExpression (
    decoratorName,
    [
      (kind === 'setter' || kind === 'getter') ?
        I (variableName + (kind === 'setter' ? '.set' : '.get')) :
        (kind === 'field') ?
          I ('undefined') :
          I ((isStatic ? className : className + '.prototype') + '.' + elementName, isSymbol),
      {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : I ('kind'),
            'value' : L (kind)
          },
          {
            'type'  : 'Property',
            'key'   : I ('name'),
            'value' : isSymbol ?
              I (elementName) :
              L (elementName)
          },
          {
            'type'  : 'Property',
            'key'   : I ('isStatic'),
            'value' : L (!!isStatic)
          },
          {
            'type'  : 'Property',
            'key'   : I ('isPrivate'),
            'value' : L (false)
          },
          ContextMetadata (
            isStatic ? className : `${ className }.prototype`,
            'public',
            elementName,
            isSymbol
          )
        ]
      }
    ]
  );
  if (init) {
    decoratorCall.arguments[ 1 ].properties.push (addInitializer (initCollection));
  }
  const defaultValue = (kind === 'setter' || kind === 'getter') ?
    I (variableName + (kind === 'setter' ? '.set' : '.get')) :
    (kind === 'field') ?
      {
        'type'   : 'ArrowFunctionExpression',
        'params' : [I ('v')],
        'body'   : I ('v')
      } :
      I ((isStatic ? className : className + '.prototype') + '.' + elementName, isSymbol);
  return [
    (kind === 'setter' || kind === 'getter') && {
      'type'         : 'VariableDeclaration',
      'declarations' : [
        {
          'type' : 'VariableDeclarator',
          'id'   : I (variableName),
          'init' : callExpression (
            'Object.getOwnPropertyDescriptor',
            [
              (isStatic) ? className : className + '.prototype',
              isSymbol ?
                I (elementName) :
                L (elementName)
            ]
          )
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
            I (variableName + (kind === 'setter' ? '.set' : '.get')) :
            (kind === 'field') ?
              I ((isStatic ? 'const ' : '') + variableName) :
              I ((isStatic ? className : className + '.prototype') + '.' + elementName, isSymbol),
        'operator' : '=',
        'right'    :
          {
            'type'     : 'LogicalExpression',
            'left'     : decoratorCall,
            'operator' : '??',
            'right'    : defaultValue
          }
      }
    },
    (kind === 'setter' || kind === 'getter') ?
      {
        'type'       : 'ExpressionStatement',
        'expression' : callExpression (
          'Object.defineProperty',
          [
            (isStatic) ? className : className + '.prototype',
            isSymbol ?
              I (elementName) :
              L (elementName),
            variableName
          ]
        )
      } :
      (isStatic && kind === 'field') ?
        {
          'type'       : 'ExpressionStatement',
          'expression' : {
            'type'     : 'AssignmentExpression',
            'operator' : '=',
            'left'     : I (className + '.' + elementName, isSymbol),
            'right'    : callExpression (
              variableName + '.call',
              [
                className,
                I (className + '.' + elementName, isSymbol)
              ]
            )
          }
        } :
        undefined
  ];
}

function privateFieldGenerator ({init, kind, className, elementName, decoratorName, variableName, symbolGetName, symbolSetName, initCollection, isStatic}) {
  const decoratorParameter = [
    {
      'type'  : 'Property',
      'key'   : I ('kind'),
      'value' : L (kind)
    },
    {
      'type'  : 'Property',
      'key'   : I ('name'),
      'value' : L ('#' + elementName)
    },
    {
      'type'  : 'Property',
      'key'   : I ('access'),
      'value' : {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : I ('get'),
            'value' : {
              'type'     : 'MemberExpression',
              'object'   : (isStatic) ?
                I (className) :
                {
                  'type'     : 'MemberExpression',
                  'object'   : I (className),
                  'property' : I ('prototype')
                },
              'property' : I (symbolGetName),
              'computed' : true
            }
          },
          {
            'type'  : 'Property',
            'key'   : I ('set'),
            'value' : {
              'type'     : 'MemberExpression',
              'object'   : (isStatic) ?
                I (className) :
                {
                  'type'     : 'MemberExpression',
                  'object'   : I (className),
                  'property' : I ('prototype')
                },
              'property' : I (symbolSetName),
              'computed' : true
            }
          }
        ]
      }
    },
    {
      'type'  : 'Property',
      'key'   : I ('isStatic'),
      'value' : L (isStatic)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isPrivate'),
      'value' : L (true)
    },
    ContextMetadata (
      className + (isStatic ? '' : '.prototype'),
      'private'
    )
  ];
  if (init) {
    decoratorParameter.push (addInitializer (initCollection));
  }
  return [
    {
      'type'       : 'ExpressionStatement',
      'expression' : {
        'type'     : 'AssignmentExpression',
        'left'     :
          I ((isStatic ? 'const ' : '') + variableName),
        'operator' : '=',
        'right'    : {
          'type'     : 'LogicalExpression',
          'left'     : callExpression (
            decoratorName,
            [
              'undefined',
              {
                'type'       : 'ObjectExpression',
                'properties' : decoratorParameter
              }
            ]
          ),
          'operator' : '??',
          'right'    :
            {
              'type'   : 'ArrowFunctionExpression',
              'params' : [I ('v')],
              'body'   : I ('v')
            }
        }
      }
    },
    isStatic ? {
        'type'       : 'ExpressionStatement',
        'expression' : callExpression (
          I (className + '.' + symbolSetName, true),
          [
            callExpression (
              variableName,
              [
                callExpression (
                  I (className + '.' + symbolGetName, true),
                  []
                )
              ]
            )
          ]
        )
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
        'id'   : I (symbolName),
        'init' : callExpression ('Symbol', [])
      }
    ]
  }];
}

function privateCallDecorator ({init, kind, className, decoratorName, symbolName, tempName, elementPrivateName, initializersName, isStatic, isFirst}) {
  const decoratorParameter = [
    {
      'type'  : 'Property',
      'key'   : I ('kind'),
      'value' : L (kind)
    },
    {
      'type'  : 'Property',
      'key'   : I ('name'),
      'value' : L (elementPrivateName)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isStatic'),
      'value' : L (isStatic)
    },
    {
      'type'  : 'Property',
      'key'   : I ('isPrivate'),
      'value' : L (true)
    },
    {
      'type'  : 'Property',
      'key'   : I ('access'),
      'value' : {
        'type'       : 'ObjectExpression',
        'properties' : [
          {
            'type'  : 'Property',
            'key'   : I ('get'),
            'value' : {
              'type'     : 'MemberExpression',
              'object'   :
                (isStatic) ?
                  I (className) :
                  {
                    'type'     : 'MemberExpression',
                    'object'   : I (className),
                    'property' : I ('prototype')
                  },
              'property' : I (symbolName),
              'computed' : true
            }
          }
        ]
      }
    },
    ContextMetadata (
      className + (isStatic ? '' : '.prototype'),
      'private'
    )
  ];
  if (init) {
    decoratorParameter.push (addInitializer (initializersName));
  }
  return callExpression (
    decoratorName,
    [
      (isFirst) ?
        I ((isStatic ? className : className + '.prototype') + '.' + tempName) :
        I (className + '.' + symbolName, true),
      {
        'type'       : 'ObjectExpression',
        'properties' : decoratorParameter
      }
    ]
  );
}

function privateFirstMemberGenerator ({init, kind, className, element, elementName, elementPrivateName, decoratorName, tempName, symbolName, initializersName, isStatic}) {
  return [
    {
      'type'   : 'MethodDefinition',
      'kind'   : 'method',
      'static' : isStatic,
      'key'    : I (tempName),
      'value'  : element.value
    },
    {
      'type'     : 'ClassProperty',
      'static'   : true,
      'computed' : true,
      'key'      : I (symbolName),
      'value'    : {
        'type'     : 'LogicalExpression',
        'left'     : privateCallDecorator ({init, kind, className, element, elementName, elementPrivateName, decoratorName, tempName, initializersName, symbolName, isStatic, isFirst : true}),
        'operator' : '??',
        'right'    : I ((isStatic ? className : className + '.prototype') + '.' + tempName)
      }
    },
    (kind === 'getter' || kind === 'setter') ?
      {
        'type'   : 'MethodDefinition',
        'kind'   : (kind === 'getter') ? 'get' : 'set',
        'static' : isStatic,
        'key'    : {
          'type' : 'PrivateName',
          'name' : elementName,
          'id'   : I (elementName)
        },
        'value'  : {
          'type'   : 'FunctionExpression',
          'params' : [
            (kind === 'setter') ?
              I ('v') :
              undefined
          ],
          'body'   : {
            'type' : 'BlockStatement',
            'body' : [
              {
                'type'     : 'ReturnStatement',
                'argument' : callExpression (
                  callExpression (
                    {
                      'type'     : 'MemberExpression',
                      'object'   : {
                        'type'     : 'MemberExpression',
                        'object'   : I (className),
                        'property' : I (symbolName),
                        'computed' : true
                      },
                      'property' : I ('bind')
                    },
                    [{'type' : 'ThisExpression'}]
                  ),
                  [
                    (kind === 'setter') ?
                      I ('v') :
                      undefined
                  ]
                )
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
          'id'   : I (elementName)
        },
        'value'  : I (className + '.' + symbolName, true)
      },
    {
      'type'     : 'MethodDefinition',
      'kind'     : 'method',
      'static'   : isStatic,
      'computed' : true,
      'key'      : I (symbolName),
      'value'    : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            (kind === 'getter' || kind === 'setter') ?
              {
                'type'     : 'ReturnStatement',
                'argument' : callExpression (
                  {
                    'type'     : 'MemberExpression',
                    'object'   : {
                      'type'     : 'MemberExpression',
                      'object'   : I (className),
                      'property' : I (symbolName),
                      'computed' : true
                    },
                    'property' : I ('bind')
                  },
                  [
                    {
                      'type' : 'ThisExpression'
                    }
                  ]
                )
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
                    'id'   : I (elementName)
                  }
                }
              }
          ]
        }
      }
    }
  ];
}

function privateNextMemberGenerator (descriptor, {init, kind, className, elementPrivateName, decoratorName, initializersName, isStatic, symbolName}) {
  descriptor.splice (descriptor.length - 2, 0,
    {
      'type'     : 'ClassProperty',
      'static'   : true,
      'computed' : true,
      'key'      : I (symbolName),
      'value'    : {
        'type'     : 'LogicalExpression',
        'left'     : privateCallDecorator ({init, kind, className, elementPrivateName, decoratorName, initializersName, isStatic, symbolName}),
        'operator' : '??',
        'right'    : I (className + '.' + symbolName, true)
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
        'argument' : I ((isStatic ? className : className + '.prototype') + '.' + tempName)
      }
    }
  ];
}

// function classInitGenerator (className, decoratorName, collection) {
//   return [
//     {
//       'type'       : 'ExpressionStatement',
//       'expression' : {
//         'type'     : 'AssignmentExpression',
//         'operator' : '=',
//         'left'     : I (className),
//         'right'    : callExpression('__applyDecorator',
//           [
//             callExpression(decoratorName,
//               [
//                 className,
//                 {
//                   'type'       : 'ObjectExpression',
//                   'properties' : [
//                     {
//                       'type'  : 'Property',
//                       'key'   : I ('kind'),
//                       'value' : L ('class')
//                     },
//                     {
//                       'type'  : 'Property',
//                       'key'   : I ('name'),
//                       'value' : L (className)
//                     },
//                     {
//                       'type'  : 'Property',
//                       'key'   : I ('addInitializer'),
//                       "value": {
//                         "type": "ArrowFunctionExpression",
//                         "expression": true,
//                         "params": I( "initializer"),
//                         "body": {
//                           "type": "CallExpression",
//                           "callee": {
//                             "type": "MemberExpression",
//                             "object": I(collection),
//                             "property":I( "push" )
//                           },
//                           "arguments": [I( "initializer")]
//                         }
//                       },
//                     },
//                     {
//                       'type'  : 'Property',
//                       'key'   : I ('defineMetadata'),
//                       'value' : callExpression('__DefineMetadata',
//                         [
//                           className,
//                           L ('constructor')
//                         ]
//                       )
//                     }
//                   ]
//                 }
//               ]
//             ),
//             className,
//             collection
//           ]
//         )
//       }
//     }
//   ];
// }

function classGenerator (className, decoratorName, initCollection) {
  const decoratorParameter = {
    'type'       : 'ObjectExpression',
    'properties' : [
      {
        'type'  : 'Property',
        'key'   : I ('kind'),
        'value' : L ('class')
      },
      {
        'type'  : 'Property',
        'key'   : I ('name'),
        'value' : L (className)
      },
      ContextMetadata (className, 'constructor')
    ]
  };
  if (initCollection) {
    decoratorParameter.properties.push (addInitializer (initCollection));
  }
  
  return [{
    'type'       : 'ExpressionStatement',
    'expression' : {
      'type'     : 'AssignmentExpression',
      'operator' : '=',
      'left'     : I (className),
      'right'    : {
        'type'     : 'LogicalExpression',
        'left'     : callExpression (
          decoratorName,
          [
            className,
            decoratorParameter
          ]
        ),
        'operator' : '??',
        'right'    : I (className)
      }
    }
  }];
}

// function defineMetadataGeneratorCall (storage, metaKey, isSymbol) {
//   return {
//     'type'  : 'Property',
//     'key'   : I ('defineMetadata'),
//     'value' : callExpression (
//       '__DefineMetadata',
//       [
//         storage,
//         isSymbol ? I (metaKey) : L (metaKey)
//       ]
//     )
//   };
// }

function ContextMetadata (storage, kind, metaKey, isSymbol) {
  return {
    'type'     : 'SpreadElement',
    'argument' : callExpression (
      '__PrepareMetadata',
      [
        I (storage),
        L (kind),
        isSymbol ? I (metaKey) : L (metaKey)
      ]
    )
  };
  // return [{
  //   'type'  : 'Property',
  //   'key'   : I ('getMetadata'),
  //   'value' : callExpression (
  //     '__GetMetadata',
  //     [
  //       storage,
  //       isSymbol ? I (metaKey) : L (metaKey)
  //     ]
  //   )
  // }, {
  //   'type'  : 'Property',
  //   'key'   : I ('setMetadata'),
  //   'value' : callExpression (
  //     '__SetMetadata',
  //     [
  //       storage,
  //       isSymbol ? I (metaKey) : L (metaKey)
  //     ]
  //   )
  // }];
}

function metadataHelpers () {
  return byCode (`
if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
    }
  }
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      createObjectWithPrototype(base, Symbol.metadata);
      createObjectWithPrototype(base[Symbol.metadata], key);
      createObjectWithPrototype(base[Symbol.metadata][key], 'public');
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], 'private')) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return (__metadataPrivate.get(base[Symbol.metadata][key]) || [])
              .concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], []);
        }
        __metadataPrivate.get(base[Symbol.metadata][key]).push(value);
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}
  `);
}

// function defineMetadataGenerator () {
//
//   return byCode (`
// if (!Symbol.metadata) {
//   Symbol.metadata = Symbol();
// }
//
// function __DefineMetadata(base, name) {
//   return function(key, value) {
//     if (!base[Symbol.metadata]) {
//       base[Symbol.metadata] = Object.create(null);
//     }
//     if (!base[Symbol.metadata][name]) {
//       base[Symbol.metadata][name] = {};
//     }
//     const db = base[Symbol.metadata][name];
//     if (key in db) {
//       if (!Array.isArray(db[key])) {
//         return db[key] = [db[key], value];
//       }
//       return db[key].push(value);
//     }
//     return db[key] = value;
//   };
// }`);
//
// }

function addInitializer (initCollection) {
  return {
    'type'  : 'Property',
    'key'   : I ('addInitializer'),
    'value' : {
      'type'       : 'ArrowFunctionExpression',
      'expression' : true,
      'params'     : [
        I ('initializer')
      ],
      'body'       : {
        'type'      : 'CallExpression',
        'callee'    : {
          'type'     : 'MemberExpression',
          'object'   : I (initCollection),
          'property' : I ('push')
        },
        'arguments' : [I ('initializer')]
      }
    }
  };
}

// function applyDecoratorGenerator () {
//   return byCode (`
// function __applyDecorator(result, origin, collection) {
//   if (typeof result === "undefined") {
//     return origin;
//   }
//   if (typeof result === "function") {
//     return result;
//   }
//   if (typeof result === "object") {
//     if (typeof result.initialize === "function") {
//       collection.push(result.initialize);
//     }
//     return result.method || result.get || result.set || result.definition || origin;
//   }
//   throw new TypeError("invalid decorator return");
// }
// `)[ 0 ];
// }

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
      'key'   : I ('constructor'),
      'value' : {
        'type'   : 'FunctionExpression',
        'params' : [],
        'body'   : {
          'type' : 'BlockStatement',
          'body' : [
            (klass.superClass) ? {
                'type'       : 'ExpressionStatement',
                'expression' : callExpression ({'type' : 'Super'}, [])
              } :
              undefined,
            ...elements
          ]
        }
      }
    });
  }
}

/* Complementary Helpers */

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