const ONE = Symbol();
function decorator(value) {
  return function (method, context) {
    const n = context.getMetadata(ONE) || 0;
    context.setMetadata(ONE, n + value);
  }
}

class C {
  @decorator(1)
  @decorator(2)
  static #m() {}
}

console.assert(C[Symbol.metadata][ONE].private[0] === 3);
