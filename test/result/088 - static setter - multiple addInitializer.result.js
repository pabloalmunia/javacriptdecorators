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

const _C_static_initializers_c60q5g = [];

class C {
  constructor() {
    this.z = 100;
  }
  static set p(v) {}
}

const _C_p_descriptor_oqn6a8 = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_oqn6a8.set = addProperty("b", 2)(_C_p_descriptor_oqn6a8.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_c60q5g.push(initializer)
}) ?? _C_p_descriptor_oqn6a8.set;

Object.defineProperty(C, "p", _C_p_descriptor_oqn6a8);

const _C_p_descriptor_h2tfi = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_h2tfi.set = addProperty("a", 1)(_C_p_descriptor_h2tfi.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_c60q5g.push(initializer)
}) ?? _C_p_descriptor_h2tfi.set;

Object.defineProperty(C, "p", _C_p_descriptor_h2tfi);

_C_static_initializers_c60q5g.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_8ue0ag = [];

class D extends C {
  static set p(v) {}
}

const _D_p_descriptor_5365g8 = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_5365g8.set = addProperty("d", 4)(_D_p_descriptor_5365g8.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_8ue0ag.push(initializer)
}) ?? _D_p_descriptor_5365g8.set;

Object.defineProperty(D, "p", _D_p_descriptor_5365g8);

const _D_p_descriptor_cmijjg = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_cmijjg.set = addProperty("c", 3)(_D_p_descriptor_cmijjg.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_8ue0ag.push(initializer)
}) ?? _D_p_descriptor_cmijjg.set;

Object.defineProperty(D, "p", _D_p_descriptor_cmijjg);

_D_static_initializers_8ue0ag.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);