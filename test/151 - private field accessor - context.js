function decorator(value, context) {
  console.assert(context.kind === 'auto-accessor');
  console.assert(context.name === '#p');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
  console.assert( context.isPrivate );
}

class A {
  @decorator accessor
  #p = 1;
}