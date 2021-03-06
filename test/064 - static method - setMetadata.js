const ONE = Symbol();
const TWO = Symbol();
function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
}

class C {
  @decorator1
  @decorator2
 static m() {}
}

console.assert(C[Symbol.metadata][ONE].public.m === 1);
console.assert(C[Symbol.metadata][TWO].public.m === 2);
