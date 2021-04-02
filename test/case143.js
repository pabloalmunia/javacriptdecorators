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
  static get #p() {
    return 1;
  }
  static check() {
    return C.#p;
  }
}

console.assert(C.check() === 6)