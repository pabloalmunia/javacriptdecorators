function decorator(value, context) {
  console.assert(context.kind === "field");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
  console.assert(context.isStatic);
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

const _A_p_get_symbol_tvo4ag = Symbol();

const _A_p_set_symbol_u9oe3g = Symbol();

class A {
  static #p = 1;
  static [_A_p_get_symbol_tvo4ag]() {
    return A.#p;
  }
  static [_A_p_set_symbol_u9oe3g](v) {
    A.#p = v;
  }
}

const _A_p_initializer_hifv8 = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_tvo4ag],
    set: A[_A_p_set_symbol_u9oe3g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", undefined)
}) ?? (v => v);

A[_A_p_set_symbol_u9oe3g](_A_p_initializer_hifv8(A[_A_p_get_symbol_tvo4ag]()));