const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    console.log(n);
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

const _C_f_get_symbol_mneamg = Symbol();

const _C_f_set_symbol_3ic86g = Symbol();

let _C_f_initializer_s8qqcg;

let _C_f_initializer_btuc88;

const _C_p_get_symbol_995sp8 = Symbol();

const _C_p_set_symbol_ue2268 = Symbol();

let _C_p_initializer_t92db;

let _C_p_initializer_2jb3ng;

class __C_e8tmk {
  #p = _C_p_initializer_2jb3ng.call(this, _C_p_initializer_t92db.call(this, 10));
  [_C_p_get_symbol_995sp8]() {
    return this.#p;
  }
  [_C_p_set_symbol_ue2268](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_btuc88.call(this, _C_f_initializer_s8qqcg.call(this, 20));
  [_C_f_get_symbol_mneamg]() {
    return this.#f;
  }
  [_C_f_set_symbol_3ic86g](v) {
    this.#f = v;
  }
}

_C_p_initializer_2jb3ng = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_e8tmk.prototype[_C_p_get_symbol_995sp8],
    set: __C_e8tmk.prototype[_C_p_set_symbol_ue2268]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_e8tmk.prototype, "private", "p")
}) ?? (v => v);

_C_p_initializer_t92db = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_e8tmk.prototype[_C_p_get_symbol_995sp8],
    set: __C_e8tmk.prototype[_C_p_set_symbol_ue2268]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_e8tmk.prototype, "private", "p")
}) ?? (v => v);

_C_f_initializer_btuc88 = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: __C_e8tmk.prototype[_C_f_get_symbol_mneamg],
    set: __C_e8tmk.prototype[_C_f_set_symbol_3ic86g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_e8tmk.prototype, "private", "f")
}) ?? (v => v);

_C_f_initializer_s8qqcg = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: __C_e8tmk.prototype[_C_f_get_symbol_mneamg],
    set: __C_e8tmk.prototype[_C_f_set_symbol_3ic86g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_e8tmk.prototype, "private", "f")
}) ?? (v => v);

let C = __C_e8tmk;

Object.defineProperty(C, "name", {
  value: "C"
});

console.log(C.prototype[Symbol.metadata][META].private);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 6);