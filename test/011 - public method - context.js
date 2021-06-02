function decorator(value, context) {
  console.assert(context.kind === 'method');
  console.assert(context.name === 'm');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
}

class C {
  @decorator
  m(v) {
    return v * 2;
  }
}

console.assert(new C().m(1) === 2);
