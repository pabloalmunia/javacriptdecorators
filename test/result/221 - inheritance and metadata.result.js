const KEY = Symbol();

function metadata(data) {
  return function(value, context) {
    context.setMetadata(KEY, data);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
    }
  }
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      createObjectWithPrototype(base, Symbol.metadata);
      createObjectWithPrototype(base[Symbol.metadata], key);
      createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return (__metadataPrivate.get(base[Symbol.metadata][key]) || []).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], []);
        }
        __metadataPrivate.get(base[Symbol.metadata][key]).push(value);
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

class A {
  a() {}
}

A.prototype.a = metadata(10)(A.prototype.a, {
  kind: "method",
  name: "a",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(A.prototype, "public", "a")
}) ?? A.prototype.a;

console.assert(A.prototype[Symbol.metadata][KEY].public.a === 10);

class B extends A {
  b() {}
}

console.assert(B.prototype[Symbol.metadata][KEY].public.a === 10);

class C extends B {
  c() {}
}

C.prototype.c = metadata(30)(C.prototype.c, {
  kind: "method",
  name: "c",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "c")
}) ?? C.prototype.c;

console.assert(C.prototype[Symbol.metadata][KEY].public.a === 10);

console.assert(C.prototype[Symbol.metadata][KEY].public.c === 30);

console.assert(A.prototype[Symbol.metadata][KEY].public.c !== 30);