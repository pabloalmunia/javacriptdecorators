function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    get() {
      return value.call(this) * 2
    },
    initialize() {
      this.test = 10;
    }
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