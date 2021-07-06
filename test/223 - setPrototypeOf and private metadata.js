const KEY = Symbol ();

function metadata (data) {
  return function (value, context) {
    context.setMetadata (KEY, data);
  };
}

class A {
  @metadata (10)
  #a () {
  }
}

class B extends A {
  @metadata (20)
  #b () {
  }
}

class C extends B {
  @metadata (30)
  #c () {
  }
}

// Check the private metadata
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 0 ] === 30);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 1 ] === 20);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 2 ] === 10);

class Z {
  @metadata (40)
  z() {}
}

// Change the prototype
Object.setPrototypeOf (C.prototype, Z.prototype);

// Private metadata keep as the origin
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 0 ] === 30);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 1 ] === 20);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 2 ] === 10);
