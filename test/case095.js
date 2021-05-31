const META = Symbol()
function meta(value) {
  return function (element, context) {
    if (context.isPrivate) {
      const arr = context.getMetadata(META) || [0];
      context.setMetadata (META, arr[arr.length - 1] + value);
    }
  }
}


class C {
  @meta(1)
  @meta(2)
  #m() {}
}

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);
console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);
