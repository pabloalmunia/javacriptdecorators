const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

const _C_m_symbol_ij0ejg = Symbol();

class __C_apmeu8 {
  static _C_m_temp_mfs2f() {}
  static [_C_m_symbol_ij0ejg] = decorator1(__C_apmeu8._C_m_temp_mfs2f, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_apmeu8[_C_m_symbol_ij0ejg]
    },
    ...__PrepareMetadata(__C_apmeu8, "private", "#m")
  }) ?? __C_apmeu8._C_m_temp_mfs2f;
  static [_C_m_symbol_ij0ejg] = decorator2(__C_apmeu8[_C_m_symbol_ij0ejg], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_apmeu8[_C_m_symbol_ij0ejg]
    },
    ...__PrepareMetadata(__C_apmeu8, "private", "#m")
  }) ?? __C_apmeu8[_C_m_symbol_ij0ejg];
  static [_C_m_symbol_ij0ejg] = decorator2(__C_apmeu8[_C_m_symbol_ij0ejg], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_apmeu8[_C_m_symbol_ij0ejg]
    },
    ...__PrepareMetadata(__C_apmeu8, "private", "#m")
  }) ?? __C_apmeu8[_C_m_symbol_ij0ejg];
  static #m = __C_apmeu8[_C_m_symbol_ij0ejg];
  static [_C_m_symbol_ij0ejg]() {
    return this.#m;
  }
}

delete __C_apmeu8._C_m_temp_mfs2f;

let C = __C_apmeu8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);

console.assert(C[Symbol.metadata][TWO].private.length === 1);

console.assert(C[Symbol.metadata][TWO].private[1] === undefined);