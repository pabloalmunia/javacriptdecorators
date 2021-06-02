function decorator (value, context) {
  context.addInitializer (function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  get #p() {}
}

console.assert(new C().test === 10);