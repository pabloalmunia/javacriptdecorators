function decorator1(value, context) {
  if (context.kind === "getter") {
    return function() {
      return value.call(this) * 2;
    }
  }
}
function decorator2(value, context) {
  if (context.kind === "getter") {
    return function() {
      return value.call(this) * 3;
    }
  }
}
class C {
  @decorator1
  @decorator2
  static get p() {
    return 2;
  }
}

console.assert(C.p === 12)