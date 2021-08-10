function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}

function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
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

const _C_m_symbol_g8lnf = Symbol();

class __C_co3fog {
  static _C_m_temp_nfe6og() {}
  static [_C_m_symbol_g8lnf] = decorator1(__C_co3fog._C_m_temp_nfe6og, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_co3fog[_C_m_symbol_g8lnf]
    },
    ...__PrepareMetadata(__C_co3fog, "private", "#m")
  }) ?? __C_co3fog._C_m_temp_nfe6og;
  static [_C_m_symbol_g8lnf] = decorator2(__C_co3fog[_C_m_symbol_g8lnf], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_co3fog[_C_m_symbol_g8lnf]
    },
    ...__PrepareMetadata(__C_co3fog, "private", "#m")
  }) ?? __C_co3fog[_C_m_symbol_g8lnf];
  static #m = __C_co3fog[_C_m_symbol_g8lnf];
  static [_C_m_symbol_g8lnf]() {
    return this.#m;
  }
  static check() {
    return this.#m;
  }
}

delete __C_co3fog._C_m_temp_nfe6og;

let C = __C_co3fog;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.check().one === 1);

console.assert(C.check().two === 2);