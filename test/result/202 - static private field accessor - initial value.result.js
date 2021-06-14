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

const _C_p_get_symbol_6mfb3o = Symbol();

const _C_p_set_symbol_lc0q = Symbol();

let _C_p_getter_c5u3ro;

let _C_p_setter_tr42to;

class C {
  static #_p_private_property_qeskko = 10;
  static get #p() {
    return _C_p_getter_c5u3ro.call(this);
  }
  static set #p(v) {
    return _C_p_setter_tr42to.call(this, v);
  }
  static _C_p_getter_c5u3ro() {
    return this.#_p_private_property_qeskko;
  }
  static _C_p_setter_tr42to(v) {
    this.#_p_private_property_qeskko = v;
  }
  static [_C_p_get_symbol_6mfb3o]() {
    return C.#p;
  }
  static [_C_p_set_symbol_lc0q](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_h017so = {
  get: C._C_p_getter_c5u3ro,
  set: C._C_p_setter_tr42to
};

_C_p_getter_c5u3ro = C._C_p_getter_c5u3ro;

_C_p_setter_tr42to = C._C_p_setter_tr42to;

delete C._C_p_getter_c5u3ro;

delete C._C_p_setter_tr42to;

const _C_p_result_pupi5g = decorator({
  get: _C_p_getter_c5u3ro,
  set: _C_p_setter_tr42to
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_6mfb3o],
    set: C[_C_p_set_symbol_lc0q]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_h017so.set.call(
  C,
  (_C_p_result_pupi5g.initialize || (v => v))(_C_p_initializer_h017so.get.call(C))
);

_C_p_getter_c5u3ro = _C_p_result_pupi5g.get || _C_p_getter_c5u3ro;

_C_p_setter_tr42to = _C_p_result_pupi5g.set || _C_p_setter_tr42to;

console.assert(C.check === 20);