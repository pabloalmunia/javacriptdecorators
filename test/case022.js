function decorator (value, context) {
  return function() {
    return 'b';
  }
}
class C {
  @decorator
  get p() {
    return 'a';
  }
}

const a = new C();
console.assert(a.p === 'b')