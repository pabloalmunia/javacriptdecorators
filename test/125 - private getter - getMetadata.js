const META = Symbol()
function meta(value) {
  return function (element, context) {
    const n = context.getMetadata(META) || [0];
    context.setMetadata (META, n[n.length - 1] + value);
  }
}

class C {
  @meta(1)
  @meta(2)
  get #p () {
    return 'a';
  }
}

console.assert (C.prototype[ Symbol.metadata ][META].private[0] === 1);
console.assert (C.prototype[ Symbol.metadata ][META].private[1] === 3);