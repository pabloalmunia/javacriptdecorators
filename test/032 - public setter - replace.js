function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  #p = 0;
  @decorator
  set p(v) {
    this.#p = v;
  }
  get p() {
    return this.#p;
  }
}

const c = new C();
c.p = 10;
console.assert(c.p === 20)