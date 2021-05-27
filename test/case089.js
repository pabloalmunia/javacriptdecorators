function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    return v * 2;
  };
}


class C {
  @init:decorator
  static p = 10;
}

console.assert(C.test === 10);
console.assert(C.p === 20);