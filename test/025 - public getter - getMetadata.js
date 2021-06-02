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
  get p () {
    return 'a';
  }
}

const a = new C ();
console.assert (C.prototype[ Symbol.metadata ][META].public.p === 3);