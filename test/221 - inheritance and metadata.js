const KEY = Symbol();

function metadata(data) {
  return function (value, context) {
    context.setMetadata(KEY, data);
  };
}

class A {
  @metadata(10)
  a() {}
}

console.assert(A.prototype[Symbol.metadata][KEY].public.a === 10);

class B extends A {
  b() {}
}

console.assert(B.prototype[Symbol.metadata][KEY].public.a === 10);

class C extends B {
  @metadata(30)
  c() {}
}

console.assert(C.prototype[Symbol.metadata][KEY].public.a === 10);
console.assert(C.prototype[Symbol.metadata][KEY].public.c === 30);


console.assert(A.prototype[Symbol.metadata][KEY].public.c !== 30);
