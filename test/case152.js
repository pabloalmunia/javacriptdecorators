function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  static #other = 0;
  @decorator
  static set #p(v) {
    C.#other = v;
  }
  static get #p() {
    return C.#other;
  }
  static set p (v) {
    C.#p = v
  }
  static get p () {
    return C.#p;
  }
}

C.p = 10;
console.assert(C.p === 20)