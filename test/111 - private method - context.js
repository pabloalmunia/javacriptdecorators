function decorator (value, context) {
  console.assert (context.kind === 'method');
  console.assert (context.name === '#m');
  console.assert (typeof context.setMetadata === 'function');
  console.assert (typeof context.getMetadata === 'function');
  console.assert (context.isPrivate);
}

class C {
  @decorator
  #m (v) {
    return v * 2;
  }
  
  check (v) {
    return this.#m (v);
  }
}

console.assert (new C ().check (1) === 2);
