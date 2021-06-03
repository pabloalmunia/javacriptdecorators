function decorator (value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  accessor
  static #p = 1
}

console.assert(C.test === 10);