function decorator (value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    set(v) {
      value.call(this, v * 2)
    },
    initialize() {
      this.test = 10;
    }
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