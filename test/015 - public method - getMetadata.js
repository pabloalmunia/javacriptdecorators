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
  m() {}
}

console.assert(C.prototype[Symbol.metadata][ONE].public.m === 3);
