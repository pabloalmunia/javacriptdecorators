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

const _C_f_get_symbol_do30sg = Symbol();

const _C_f_set_symbol_hup5sg = Symbol();

const _C_p_get_symbol_plt7v = Symbol();

const _C_p_set_symbol_anb88 = Symbol();

class C {
  static #p = 10;
  static [_C_p_get_symbol_plt7v]() {
    return C.#p;
  }
  static [_C_p_set_symbol_anb88](v) {
    C.#p = v;
  }
  static #f = 20;
  static [_C_f_get_symbol_do30sg]() {
    return C.#f;
  }
  static [_C_f_set_symbol_hup5sg](v) {
    C.#f = v;
  }
}

const _C_p_initializer_5h22ko = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_plt7v],
    set: C[_C_p_set_symbol_anb88]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_anb88](_C_p_initializer_5h22ko(C[_C_p_get_symbol_plt7v]()));

const _C_p_initializer_9n5618 = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_plt7v],
    set: C[_C_p_set_symbol_anb88]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_p_set_symbol_anb88](_C_p_initializer_9n5618(C[_C_p_get_symbol_plt7v]()));

const _C_f_initializer_2cntr = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_do30sg],
    set: C[_C_f_set_symbol_hup5sg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_hup5sg](_C_f_initializer_2cntr(C[_C_f_get_symbol_do30sg]()));

const _C_f_initializer_23ssp = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_do30sg],
    set: C[_C_f_set_symbol_hup5sg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) ?? (v => v);

C[_C_f_set_symbol_hup5sg](_C_f_initializer_23ssp(C[_C_f_get_symbol_do30sg]()));

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);