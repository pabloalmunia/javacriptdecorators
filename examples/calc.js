function paramType (...types) {
  return function (value, context) {
    return function (...args) {
      for (let n = 0; n < args.length; n++) {
        if (
          (types[ n ] && typeof args[ n ] !== types[ n ]) ||
          (types[ n ] === 'number' && Number.isNaN (args[ n ]))
        ) {
          throw new TypeError (
            `the method .${ context.name }(${
              args.map (s => typeof s === 'string' ? `"${ s }"` : s).join (', ')
            }) is called and the parameter ${ n } is not ${
              types[ n ] === 'object' ?
                'an' :
                'a'
            } ${ types[ n ] }`);
        }
      }
      return value.apply (this, args);
    };
  };
}

const HISTORICAL = Symbol ();

function historical (value, context) {
  value.prototype.historical = function () {
    return this[ HISTORICAL ] || [];
  };
  
  value.prototype.undo = function () {
    if (!this[ HISTORICAL ] || !this[ HISTORICAL ].length) {
      return;
    }
    const last   = this[ HISTORICAL ].pop ();
    const func   = value.prototype[ Symbol.metadata ][ HISTORICAL ].public[ last[ 0 ] ];
    const result = this[ func ].apply (this, last[ 1 ]);
    this[ HISTORICAL ].pop ();
    return result;
  };
  
  Object.keys (value.prototype[ Symbol.metadata ][ HISTORICAL ].public).forEach (method => {
    const fn                  = value.prototype[ method ];
    value.prototype[ method ] = function (...args) {
      const result = fn.apply (this, args);
      if (!this[ HISTORICAL ]) {
        this[ HISTORICAL ] = [];
      }
      this[ HISTORICAL ].push ([method, args]);
      return result;
    };
  });
}

function reverse (method) {
  return function (value, context) {
    context.setMetadata (HISTORICAL, method);
  };
}


@historical
class Calc {
  #value = 0;
  
  @reverse ('sub')
  @paramType ('number')
  add (n) {
    this.#value += n;
    return this.#value;
  }
  
  @reverse ('add')
  @paramType ('number')
  sub (n) {
    this.#value -= n;
    return this.#value;
  }
  
  @reverse ('div')
  @paramType ('number')
  mul (n) {
    this.#value = this.#value * n;
    return this.#value;
  }
  
  @reverse ('mul')
  @paramType ('number')
  div (n) {
    this.#value = this.#value / n;
    return this.#value;
  }
  
  result () {
    return this.#value;
  }
}

const calc = new Calc ();

calc.add (1);
calc.add (2);
calc.add (3);
calc.add (4);
calc.add (5);
calc.add (6);
calc.add (7);
calc.add (8);
calc.add (9);
calc.mul (10);
console.log (calc.result ());
console.log (calc.historical ());
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
calc.undo ();
console.log (calc.result ());
console.log (calc.historical ());

// const calc2 = new Calc ();
// console.log (calc2.historical ());