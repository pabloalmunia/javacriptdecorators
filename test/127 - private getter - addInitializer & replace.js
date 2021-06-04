function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function() {
    return value.call(this) * 2
  }
}


class C {
  #q = 10;
  @init:decorator
  get #p() {
    return this.#q;
  }
  get check() {
    return this.#p;
  }
}

console.assert(new C().test === 10);
console.assert(new C().check === 20);