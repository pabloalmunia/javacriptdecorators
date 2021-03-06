function decorator (value, context) {
  return function() {
    return 'b';
  }
}
class C {
  @decorator
  get #p() {
    return 'a';
  }
  get check() {
    return this.#p;
  }
}

const a = new C();
console.assert(a.check === 'b')