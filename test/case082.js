function decorator (context) {
  return function(v) {
    return v * 2;
  }
}
class C {
  @decorator
  static P = 10;
}

console.assert(C.P === 20)