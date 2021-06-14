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

const _C_m_symbol_92ihno = Symbol();

class C {
  static _C_m_temp_6jqkno() {}
  static [_C_m_symbol_92ihno] = decorator1(C._C_m_temp_6jqkno, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_92ihno]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_m_temp_6jqkno;
  static [_C_m_symbol_92ihno] = decorator2(C[_C_m_symbol_92ihno], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_92ihno]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_m_symbol_92ihno];
  static #m = C[_C_m_symbol_92ihno];
  static [_C_m_symbol_92ihno]() {
    return this.#m;
  }
  static check() {
    return this.#m;
  }
}

delete C._C_m_temp_6jqkno;

console.assert(C.check().one === 1);

console.assert(C.check().two === 2);