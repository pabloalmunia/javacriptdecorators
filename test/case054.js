function decorator1(value, context) {
  context.defineMetadata('one', 1);
}
function decorator2(value, context) {
  context.defineMetadata('one', 1);
  context.defineMetadata('two', 2);
}

class C {
  @decorator1
  @decorator2
  static M() {}
}

console.log(C[Symbol.metadata]);