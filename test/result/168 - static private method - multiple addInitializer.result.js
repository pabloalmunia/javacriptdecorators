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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

const _C_static_initializers_uvs7t8 = [];

const _C_m_symbol_164fjo = Symbol();

class C {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_29pnu8() {}
  static [_C_m_symbol_164fjo] = addProperty("a", 1)(C._C_m_temp_29pnu8, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_164fjo]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_uvs7t8.push(initializer)
  }) ?? C._C_m_temp_29pnu8;
  static [_C_m_symbol_164fjo] = addProperty("b", 2)(C[_C_m_symbol_164fjo], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_164fjo]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_uvs7t8.push(initializer)
  }) ?? C[_C_m_symbol_164fjo];
  static #m = C[_C_m_symbol_164fjo];
  static [_C_m_symbol_164fjo]() {
    return this.#m;
  }
}

delete C._C_m_temp_29pnu8;

_C_static_initializers_uvs7t8.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_8oe5uo = [];

const _D_m_symbol_3h6rdo = Symbol();

class D extends C {
  static _D_m_temp_fg5b3o() {}
  static [_D_m_symbol_3h6rdo] = addProperty("c", 3)(D._D_m_temp_fg5b3o, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_3h6rdo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_8oe5uo.push(initializer)
  }) ?? D._D_m_temp_fg5b3o;
  static [_D_m_symbol_3h6rdo] = addProperty("d", 4)(D[_D_m_symbol_3h6rdo], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_3h6rdo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_8oe5uo.push(initializer)
  }) ?? D[_D_m_symbol_3h6rdo];
  static #m = D[_D_m_symbol_3h6rdo];
  static [_D_m_symbol_3h6rdo]() {
    return this.#m;
  }
}

delete D._D_m_temp_fg5b3o;

_D_static_initializers_8oe5uo.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);