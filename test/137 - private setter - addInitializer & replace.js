function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    value.call(this, v * 2)
  }
}


class C {
  #q = 10;
  get #p() {
    return this.#q;
  }
  @init:decorator
  set #p(v) {
    this.#q = v
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

console.assert(new C().test === 10);
const c = new C();
c.check = 20
console.assert(c.check === 40);