const KEY = Symbol();

function metadata(data) {
  return function (value, context) {
    context.setMetadata(KEY, data);
  };
}

class A {
  static a() {}
}

class B extends A {
  static b() {}
}

class C extends B {
  @metadata(30)
  static c() {}
}
console.log(C[Symbol.metadata][KEY]);
console.assert(C[Symbol.metadata][KEY].public.c === 30);
