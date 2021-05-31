function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
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

const _C_static_initializers_alk408 = [];

class C {
  constructor() {
    this.z = 100;
  }
  static m() {}
}

C.m = addProperty("b", 2)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "m"),
  addInitializer: initializer => _C_static_initializers_alk408.push(initializer)
}) ?? C.m;

C.m = addProperty("a", 1)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "m"),
  addInitializer: initializer => _C_static_initializers_alk408.push(initializer)
}) ?? C.m;

_C_static_initializers_alk408.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_v833e8 = [];

class D extends C {
  static m() {}
}

D.m = addProperty("d", 4)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "m"),
  addInitializer: initializer => _D_static_initializers_v833e8.push(initializer)
}) ?? D.m;

D.m = addProperty("c", 3)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "m"),
  addInitializer: initializer => _D_static_initializers_v833e8.push(initializer)
}) ?? D.m;

_D_static_initializers_v833e8.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);