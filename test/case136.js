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
  static #m() {}
}

console.assert(C.test === 10);