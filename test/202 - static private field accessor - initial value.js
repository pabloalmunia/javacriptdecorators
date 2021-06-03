function decorator (context) {
  return {
    initialize (v) {
      return v * 2;
    }
  }
}
class C {
  @decorator accessor
  static #p = 10;
  
  static get check() {
    return this.#p;
  }
}

console.assert(C.check === 20)