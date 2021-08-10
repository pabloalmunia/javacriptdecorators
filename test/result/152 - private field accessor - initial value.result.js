function decorator(context) {
  return {
    initialize(v) {
      return v * 2;
    }
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

const _C_p_get_symbol_ukatbg = Symbol();

const _C_p_set_symbol_me9r4o = Symbol();

let _C_p_getter_adbfug;

let _C_p_setter_5cd1u;

let _C_p_initializer_c712h8;

class __C_ltd6f {
  #_p_private_property_r4ro28 = _C_p_initializer_c712h8.call(this, 10);
  get #p() {
    return _C_p_getter_adbfug.call(this);
  }
  set #p(v) {
    return _C_p_setter_5cd1u.call(this, v);
  }
  static _C_p_getter_adbfug() {
    return this.#_p_private_property_r4ro28;
  }
  static _C_p_setter_5cd1u(v) {
    this.#_p_private_property_r4ro28 = v;
  }
  [_C_p_get_symbol_ukatbg]() {
    return this.#p;
  }
  [_C_p_set_symbol_me9r4o](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_adbfug = __C_ltd6f._C_p_getter_adbfug;

_C_p_setter_5cd1u = __C_ltd6f._C_p_setter_5cd1u;

delete __C_ltd6f._C_p_getter_adbfug;

delete __C_ltd6f._C_p_setter_5cd1u;

const _C_p_result_h5ivhg = decorator({
  get: _C_p_getter_adbfug,
  set: _C_p_setter_5cd1u
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_ltd6f.prototype[_C_p_get_symbol_ukatbg],
    set: __C_ltd6f.prototype[_C_p_set_symbol_me9r4o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_ltd6f.prototype, "private", "#p")
}) || {};

_C_p_initializer_c712h8 = _C_p_result_h5ivhg.initialize || (v => v);

_C_p_getter_adbfug = _C_p_result_h5ivhg.get || _C_p_getter_adbfug;

_C_p_setter_5cd1u = _C_p_result_h5ivhg.set || _C_p_setter_5cd1u;

let C = __C_ltd6f;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(c.check === 20);