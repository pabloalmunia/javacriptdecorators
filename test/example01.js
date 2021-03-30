function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}

@meta ('className', 'C')
class C {
  @meta('a', 1)
  @meta('b', 2)
  set p (v) {
  }
  @meta('c', 3)
  get p () {
  }
  @meta('static_property', 10)
  static P = 10;
}

console.log (C.prototype[ Symbol.metadata ]);