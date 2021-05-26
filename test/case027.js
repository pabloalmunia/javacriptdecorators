function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return function() {
    return value.call(this) * 2
  }
}


class C {
  #p = 10;
  @init:decorator
  get p() {
    return this.#p;
  }
}

console.assert(new C().test === 10);
console.assert(new C().p === 20);