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

const _C_static_initializers_kcgfcg = [];

const _C_m_symbol_79mit8 = Symbol();

class C {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_fhss48() {}
  static [_C_m_symbol_79mit8] = addProperty("a", 1)(C._C_m_temp_fhss48, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_79mit8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_kcgfcg.push(initializer)
  }) ?? C._C_m_temp_fhss48;
  static [_C_m_symbol_79mit8] = addProperty("b", 2)(C[_C_m_symbol_79mit8], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_79mit8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_kcgfcg.push(initializer)
  }) ?? C[_C_m_symbol_79mit8];
  static #m = C[_C_m_symbol_79mit8];
  static [_C_m_symbol_79mit8]() {
    return this.#m;
  }
}

delete C._C_m_temp_fhss48;

_C_static_initializers_kcgfcg.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_6v23r = [];

const _D_m_symbol_lvsuh = Symbol();

class D extends C {
  static _D_m_temp_c842uo() {}
  static [_D_m_symbol_lvsuh] = addProperty("c", 3)(D._D_m_temp_c842uo, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_lvsuh]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_6v23r.push(initializer)
  }) ?? D._D_m_temp_c842uo;
  static [_D_m_symbol_lvsuh] = addProperty("d", 4)(D[_D_m_symbol_lvsuh], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_lvsuh]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_6v23r.push(initializer)
  }) ?? D[_D_m_symbol_lvsuh];
  static #m = D[_D_m_symbol_lvsuh];
  static [_D_m_symbol_lvsuh]() {
    return this.#m;
  }
}

delete D._D_m_temp_c842uo;

_D_static_initializers_6v23r.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);