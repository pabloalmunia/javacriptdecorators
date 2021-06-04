function decorator (context) {
  return {
    initialize (v) {
      return v * 2;
    }
  }
}
class C {
  @decorator accessor
  p = 10;
}

const c = new C();
console.assert(c.p === 20)