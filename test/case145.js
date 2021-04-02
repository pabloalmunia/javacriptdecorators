function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}


class C {
  @meta('a', 1)
  @meta('b', 2)
  static get #p () {
    return 'a';
  }
}

console.log (C[ Symbol.metadata ]);