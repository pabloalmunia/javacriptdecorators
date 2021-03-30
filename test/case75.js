function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}


class C {
  @meta('a', 1)
  @meta('b', 2)
  static get P () {
    return 'a';
  }
  @meta('c', 3)
  @meta('d', 4)
  static set P (v) {
    return 'a';
  }
}

console.assert (C.P === 'a');
console.log (C[ Symbol.metadata ]);