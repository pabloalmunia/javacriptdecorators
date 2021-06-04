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
  #p = 10;
  
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

console.assert(new C().test === 10);
console.assert(new C().check === 20);