function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  static #p = 0;
  @decorator
  static set p(v) {
    this.#p = v;
  }
  static get p() {
    return this.#p;
  }
}

C.p = 10;
console.assert(C.p === 20)