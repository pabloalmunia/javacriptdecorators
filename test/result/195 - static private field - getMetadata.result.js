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

const _C_f_get_symbol_4hhq48 = Symbol();

const _C_f_set_symbol_1lk5g8 = Symbol();

const _C_p_get_symbol_d6g51o = Symbol();

const _C_p_set_symbol_5ic4v = Symbol();

class C {
  static #p = 10;
  static [_C_p_get_symbol_d6g51o]() {
    return C.#p;
  }
  static [_C_p_set_symbol_5ic4v](v) {
    C.#p = v;
  }
  static #f = 20;
  static [_C_f_get_symbol_4hhq48]() {
    return C.#f;
  }
  static [_C_f_set_symbol_1lk5g8](v) {
    C.#f = v;
  }
}

const _C_p_initializer_ba8vv8 = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_d6g51o],
    set: C[_C_p_set_symbol_5ic4v]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_5ic4v](_C_p_initializer_ba8vv8(C[_C_p_get_symbol_d6g51o]()));

const _C_p_initializer_t6hb2o = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_d6g51o],
    set: C[_C_p_set_symbol_5ic4v]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_5ic4v](_C_p_initializer_t6hb2o(C[_C_p_get_symbol_d6g51o]()));

const _C_f_initializer_gq7ufo = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_4hhq48],
    set: C[_C_f_set_symbol_1lk5g8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_1lk5g8](_C_f_initializer_gq7ufo(C[_C_f_get_symbol_4hhq48]()));

const _C_f_initializer_kjb3i = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_4hhq48],
    set: C[_C_f_set_symbol_1lk5g8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_1lk5g8](_C_f_initializer_kjb3i(C[_C_f_get_symbol_4hhq48]()));

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);