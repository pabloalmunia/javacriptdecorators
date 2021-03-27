function decorator(value) {
  return function (methodº, context) {
    context.defineMetadata('one', value);
  }
}

class C {
  @decorator('test1')
  @decorator('test2')
  m() {}
}

console.log(C.prototype[Symbol.metadata]);
