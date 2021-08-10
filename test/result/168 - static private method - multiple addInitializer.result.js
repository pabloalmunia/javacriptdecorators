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

const _C_static_initializers_i4k2q = [];

const _C_m_symbol_efqq9 = Symbol();

class __C_je37r {
  constructor() {
    this.z = 100;
  }
  static _C_m_temp_a8cltg() {}
  static [_C_m_symbol_efqq9] = addProperty("a", 1)(__C_je37r._C_m_temp_a8cltg, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_je37r[_C_m_symbol_efqq9]
    },
    ...__PrepareMetadata(__C_je37r, "private", "#m"),
    addInitializer: initializer => _C_static_initializers_i4k2q.push(initializer)
  }) ?? __C_je37r._C_m_temp_a8cltg;
  static [_C_m_symbol_efqq9] = addProperty("b", 2)(__C_je37r[_C_m_symbol_efqq9], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_je37r[_C_m_symbol_efqq9]
    },
    ...__PrepareMetadata(__C_je37r, "private", "#m"),
    addInitializer: initializer => _C_static_initializers_i4k2q.push(initializer)
  }) ?? __C_je37r[_C_m_symbol_efqq9];
  static #m = __C_je37r[_C_m_symbol_efqq9];
  static [_C_m_symbol_efqq9]() {
    return this.#m;
  }
}

delete __C_je37r._C_m_temp_a8cltg;

let C = __C_je37r;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_i4k2q.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_0vo7og = [];

const _D_m_symbol_tti6v = Symbol();

class __D_u1d7g8 extends C {
  static _D_m_temp_25d7u8() {}
  static [_D_m_symbol_tti6v] = addProperty("c", 3)(__D_u1d7g8._D_m_temp_25d7u8, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_u1d7g8[_D_m_symbol_tti6v]
    },
    ...__PrepareMetadata(__D_u1d7g8, "private", "#m"),
    addInitializer: initializer => _D_static_initializers_0vo7og.push(initializer)
  }) ?? __D_u1d7g8._D_m_temp_25d7u8;
  static [_D_m_symbol_tti6v] = addProperty("d", 4)(__D_u1d7g8[_D_m_symbol_tti6v], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_u1d7g8[_D_m_symbol_tti6v]
    },
    ...__PrepareMetadata(__D_u1d7g8, "private", "#m"),
    addInitializer: initializer => _D_static_initializers_0vo7og.push(initializer)
  }) ?? __D_u1d7g8[_D_m_symbol_tti6v];
  static #m = __D_u1d7g8[_D_m_symbol_tti6v];
  static [_D_m_symbol_tti6v]() {
    return this.#m;
  }
}

delete __D_u1d7g8._D_m_temp_25d7u8;

let D = __D_u1d7g8;

Object.defineProperty(D, "name", {
  value: "D"
});

_D_static_initializers_0vo7og.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);