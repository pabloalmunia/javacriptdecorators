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
  #p  = 10;

  @meta(3)
  @meta(3)
  accessor
  #f = 20;
}

console.assert (C.prototype[ Symbol.metadata ][META].private[0] === 3);
console.assert (C.prototype[ Symbol.metadata ][META].private[1] === 6);