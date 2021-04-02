function decorator1(value, context) {
  return function(v) {
    return value.call(this, v * 2);
  }
}
function decorator2(value, context) {
  return function(v) {
    return value.call(this, v * 3);
  }
}

class C {
  @decorator1
  @decorator2
  static set #p(v) {
    C.p = v;
  }
  static check(v) {
    this.#p = v;
  }
}

C.check(10);
console.assert(C.p === 60)