function decorator (value, context) {
  console.log ('value', value);
  console.log ('context', context);
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol ();
}

function __DefineMetadata (base, name) {
  return function (key, value) {
    if (!base[ Symbol.metadata ]) {
      base[ Symbol.metadata ] = Object.create (null);
    }
    if (!base[ Symbol.metadata ][ name ]) {
      base[ Symbol.metadata ][ name ] = {};
    }
    const db = base[ Symbol.metadata ][ name ];
    if (key in db) {
      if (!Array.isArray (db[ key ])) {
        return db[ key ] = [db[ key ], value];
      }
      return db[ key ].push (value);
    }
    return db[ key ] = value;
  };
}

const _symbol_i5eqji80og = Symbol ();

const _symbol_5n5gjbr52cg = Symbol ();

class A {
  static #p = A._symbol_226ljk6ht5 (2);
  
  static [ _symbol_i5eqji80og ] () {
    return A.#p;
  }
  
  static [ _symbol_5n5gjbr52cg ] (v) {
    A.#p = v;
  }
  
  static check () {
    return A.#p;
  }
}

const _initializer_226ljk6ht5 = decorator (undefined, {
  kind           : 'field',
  name           : '#p',
  access         : {
    get : A[ _symbol_i5eqji80og ],
    set : A[ _symbol_5n5gjbr52cg ]
  },
  isStatic       : true,
  isPrivate      : true,
  defineMetadata : __DefineMetadata (A, '#p')
}) ?? (v => v);

A[ _symbol_5n5gjbr52cg ] (_initializer_226ljk6ht5 (A[ _symbol_i5eqji80og ]));

console.assert (A.check () === 2);