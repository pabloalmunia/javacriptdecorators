function decorator (value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
  return function () {
    return value.call(this) * 2
  };
}


class C {
  static #p = 10;
  @init:decorator
  static get p() {
    return this.#p;
  }
}

console.assert(C.test === 10);
console.assert(C.p === 20);