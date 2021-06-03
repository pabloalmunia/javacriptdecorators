function decorator (context) {
  return function(v) {
    return v * 2;
  }
}
class C {
  @decorator
  static #p = 10;
  
  static get check() {
    return this.#p;
  }
}

console.assert(C.check === 20)