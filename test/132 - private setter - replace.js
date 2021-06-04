function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  #q = 0;
  @decorator
  set #p(v) {
    this.#q = v;
  }
  get #p() {
    return this.#q;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

const c = new C();
c.check = 10;
console.assert(c.check === 20)