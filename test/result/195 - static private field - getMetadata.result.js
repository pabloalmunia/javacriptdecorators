const META = Symbol();

function meta(value) {
  return function(element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata(META, a[a.length - 1] + value);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_f_get_symbol_6g383 = Symbol();

const _C_f_set_symbol_d32mio = Symbol();

const _C_p_get_symbol_75ch7g = Symbol();

const _C_p_set_symbol_4uq3oo = Symbol();

class C {
  static #p = 10;
  static [_C_p_get_symbol_75ch7g]() {
    return C.#p;
  }
  static [_C_p_set_symbol_4uq3oo](v) {
    C.#p = v;
  }
  static #f = 20;
  static [_C_f_get_symbol_6g383]() {
    return C.#f;
  }
  static [_C_f_set_symbol_d32mio](v) {
    C.#f = v;
  }
}

const _C_p_initializer_n6i0pg = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_75ch7g],
    set: C[_C_p_set_symbol_4uq3oo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_4uq3oo](_C_p_initializer_n6i0pg(C[_C_p_get_symbol_75ch7g]()));

const _C_p_initializer_doabso = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_75ch7g],
    set: C[_C_p_set_symbol_4uq3oo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_4uq3oo](_C_p_initializer_doabso(C[_C_p_get_symbol_75ch7g]()));

const _C_f_initializer_vgs61o = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_6g383],
    set: C[_C_f_set_symbol_d32mio]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_d32mio](_C_f_initializer_vgs61o(C[_C_f_get_symbol_6g383]()));

const _C_f_initializer_dhokqo = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_6g383],
    set: C[_C_f_set_symbol_d32mio]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_d32mio](_C_f_initializer_dhokqo(C[_C_f_get_symbol_6g383]()));

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);