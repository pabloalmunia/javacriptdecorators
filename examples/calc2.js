const HISTORY = Symbol ('Historical');
const data = new WeakMap();

function history (value, context) {

  const access = value.prototype[ Symbol.metadata ][ HISTORY ].private[0];
  
  value.prototype.history = function () {
    if (!data.has(this)) {
      data.set(this, [])
    }
    return data.get(this)
  };
  
  value.prototype.undo = function () {
    if (this.history().length) {
      access.set.call(this, this.history().pop () );
    }
  };
  
  Object.keys (value.prototype[ Symbol.metadata ][ HISTORY ].public).forEach (method => {
    const fn                  = value.prototype[ method ];
    value.prototype[ method ] = function (...args) {
      this.history().push (access.get.call(this));
      return fn.apply (this, args);
    };
  });

}

function mutation(value, context) {
  if (context.kind !== 'method') {
    return;
  }
  context.setMetadata (HISTORY, 'change');
}

function state (value, context) {
  if (context.kind !== 'auto-accessor') {
    return;
  }
  context.setMetadata (HISTORY, context.access);
}

@history
class Calc {
  
  @state accessor
  #value = 0;
  
  @mutation
  add (n) {
    this.#value += n;
    return this.#value;
  }
  
  @mutation
  sub (n) {
    this.#value -= n;
    return this.#value;
  }
  
  @mutation
  mul (n) {
    this.#value = this.#value * n;
    return this.#value;
  }
  
  @mutation
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
console.log (calc.history ());
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
console.log (calc.history ());

const calc2 = new Calc ();
console.log (calc2.history ());