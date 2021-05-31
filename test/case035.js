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
  set p (v) {
  }

  @meta(3)
  @meta(4)
  get p () {
  }
}

console.assert (C.prototype[ Symbol.metadata ][META].public.p === 10);
