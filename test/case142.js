function decorator (value, context) {
  return function(v) {
    return value.call(this) * 2;
  }
}
class C {
  static #other = 100;
  @decorator
  static get #P() {
    return C.#other;
  }
  static checkGet() {
    return C.#P;
  }
}

console.assert(C.checkGet() === 200);