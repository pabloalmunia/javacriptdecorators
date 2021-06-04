function decorator (value, context) {
  return function() {
    return 'b';
  }
}
class C {
  @decorator
  static get #p() {
    return 'a';
  }
  static get check() {
    return this.#p;
  }
}

console.assert(C.check === 'b')