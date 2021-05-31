function decorator(value, context) {
  console.assert(context.kind === 'field');
  console.assert(context.name === 'p');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
}

class A {
  @decorator
  p = 1;
}