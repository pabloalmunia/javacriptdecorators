const MY_META = Symbol();

function myMeta(value, context) {
  // context.setMetadata("my-meta", true);
  context.setMetadata(MY_META, true);
}

@myMeta
class C {
}

console.assert(typeof C[Symbol.metadata] === 'object');
console.assert(typeof C[Symbol.metadata][MY_META] === 'object');
console.assert(C[Symbol.metadata][MY_META].constructor === true);