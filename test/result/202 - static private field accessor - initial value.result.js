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

const _C_p_get_symbol_ah3kq8 = Symbol();

const _C_p_set_symbol_hl8i9 = Symbol();

let _C_p_getter_7c9uno;

let _C_p_setter_ove2o8;

class C {
  static #_p_private_property_cjdsh8 = 10;
  static get #p() {
    return _C_p_getter_7c9uno.call(this);
  }
  static set #p(v) {
    return _C_p_setter_ove2o8.call(this, v);
  }
  static _C_p_getter_7c9uno() {
    return this.#_p_private_property_cjdsh8;
  }
  static _C_p_setter_ove2o8(v) {
    this.#_p_private_property_cjdsh8 = v;
  }
  static [_C_p_get_symbol_ah3kq8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_hl8i9](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_bkt6eg = {
  get: C._C_p_getter_7c9uno,
  set: C._C_p_setter_ove2o8
};

_C_p_getter_7c9uno = C._C_p_getter_7c9uno;

_C_p_setter_ove2o8 = C._C_p_setter_ove2o8;

delete C._C_p_getter_7c9uno;

delete C._C_p_setter_ove2o8;

const _C_p_result_8qbn2g = decorator({
  get: _C_p_getter_7c9uno,
  set: _C_p_setter_ove2o8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_ah3kq8],
    set: C[_C_p_set_symbol_hl8i9]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_bkt6eg.set.call(
  C,
  (_C_p_result_8qbn2g.initialize || (v => v))(_C_p_initializer_bkt6eg.get.call(C))
);

_C_p_getter_7c9uno = _C_p_result_8qbn2g.get || _C_p_getter_7c9uno;

_C_p_setter_ove2o8 = _C_p_result_8qbn2g.set || _C_p_setter_ove2o8;

console.assert(C.check === 20);