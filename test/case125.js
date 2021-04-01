function meta(key, value) {
  return function decorator1 (_, context) {
    context.defineMetadata (key, value);
  }
}

class C {
  @meta('a', 1)
  @meta('b', 2)
  #p  = 10;

  @meta('c', 3)
  @meta('d', 3)
  #f = 20;
}

console.log (C.prototype[ Symbol.metadata ]);