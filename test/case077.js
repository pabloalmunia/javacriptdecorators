function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    set(v) {
      value.call(this, v * 2)
    },
    initialize() {
      this.test = 10;
    }
  }
}


class C {
  static #p = 10;
  static get p() {
    return this.#p;
  }
  @init:decorator
  static set p(v) {
    this.#p = v
  }
}

console.assert(C.test === 10);
C.p = 20
console.assert(C.p === 40);