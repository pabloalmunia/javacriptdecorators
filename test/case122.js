function decorator (value, context) {
  return (v) => v * 100;
}

class A {
  @decorator
  #p = 2;
  
  check() {
    return this.#p;
  }
  
}
console.assert(new A().check() === 200);