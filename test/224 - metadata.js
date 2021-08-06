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

class B extends A {
  @metadata (20)
  b () {
  }
}

class C extends B {
  @metadata (30)
  c () {
  }
}

// Check the private metadata
for (let key in C.prototype[ Symbol.metadata ][ KEY ].public) {
  console.log(key);
}