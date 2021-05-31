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

// B.prototype don't have an own property Symbol.metadata,
// but can access through its prototype chain
console.assert(B.prototype[Symbol.metadata][KEY].public.a === 10);

class C extends B {
  @metadata(30)
  c() {}
}

console.assert(C.prototype[Symbol.metadata][KEY].public.a === 10);
console.assert(C.prototype[Symbol.metadata][KEY].public.c === 30);
console.assert(A.prototype[Symbol.metadata][KEY].public.c !== 30);

class D extends C {
  @metadata(40)
  d() {}
}

console.assert(D.prototype[Symbol.metadata][KEY].public.a === 10);
console.assert(D.prototype[Symbol.metadata][KEY].public.c === 30);
console.assert(D.prototype[Symbol.metadata][KEY].public.d === 40);
console.assert(A.prototype[Symbol.metadata][KEY].public.d !== 40);
console.assert(C.prototype[Symbol.metadata][KEY].public.d !== 40);

// Common prototype chain

console.assert(Object.getPrototypeOf(B) === A)
console.assert(Object.getPrototypeOf(C) === B)
console.assert(Object.getPrototypeOf(D) === C)

// B.prototype don't have an own property Symbol.metadata, as a result, this is wrong
// console.assert(Object.getPrototypeOf(B.prototype[Symbol.metadata]) === A.prototype[Symbol.metadata])

// Symbol.metadata prototype chain

console.assert(Object.getPrototypeOf(C.prototype[Symbol.metadata]) === A.prototype[Symbol.metadata])
console.assert(Object.getPrototypeOf(D.prototype[Symbol.metadata]) === C.prototype[Symbol.metadata])

// KEY prototype chain
console.assert(Object.getPrototypeOf(C.prototype[Symbol.metadata][KEY]) === A.prototype[Symbol.metadata][KEY])
console.assert(Object.getPrototypeOf(D.prototype[Symbol.metadata][KEY]) === C.prototype[Symbol.metadata][KEY])

// [KEY].public prototype chain
console.assert(Object.getPrototypeOf(C.prototype[Symbol.metadata][KEY].public) === A.prototype[Symbol.metadata][KEY].public)
console.assert(Object.getPrototypeOf(D.prototype[Symbol.metadata][KEY].public) === C.prototype[Symbol.metadata][KEY].public)
