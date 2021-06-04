function decorator (context) {
  return function(v) {
    return v * 2;
  }
}
class C {
  @decorator
  p = 10;
}

const c = new C();
console.assert(c.p === 20)