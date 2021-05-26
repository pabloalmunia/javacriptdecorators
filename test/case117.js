function decorator (value, context) {
  if (context.kind === 'setter') {
    context.addInitializer(function () {
      this.test = 10;
    });
    return function (v) {
      return value.call (this, v * 2);
    };
  }
}

class C {
  #other = 10;
  get #p() {
    return this.#other;
  }
  @init:decorator
  set #p(v) {
    this.#other = v
  }
  set check(v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

console.assert(new C().test === 10);
const c = new C();
c.check = 20
console.assert(c.check === 40);