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
  static #q = 0;
  
  @decorator1
  @decorator2
  static set #p (v) {
    this.#q = v;
  }
  
  static get #p () {
    return this.#q;
  }
  
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

console.assert(C.check === 0);
C.check = 1;
console.assert(C.check === 6);