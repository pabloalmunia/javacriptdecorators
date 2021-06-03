function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    value.call(this, v * 2)
  }
}


class C {
  static #q = 10;
  static get #p() {
    return this.#q;
  }
  @init:decorator
  static set #p(v) {
    this.#q = v
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

console.assert(C.test === 10);
C.check = 20
console.assert(C.check === 40);