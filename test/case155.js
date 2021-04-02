function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}

class C {
  @meta('a', 1)
  @meta('b', 2)
  static set #p (v) {
  }

  @meta('c', 3)
  @meta('d', 3)
  static get #p () {
  }
}

console.log (C[ Symbol.metadata ]);