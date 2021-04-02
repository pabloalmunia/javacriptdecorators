function decorator (value, context) {
  console.log('value', value);
  console.log('context', context);
}

class A {
  @decorator
  static #p = 2;
  
  static check() {
    return A.#p;
  }
  
}
console.assert(A.check() === 2);