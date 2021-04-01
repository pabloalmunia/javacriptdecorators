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
  set #p(v) {
    return this.p = v;
  }
  check(v) {
    this.#p = v;
  }
}

const a = new C();
a.check(10);
console.assert(a.p === 60)