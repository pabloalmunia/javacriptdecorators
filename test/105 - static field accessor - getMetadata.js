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
  accessor
  static
  p  = 10;

  @meta(3)
  @meta(3)
  accessor
  static
  f = 20;
}

console.assert (C[ Symbol.metadata ][META].public.p === 3);
console.assert (C[ Symbol.metadata ][META].public.f === 6);