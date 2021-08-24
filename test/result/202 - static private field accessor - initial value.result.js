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

const _C_p_get_symbol_i73l6 = Symbol();

const _C_p_set_symbol_l9egf8 = Symbol();

let _C_p_getter_06ak1o;

let _C_p_setter_rpcc6o;

class C {
  static #_p_private_property_k4dm5 = 10;
  static get #p() {
    return _C_p_getter_06ak1o.call(this);
  }
  static set #p(v) {
    return _C_p_setter_rpcc6o.call(this, v);
  }
  static _C_p_getter_06ak1o() {
    return this.#_p_private_property_k4dm5;
  }
  static _C_p_setter_rpcc6o(v) {
    this.#_p_private_property_k4dm5 = v;
  }
  static [_C_p_get_symbol_i73l6]() {
    return C.#p;
  }
  static [_C_p_set_symbol_l9egf8](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_fj3bu8 = {
  get: C._C_p_getter_06ak1o,
  set: C._C_p_setter_rpcc6o
};

_C_p_getter_06ak1o = C._C_p_getter_06ak1o;

_C_p_setter_rpcc6o = C._C_p_setter_rpcc6o;

delete C._C_p_getter_06ak1o;

delete C._C_p_setter_rpcc6o;

const _C_p_result_7f6lb = decorator({
  get: _C_p_getter_06ak1o,
  set: _C_p_setter_rpcc6o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_i73l6],
    set: C[_C_p_set_symbol_l9egf8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_fj3bu8.set.call(
  C,
  (_C_p_result_7f6lb.initialize || (v => v))(_C_p_initializer_fj3bu8.get.call(C))
);

_C_p_getter_06ak1o = _C_p_result_7f6lb.get || _C_p_getter_06ak1o;

_C_p_setter_rpcc6o = _C_p_result_7f6lb.set || _C_p_setter_rpcc6o;

console.assert(C.check === 20);