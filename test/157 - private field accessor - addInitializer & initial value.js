function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize (v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
    }
  }
}


class C {
  @init:decorator accessor
  #p = 10;
  
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

console.assert(new C().test === 10);
const c = new C();
console.assert(c.check === 20);
c.check = 20
console.assert(c.check === 40);
