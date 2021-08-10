const ONE = Symbol();

function decorator(value) {
  return function(method, context) {
    const a = context.getMetadata(ONE) || 0;
    context.setMetadata(ONE, a + value);
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

const _C_m_symbol_q41bv = Symbol();

class __C_6s4jv8 {
  _C_m_temp_ctlqj() {}
  static [_C_m_symbol_q41bv] = decorator(1)(__C_6s4jv8.prototype._C_m_temp_ctlqj, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_6s4jv8.prototype[_C_m_symbol_q41bv]
    },
    ...__PrepareMetadata(__C_6s4jv8.prototype, "private", "#m")
  }) ?? __C_6s4jv8.prototype._C_m_temp_ctlqj;
  static [_C_m_symbol_q41bv] = decorator(2)(__C_6s4jv8[_C_m_symbol_q41bv], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_6s4jv8.prototype[_C_m_symbol_q41bv]
    },
    ...__PrepareMetadata(__C_6s4jv8.prototype, "private", "#m")
  }) ?? __C_6s4jv8[_C_m_symbol_q41bv];
  #m = __C_6s4jv8[_C_m_symbol_q41bv];
  [_C_m_symbol_q41bv]() {
    return this.#m;
  }
}

delete __C_6s4jv8.prototype._C_m_temp_ctlqj;

let C = __C_6s4jv8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 3);