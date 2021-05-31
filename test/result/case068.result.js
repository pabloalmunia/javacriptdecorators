function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
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

const _C_static_initializers_e9e31g = [];

class C {
  constructor() {
    this.z = 100;
  }
  static get p() {}
}

const _C_p_descriptor_q62rug = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_q62rug.get = addProperty("b", 2)(_C_p_descriptor_q62rug.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_e9e31g.push(initializer)
}) ?? _C_p_descriptor_q62rug.get;

Object.defineProperty(C, "p", _C_p_descriptor_q62rug);

const _C_p_descriptor_bei18 = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_bei18.get = addProperty("a", 1)(_C_p_descriptor_bei18.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_e9e31g.push(initializer)
}) ?? _C_p_descriptor_bei18.get;

Object.defineProperty(C, "p", _C_p_descriptor_bei18);

_C_static_initializers_e9e31g.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_irplqg = [];

class D extends C {
  static get p() {}
}

const _D_p_descriptor_95sgp8 = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_95sgp8.get = addProperty("d", 4)(_D_p_descriptor_95sgp8.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_irplqg.push(initializer)
}) ?? _D_p_descriptor_95sgp8.get;

Object.defineProperty(D, "p", _D_p_descriptor_95sgp8);

const _D_p_descriptor_k6cnj = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_k6cnj.get = addProperty("c", 3)(_D_p_descriptor_k6cnj.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_irplqg.push(initializer)
}) ?? _D_p_descriptor_k6cnj.get;

Object.defineProperty(D, "p", _D_p_descriptor_k6cnj);

_D_static_initializers_irplqg.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);