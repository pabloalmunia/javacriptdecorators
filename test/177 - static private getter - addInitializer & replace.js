function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function() {
    return value.call(this) * 2
  }
}


class C {
  static #q = 10;
  @init:decorator
  static get #p() {
    return this.#q;
  }
  static get check() {
    return this.#p;
  }
}

console.assert(C.test === 10);
console.assert(C.check === 20);