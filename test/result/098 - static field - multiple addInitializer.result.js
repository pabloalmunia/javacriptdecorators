function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "field" && context.addInitializer) {
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

const _C_static_initializers_c5r3lg = [];

class C {
  constructor() {
    this.z = 100;
  }
  static p = 1;
}

const _C_p_initializer_6ea59 = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_c5r3lg.push(initializer)
}) ?? (v => v);

C.p = _C_p_initializer_6ea59.call(C, C.p);

const _C_p_initializer_t0s458 = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_c5r3lg.push(initializer)
}) ?? (v => v);

C.p = _C_p_initializer_t0s458.call(C, C.p);

_C_static_initializers_c5r3lg.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_a3gdgg = [];

class D extends C {
  static p = 2;
}

const _D_p_initializer_uhduq = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_a3gdgg.push(initializer)
}) ?? (v => v);

D.p = _D_p_initializer_uhduq.call(D, D.p);

const _D_p_initializer_dkmdg = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_a3gdgg.push(initializer)
}) ?? (v => v);

D.p = _D_p_initializer_dkmdg.call(D, D.p);

_D_static_initializers_a3gdgg.forEach(initializer => initializer.call(D, D));

console.assert(C.p === 1);

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.p === 2);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);