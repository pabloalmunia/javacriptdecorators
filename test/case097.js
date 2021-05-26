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

class C {
  @init:decorator
  #m (v) {
    return v * 2;
  }
  check(v) {
    return this.#m(v);
  }
}

console.assert(new C().check (2) === 8);
console.assert(new C().test === 10);