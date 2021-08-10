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

const _C_f_get_symbol_fbohmo = Symbol();

const _C_f_set_symbol_n621q8 = Symbol();

const _C_p_get_symbol_gvmd2o = Symbol();

const _C_p_set_symbol_1oaajg = Symbol();

class __C_huhad8 {
  static #p = 10;
  static [_C_p_get_symbol_gvmd2o]() {
    return __C_huhad8.#p;
  }
  static [_C_p_set_symbol_1oaajg](v) {
    __C_huhad8.#p = v;
  }
  static #f = 20;
  static [_C_f_get_symbol_fbohmo]() {
    return __C_huhad8.#f;
  }
  static [_C_f_set_symbol_n621q8](v) {
    __C_huhad8.#f = v;
  }
}

const _C_p_initializer_egq8n8 = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_huhad8[_C_p_get_symbol_gvmd2o],
    set: __C_huhad8[_C_p_set_symbol_1oaajg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_huhad8, "private", "p")
}) ?? (v => v);

__C_huhad8[_C_p_set_symbol_1oaajg](_C_p_initializer_egq8n8(__C_huhad8[_C_p_get_symbol_gvmd2o]()));

const _C_p_initializer_fv3m5g = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_huhad8[_C_p_get_symbol_gvmd2o],
    set: __C_huhad8[_C_p_set_symbol_1oaajg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_huhad8, "private", "p")
}) ?? (v => v);

__C_huhad8[_C_p_set_symbol_1oaajg](_C_p_initializer_fv3m5g(__C_huhad8[_C_p_get_symbol_gvmd2o]()));

const _C_f_initializer_bim508 = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: __C_huhad8[_C_f_get_symbol_fbohmo],
    set: __C_huhad8[_C_f_set_symbol_n621q8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_huhad8, "private", "f")
}) ?? (v => v);

__C_huhad8[_C_f_set_symbol_n621q8](_C_f_initializer_bim508(__C_huhad8[_C_f_get_symbol_fbohmo]()));

const _C_f_initializer_u14lqo = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: __C_huhad8[_C_f_get_symbol_fbohmo],
    set: __C_huhad8[_C_f_set_symbol_n621q8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_huhad8, "private", "f")
}) ?? (v => v);

__C_huhad8[_C_f_set_symbol_n621q8](_C_f_initializer_u14lqo(__C_huhad8[_C_f_get_symbol_fbohmo]()));

let C = __C_huhad8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][META].private[0] === 3);

console.assert(C[Symbol.metadata][META].private[1] === 6);