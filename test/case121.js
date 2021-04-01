function decorator (value, context) {
  console.log('value', value);
  console.log(context, context);
}

class A {
  @decorator
  #p = 2;
  
  check() {
    return this.#p;
  }
  
}
console.assert(new A().check() === 2);