function decorator1 (value, context) {
  if (context.kind === 'setter') {
    return function (v) {
      value.call (this, v * 2);
    };
  }
}

function decorator2 (value, context) {
  if (context.kind === 'setter') {
    return function (v) {
      value.call (this, v * 3);
    };
  }
}

class C {
  static #p = 0;
  
  @decorator1
  @decorator2
  static set p (v) {
    this.#p = v;
  }
  
  static get p () {
    return this.#p;
  }
}

console.assert(C.p === 0);
C.p = 1;
console.assert(C.p === 6);