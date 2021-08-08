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

const _C_static_initializers_gf7h2o = [];

const _C_m_symbol_5fvlh8 = Symbol();

class C {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_mneef() {}
  static [_C_m_symbol_5fvlh8] = addProperty("a", 1)(C._C_m_temp_mneef, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_5fvlh8]
    },
    ...__PrepareMetadata(C, "private", "#m"),
    addInitializer: initializer => _C_static_initializers_gf7h2o.push(initializer)
  }) ?? C._C_m_temp_mneef;
  static [_C_m_symbol_5fvlh8] = addProperty("b", 2)(C[_C_m_symbol_5fvlh8], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_5fvlh8]
    },
    ...__PrepareMetadata(C, "private", "#m"),
    addInitializer: initializer => _C_static_initializers_gf7h2o.push(initializer)
  }) ?? C[_C_m_symbol_5fvlh8];
  static #m = C[_C_m_symbol_5fvlh8];
  static [_C_m_symbol_5fvlh8]() {
    return this.#m;
  }
}

delete C._C_m_temp_mneef;

_C_static_initializers_gf7h2o.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_qs1t2g = [];

const _D_m_symbol_qsctlo = Symbol();

class D extends C {
  static _D_m_temp_midbc8() {}
  static [_D_m_symbol_qsctlo] = addProperty("c", 3)(D._D_m_temp_midbc8, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_qsctlo]
    },
    ...__PrepareMetadata(D, "private", "#m"),
    addInitializer: initializer => _D_static_initializers_qs1t2g.push(initializer)
  }) ?? D._D_m_temp_midbc8;
  static [_D_m_symbol_qsctlo] = addProperty("d", 4)(D[_D_m_symbol_qsctlo], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_qsctlo]
    },
    ...__PrepareMetadata(D, "private", "#m"),
    addInitializer: initializer => _D_static_initializers_qs1t2g.push(initializer)
  }) ?? D[_D_m_symbol_qsctlo];
  static #m = D[_D_m_symbol_qsctlo];
  static [_D_m_symbol_qsctlo]() {
    return this.#m;
  }
}

delete D._D_m_temp_midbc8;

_D_static_initializers_qs1t2g.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);