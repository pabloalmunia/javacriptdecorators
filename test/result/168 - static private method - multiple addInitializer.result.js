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

const _C_static_initializers_6r99r8 = [];

const _C_m_symbol_uqv0mo = Symbol();

class C {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_r42528() {}
  static [_C_m_symbol_uqv0mo] = addProperty("a", 1)(C._C_m_temp_r42528, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_uqv0mo]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_6r99r8.push(initializer)
  }) ?? C._C_m_temp_r42528;
  static [_C_m_symbol_uqv0mo] = addProperty("b", 2)(C[_C_m_symbol_uqv0mo], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_uqv0mo]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_6r99r8.push(initializer)
  }) ?? C[_C_m_symbol_uqv0mo];
  static #m = C[_C_m_symbol_uqv0mo];
  static [_C_m_symbol_uqv0mo]() {
    return this.#m;
  }
}

delete C._C_m_temp_r42528;

_C_static_initializers_6r99r8.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_p2au3g = [];

const _D_m_symbol_235he8 = Symbol();

class D extends C {
  static _D_m_temp_hml79g() {}
  static [_D_m_symbol_235he8] = addProperty("c", 3)(D._D_m_temp_hml79g, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_235he8]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_p2au3g.push(initializer)
  }) ?? D._D_m_temp_hml79g;
  static [_D_m_symbol_235he8] = addProperty("d", 4)(D[_D_m_symbol_235he8], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_m_symbol_235he8]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_p2au3g.push(initializer)
  }) ?? D[_D_m_symbol_235he8];
  static #m = D[_D_m_symbol_235he8];
  static [_D_m_symbol_235he8]() {
    return this.#m;
  }
}

delete D._D_m_temp_hml79g;

_D_static_initializers_p2au3g.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);