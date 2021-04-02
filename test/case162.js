function decorator (value, context) {
  return (v) => v * 100;
}

class A {
  @decorator
  static #p = 2;
  
  static check() {
    return A.#p;
  }
  
}
console.assert(A.check() === 200);