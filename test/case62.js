function decorator (value, context) {
  return function() {
    return 'b';
  }
}
class C {
  @decorator
  static get P() {
    return 'a';
  }
}

console.assert(C.P === 'b')