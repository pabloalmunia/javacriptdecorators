const META = Symbol()
function meta(value) {
  return function (element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata (META, n + value);
  }
}

class C {
  @meta(1)
  @meta(2)
  static get #p () {
    return 'a';
  }
}

console.assert (C[ Symbol.metadata ][META].private[0] === 3);