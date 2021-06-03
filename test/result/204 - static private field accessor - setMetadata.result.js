const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

const _C_p_get_symbol_bbausg = Symbol();

const _C_p_set_symbol_0p09jo = Symbol();

let _C_p_getter_fbvttg;

let _C_p_setter_iqq89;

class C {
  static #_p_private_property_6h05ko = 10;
  static get #p() {
    return _C_p_getter_fbvttg.call(this);
  }
  static set #p(v) {
    return _C_p_setter_iqq89.call(this, v);
  }
  static _C_p_getter_fbvttg() {
    return this.#_p_private_property_6h05ko;
  }
  static _C_p_setter_iqq89(v) {
    this.#_p_private_property_6h05ko = v;
  }
  static [_C_p_get_symbol_bbausg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_0p09jo](v) {
    C.#p = v;
  }
}

const _C_p_initializer_k9i1u8 = {
  get: C._C_p_getter_fbvttg,
  set: C._C_p_setter_iqq89
};

_C_p_getter_fbvttg = C._C_p_getter_fbvttg;

_C_p_setter_iqq89 = C._C_p_setter_iqq89;

delete C._C_p_getter_fbvttg;

delete C._C_p_setter_iqq89;

const _C_p_result_dccamg = decorator1({
  get: _C_p_getter_fbvttg,
  set: _C_p_setter_iqq89
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_bbausg],
    set: C[_C_p_set_symbol_0p09jo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_k9i1u8.set.call(
  C,
  (_C_p_result_dccamg.initialize || (v => v))(_C_p_initializer_k9i1u8.get.call(C))
);

_C_p_getter_fbvttg = _C_p_result_dccamg.get || _C_p_getter_fbvttg;

_C_p_setter_iqq89 = _C_p_result_dccamg.set || _C_p_setter_iqq89;

const _C_p_result_dmdb4 = decorator2({
  get: _C_p_getter_fbvttg,
  set: _C_p_setter_iqq89
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_bbausg],
    set: C[_C_p_set_symbol_0p09jo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_k9i1u8.set.call(
  C,
  (_C_p_result_dmdb4.initialize || (v => v))(_C_p_initializer_k9i1u8.get.call(C))
);

_C_p_getter_fbvttg = _C_p_result_dmdb4.get || _C_p_getter_fbvttg;

_C_p_setter_iqq89 = _C_p_result_dmdb4.set || _C_p_setter_iqq89;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);