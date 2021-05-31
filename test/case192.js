const KEY = Symbol();

function metadata(data) {
  return function (value, context) {
    context.setMetadata(KEY, data);
  };
}

class A {
  @metadata(10)
  #a() {}
}

console.assert(A.prototype[Symbol.metadata][KEY].private[0] === 10);

class B extends A {
  b() {}
}

console.assert(B.prototype[Symbol.metadata][KEY].private[0] === 10);

class C extends B {
  @metadata(30)
  #c() {}
}

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);
console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 10);

class D extends C {
  @metadata(40)
  #d() {}
}

console.assert(D.prototype[Symbol.metadata][KEY].private[0] === 40);
console.assert(D.prototype[Symbol.metadata][KEY].private[1] === 30);
console.assert(D.prototype[Symbol.metadata][KEY].private[2] === 10);
