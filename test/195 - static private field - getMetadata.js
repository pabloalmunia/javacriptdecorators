const META = Symbol()
function meta(value) {
  return function (element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata (META, a[a.length - 1] + value);
  }
}

class C {
  @meta(1)
  @meta(2)
  static #p  = 10;

  @meta(3)
  @meta(3)
  static #f = 20;
}

console.assert (C[ Symbol.metadata ][META].private[0] === 1);
console.assert (C[ Symbol.metadata ][META].private[1] === 3);
console.assert (C[ Symbol.metadata ][META].private[2] === 6);
console.assert (C[ Symbol.metadata ][META].private[3] === 9);
