function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    initialize() {
      this.test = this.test ? this.test *  2 : 10;
    }
  }
}


class C {
  @init:decorator
  @init:decorator
  static #m() {}
}

console.assert(C.test === 20);