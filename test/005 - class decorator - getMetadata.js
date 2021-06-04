const MY_META = Symbol();

function myMeta(value, context) {
  const meta = context.getMetadata(MY_META) || 0;
  context.setMetadata(MY_META, meta + 1);
  return class extends C {
  }
}

@myMeta
@myMeta
@myMeta
class C {
}

console.assert(typeof C[Symbol.metadata] === 'object');
console.assert(typeof C[Symbol.metadata][MY_META] === 'object');
console.assert(C[Symbol.metadata][MY_META].constructor === 3);