function decorator (context) {
  return function(v) {
    return v * 2;
  }
}
class C {
  @decorator
  static p = 10;
}

console.assert(C.p === 20)