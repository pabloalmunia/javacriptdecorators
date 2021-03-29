function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}

class C {
  @meta('a', 1)
  @meta('b', 2)
  set p (v) {
  }
  @meta('c', 3)
  p () {
  }
  
}

console.log (C.prototype[ Symbol.metadata ]);