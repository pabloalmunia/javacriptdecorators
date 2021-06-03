function decorator (value, context) {
  context.addInitializer (function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  static get #p() {}
}

console.assert(C.test === 10);