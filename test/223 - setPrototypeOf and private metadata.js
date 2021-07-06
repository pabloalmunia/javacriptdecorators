const KEY = Symbol ();

function metadata (data) {
  return function (value, context) {
    context.setMetadata (KEY, data);
  };
}

class A {
  a = 'a';
  
  @metadata (10)
  #a () {
  }
}

class B extends A {
  b = 'b';
  
  @metadata (20)
  #b () {
  }
}

class C extends B {
  c = 'c';
 
  @metadata (30)
  #c () {
  }
}

console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 0 ] === 30);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 1 ] === 20);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 2 ] === 10);

const c = new C ();
console.log (c);

class Z {
  @metadata (40)
  z() {}
}

Object.setPrototypeOf (C.prototype, Z.prototype);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 0 ] === 30);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 1 ] === 20);
console.assert (C.prototype[ Symbol.metadata ][ KEY ].private[ 2 ] === 10);
