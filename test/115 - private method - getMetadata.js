const ONE = Symbol();
function decorator(value) {
  return function (method, context) {
    const a = context.getMetadata(ONE) || 0;
    context.setMetadata(ONE, a + value);
  }
}

class C {
  @decorator(1)
  @decorator(2)
  #m() {}
}

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 3);
