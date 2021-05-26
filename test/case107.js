function decorator (value, context) {
  if (context.kind === 'getter') {
    context.addInitializer(function () {
      this.test = 10;
    });
    return function () {
      return value.call (this) * 2;
    };
  }
}


class C {
  #other = 10;
  @init:decorator
  get #p() {
    return this.#other;
  }
  check() {
    return this.#p
  }
}

console.assert(new C().test === 10);
console.assert(new C().check() === 20);