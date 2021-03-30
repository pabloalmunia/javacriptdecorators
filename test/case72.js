function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  static #P = 0;
  @decorator
  static set P(v) {
    C.#P = v;
  }
  static get P() {
    return C.#P;
  }
}

C.P = 10;
console.assert(C.P === 20);