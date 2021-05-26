function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    value.call(this, v * 2)
  }
}


class C {
  #p = 10;
  get p() {
    return this.#p;
  }
  @init:decorator
  set p(v) {
    this.#p = v
  }
}

console.assert(new C().test === 10);
const c = new C();
c.p = 20
console.assert(c.p === 40);