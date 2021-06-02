function decorator (context) {
  return {
    initialize (v) {
      return v * 2;
    }
  }
}
class C {
  @decorator accessor
  static p = 10;
}

console.assert(C.p === 20)