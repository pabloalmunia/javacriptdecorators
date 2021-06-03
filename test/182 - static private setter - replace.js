function decorator (value, context) {
  return function(v) {
    value.call(this, v * 2);
  }
}
class C {
  static #q = 0;
  @decorator
  static set #p(v) {
    this.#q = v;
  }
  static get #p() {
    return this.#q;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

C.check = 10;
console.assert(C.check === 20)