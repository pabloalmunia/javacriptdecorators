function decorator(value, context) {
  console.assert(context.kind === 'class');
  console.assert(context.name === 'C');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
  value.prototype.x = 10;
}

// Class
@decorator
class C {
}

console.assert(new C().x === 10);