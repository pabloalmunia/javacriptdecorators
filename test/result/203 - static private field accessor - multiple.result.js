function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
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

const _C_p_get_symbol_5un4jg = Symbol();

const _C_p_set_symbol_5oanlo = Symbol();

let _C_p_getter_i12sro;

let _C_p_setter_6p12g8;

class C {
  static #_p_private_property_hctm38 = 1;
  static get #p() {
    return _C_p_getter_i12sro.call(this);
  }
  static set #p(v) {
    return _C_p_setter_6p12g8.call(this, v);
  }
  static _C_p_getter_i12sro() {
    return this.#_p_private_property_hctm38;
  }
  static _C_p_setter_6p12g8(v) {
    this.#_p_private_property_hctm38 = v;
  }
  static [_C_p_get_symbol_5un4jg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_5oanlo](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_nh5gdg = {
  get: C._C_p_getter_i12sro,
  set: C._C_p_setter_6p12g8
};

_C_p_getter_i12sro = C._C_p_getter_i12sro;

_C_p_setter_6p12g8 = C._C_p_setter_6p12g8;

delete C._C_p_getter_i12sro;

delete C._C_p_setter_6p12g8;

const _C_p_result_hullso = decorator1({
  get: _C_p_getter_i12sro,
  set: _C_p_setter_6p12g8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_5un4jg],
    set: C[_C_p_set_symbol_5oanlo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_nh5gdg.set.call(
  C,
  (_C_p_result_hullso.initialize || (v => v))(_C_p_initializer_nh5gdg.get.call(C))
);

_C_p_getter_i12sro = _C_p_result_hullso.get || _C_p_getter_i12sro;

_C_p_setter_6p12g8 = _C_p_result_hullso.set || _C_p_setter_6p12g8;

const _C_p_result_p62f8 = decorator2({
  get: _C_p_getter_i12sro,
  set: _C_p_setter_6p12g8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_5un4jg],
    set: C[_C_p_set_symbol_5oanlo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_nh5gdg.set.call(
  C,
  (_C_p_result_p62f8.initialize || (v => v))(_C_p_initializer_nh5gdg.get.call(C))
);

_C_p_getter_i12sro = _C_p_result_p62f8.get || _C_p_getter_i12sro;

_C_p_setter_6p12g8 = _C_p_result_p62f8.set || _C_p_setter_6p12g8;

console.assert(C.check === 6);