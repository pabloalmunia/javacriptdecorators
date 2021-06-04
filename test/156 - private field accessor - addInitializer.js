function decorator (value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  accessor
  #p = 1
}

console.assert(new C().test === 10);