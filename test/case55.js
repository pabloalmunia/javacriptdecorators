function decorator(value) {
  return function (methodº, context) {
    context.defineMetadata('one', value);
  }
}

class C {
  @decorator('test1')
  @decorator('test2')
  static M() {}
}

console.log(C[Symbol.metadata]);
