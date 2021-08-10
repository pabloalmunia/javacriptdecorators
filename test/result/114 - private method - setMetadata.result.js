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

const _C_m_symbol_l9f94 = Symbol();

class __C_c5tjn8 {
  _C_m_temp_74nqe() {}
  static [_C_m_symbol_l9f94] = decorator1(__C_c5tjn8.prototype._C_m_temp_74nqe, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_c5tjn8.prototype[_C_m_symbol_l9f94]
    },
    ...__PrepareMetadata(__C_c5tjn8.prototype, "private", "#m")
  }) ?? __C_c5tjn8.prototype._C_m_temp_74nqe;
  static [_C_m_symbol_l9f94] = decorator2(__C_c5tjn8[_C_m_symbol_l9f94], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_c5tjn8.prototype[_C_m_symbol_l9f94]
    },
    ...__PrepareMetadata(__C_c5tjn8.prototype, "private", "#m")
  }) ?? __C_c5tjn8[_C_m_symbol_l9f94];
  static [_C_m_symbol_l9f94] = decorator2(__C_c5tjn8[_C_m_symbol_l9f94], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_c5tjn8.prototype[_C_m_symbol_l9f94]
    },
    ...__PrepareMetadata(__C_c5tjn8.prototype, "private", "#m")
  }) ?? __C_c5tjn8[_C_m_symbol_l9f94];
  #m = __C_c5tjn8[_C_m_symbol_l9f94];
  [_C_m_symbol_l9f94]() {
    return this.#m;
  }
}

delete __C_c5tjn8.prototype._C_m_temp_74nqe;

let C = __C_c5tjn8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);

console.assert(C.prototype[Symbol.metadata][TWO].private.length === 1);