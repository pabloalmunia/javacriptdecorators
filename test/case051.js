function decorator(value, context) {
  console.assert(context.kind === 'method');
  console.assert(context.name === 'M');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
  console.assert(context.isStatic);
}


class C {
  @decorator
  static M() {}
}

C.M();