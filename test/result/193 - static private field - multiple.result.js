function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
    };
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

const _C_p_get_symbol_bh3ho = Symbol();

const _C_p_set_symbol_f7ippg = Symbol();

class C {
  static #p = 1;
  static [_C_p_get_symbol_bh3ho]() {
    return C.#p;
  }
  static [_C_p_set_symbol_f7ippg](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_d45ico = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_bh3ho],
    set: C[_C_p_set_symbol_f7ippg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_f7ippg](_C_p_initializer_d45ico(C[_C_p_get_symbol_bh3ho]()));

const _C_p_initializer_2p8oi8 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_bh3ho],
    set: C[_C_p_set_symbol_f7ippg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_f7ippg](_C_p_initializer_2p8oi8(C[_C_p_get_symbol_bh3ho]()));

console.assert(C.check === 6);