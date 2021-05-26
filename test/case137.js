function decorator (value, context) {
  if (context.kind === 'method') {
    context.addInitializer(function () {
      this.test = 10;
    });
    return function (v) {
      return value.call (this, v * 2);
    };
  }
}

@init:decorator
class C {
  @init:decorator
  static #M (v) {
    return v * 2;
  }
  static check(v) {
    return this.#M(v);
  }
}

console.assert(C.check (2) === 8);
console.assert(C.test === 10);