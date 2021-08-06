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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_static_initializers_milva8 = [];

const _C_m_symbol_hmp1o = Symbol();

class C {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_frsoag() {}
  static [_C_m_symbol_hmp1o] = addProperty("a", 1)(C._C_m_temp_frsoag, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_hmp1o]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_milva8.push(initializer)
  }) ?? C._C_m_temp_frsoag;
  static [_C_m_symbol_hmp1o] = addProperty("b", 2)(C[_C_m_symbol_hmp1o], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_hmp1o]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_milva8.push(initializer)
  }) ?? C[_C_m_symbol_hmp1o];
  static #m = C[_C_m_symbol_hmp1o];
  static [_C_m_symbol_hmp1o]() {
    return this.#m;
  }
}

delete C._C_m_temp_frsoag;

_C_static_initializers_milva8.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_pl9no8 = [];

const _D_m_symbol_42b11 = Symbol();

class D extends C {
  static _D_m_temp_b6rd48() {}
  static [_D_m_symbol_42b11] = addProperty("c", 3)(D._D_m_temp_b6rd48, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_42b11]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_pl9no8.push(initializer)
  }) ?? D._D_m_temp_b6rd48;
  static [_D_m_symbol_42b11] = addProperty("d", 4)(D[_D_m_symbol_42b11], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_42b11]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_pl9no8.push(initializer)
  }) ?? D[_D_m_symbol_42b11];
  static #m = D[_D_m_symbol_42b11];
  static [_D_m_symbol_42b11]() {
    return this.#m;
  }
}

delete D._D_m_temp_b6rd48;

_D_static_initializers_pl9no8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);