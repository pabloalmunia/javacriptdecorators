function decorator(value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  static m() {}
}

console.assert(C.test === 10);