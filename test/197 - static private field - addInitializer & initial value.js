function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    return v * 2;
  }
}


class C {
  @init:decorator
  static #p = 10;
  
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

console.assert(C.test === 10);
console.assert(C.check === 20);