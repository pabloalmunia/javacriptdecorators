function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
  @init:decorator
  @init:decorator
  #m() {}
}

console.assert(new C().test === 10);