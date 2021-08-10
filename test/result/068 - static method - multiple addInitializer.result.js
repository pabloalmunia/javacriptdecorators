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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || Object.prototype);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : kind === "private" ? __metadataPrivate.has(base[Symbol.metadata][key]) ? __metadataPrivate.get(base[Symbol.metadata][key])[property] : undefined : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return Object.values(__metadataPrivate.get(base[Symbol.metadata][key]) || {}).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], {});
        }
        __metadataPrivate.get(base[Symbol.metadata][key])[property] = value;
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_static_initializers_fgebog = [];

class __C_0bdui {
  constructor() {
    this.z = 100;
  }
  static m() {}
}

let C = __C_0bdui;

Object.defineProperty(C, "name", {
  value: "C"
});

C.m = addProperty("b", 2)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "m"),
  addInitializer: initializer => _C_static_initializers_fgebog.push(initializer)
}) ?? C.m;

C.m = addProperty("a", 1)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "m"),
  addInitializer: initializer => _C_static_initializers_fgebog.push(initializer)
}) ?? C.m;

_C_static_initializers_fgebog.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_gbfcs8 = [];

class __D_fmnjc extends C {
  static m() {}
}

let D = __D_fmnjc;

Object.defineProperty(D, "name", {
  value: "D"
});

D.m = addProperty("d", 4)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "m"),
  addInitializer: initializer => _D_static_initializers_gbfcs8.push(initializer)
}) ?? D.m;

D.m = addProperty("c", 3)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "m"),
  addInitializer: initializer => _D_static_initializers_gbfcs8.push(initializer)
}) ?? D.m;

_D_static_initializers_gbfcs8.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);