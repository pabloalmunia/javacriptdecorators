function meta(key, value) {
  return function decorator1 (element, context) {
    context.defineMetadata (key, value);
  }
}


class C {
  @meta('a', 1)
  @meta('b', 2)
  get p () {
    return 'a';
  }
}

const a = new C ();
console.assert (a.p === 'a');
console.log (C.prototype[ Symbol.metadata ]);