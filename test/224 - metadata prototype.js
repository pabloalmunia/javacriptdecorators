const KEY = Symbol ();

function metadata (data) {
  return function (value, context) {
    context.setMetadata (KEY, data);
  };
}

class A {
  @metadata (10)
  a () {
  }
}

// Check the private metadata
console.assert(Object.getPrototypeOf({}) === Object.prototype);
console.assert(Object.getPrototypeOf(Object.create(Object.prototype)) === Object.prototype);
console.assert(Object.getPrototypeOf(A.prototype[ Symbol.metadata ][ KEY ].public) === Object.prototype);