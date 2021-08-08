const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata(META, n + value);
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

const _C_f_get_symbol_iof55g = Symbol();

const _C_f_set_symbol_0nnudg = Symbol();

const _C_p_get_symbol_aoiqp = Symbol();

const _C_p_set_symbol_ta4pp8 = Symbol();

class C {
  static #p = 10;
  static [_C_p_get_symbol_aoiqp]() {
    return C.#p;
  }
  static [_C_p_set_symbol_ta4pp8](v) {
    C.#p = v;
  }
  static #f = 20;
  static [_C_f_get_symbol_iof55g]() {
    return C.#f;
  }
  static [_C_f_set_symbol_0nnudg](v) {
    C.#f = v;
  }
}

const _C_p_initializer_k7eqc8 = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_aoiqp],
    set: C[_C_p_set_symbol_ta4pp8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "p")
}) ?? (v => v);

C[_C_p_set_symbol_ta4pp8](_C_p_initializer_k7eqc8(C[_C_p_get_symbol_aoiqp]()));

const _C_p_initializer_bor4to = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_aoiqp],
    set: C[_C_p_set_symbol_ta4pp8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "p")
}) ?? (v => v);

C[_C_p_set_symbol_ta4pp8](_C_p_initializer_bor4to(C[_C_p_get_symbol_aoiqp]()));

const _C_f_initializer_785ne = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_iof55g],
    set: C[_C_f_set_symbol_0nnudg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "f")
}) ?? (v => v);

C[_C_f_set_symbol_0nnudg](_C_f_initializer_785ne(C[_C_f_get_symbol_iof55g]()));

const _C_f_initializer_60i2j8 = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_iof55g],
    set: C[_C_f_set_symbol_0nnudg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "f")
}) ?? (v => v);

C[_C_f_set_symbol_0nnudg](_C_f_initializer_60i2j8(C[_C_f_get_symbol_iof55g]()));

console.assert(C[Symbol.metadata][META].private[0] === 3);

console.assert(C[Symbol.metadata][META].private[1] === 6);