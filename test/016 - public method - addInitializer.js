function decorator(value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  m() {}
}

console.assert(new C().test === 10);