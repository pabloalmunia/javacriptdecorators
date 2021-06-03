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

const _C_m_symbol_1tv7tg = Symbol();

class C {
  static _C_m_temp_3ipa48() {}
  static [_C_m_symbol_1tv7tg] = decorator1(C._C_m_temp_3ipa48, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_1tv7tg]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_m_temp_3ipa48;
  static [_C_m_symbol_1tv7tg] = decorator2(C[_C_m_symbol_1tv7tg], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_1tv7tg]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_m_symbol_1tv7tg];
  static #m = C[_C_m_symbol_1tv7tg];
  static [_C_m_symbol_1tv7tg]() {
    return this.#m;
  }
}

delete C._C_m_temp_3ipa48;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);