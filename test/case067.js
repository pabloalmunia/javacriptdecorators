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
  static #p = 10;
  @init:decorator
  static get p() {
    return this.#p;
  }
}

console.assert(C.test === 10);
console.assert(C.p === 20);