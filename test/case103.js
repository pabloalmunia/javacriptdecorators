function decorator1(value, context) {
  return function() {
    return value.call(this) * 2;
  }
}
function decorator2(value, context) {
  return function() {
    return value.call(this) * 3;
  }
}

class C {
  @decorator1
  @decorator2
  get #p() {
    return 1;
  }
  check() {
    return this.#p;
  }
}

const a = new C();
console.assert(a.check() === 6)