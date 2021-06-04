function decorator (value, context) {
  return function() {
    return 'b';
  }
}
class C {
  @decorator
  static get p() {
    return 'a';
  }
}

console.assert(C.p === 'b')