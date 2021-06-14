const ONE = Symbol();

function decorator(value) {
  return function(method, context) {
    const a = context.getMetadata(ONE) || [0];
    context.setMetadata(ONE, a[a.length - 1] + value);
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

const _C_m_symbol_nltuao = Symbol();

class C {
  _C_m_temp_2pl2e() {}
  static [_C_m_symbol_nltuao] = decorator(1)(C.prototype._C_m_temp_2pl2e, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_nltuao]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C.prototype._C_m_temp_2pl2e;
  static [_C_m_symbol_nltuao] = decorator(2)(C[_C_m_symbol_nltuao], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_nltuao]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C[_C_m_symbol_nltuao];
  #m = C[_C_m_symbol_nltuao];
  [_C_m_symbol_nltuao]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_2pl2e;

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][ONE].private[1] === 3);