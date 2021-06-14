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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_ceegrg = Symbol();

const _C_p_set_symbol_5udl8o = Symbol();

let _C_p_getter_5k93do;

let _C_p_setter_226i0g;

class C {
  static #_p_private_property_sbn39o = 10;
  static get #p() {
    return _C_p_getter_5k93do.call(this);
  }
  static set #p(v) {
    return _C_p_setter_226i0g.call(this, v);
  }
  static _C_p_getter_5k93do() {
    return this.#_p_private_property_sbn39o;
  }
  static _C_p_setter_226i0g(v) {
    this.#_p_private_property_sbn39o = v;
  }
  static [_C_p_get_symbol_ceegrg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_5udl8o](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_1p3418 = {
  get: C._C_p_getter_5k93do,
  set: C._C_p_setter_226i0g
};

_C_p_getter_5k93do = C._C_p_getter_5k93do;

_C_p_setter_226i0g = C._C_p_setter_226i0g;

delete C._C_p_getter_5k93do;

delete C._C_p_setter_226i0g;

const _C_p_result_tqsvhg = decorator({
  get: _C_p_getter_5k93do,
  set: _C_p_setter_226i0g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_ceegrg],
    set: C[_C_p_set_symbol_5udl8o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_1p3418.set.call(
  C,
  (_C_p_result_tqsvhg.initialize || (v => v))(_C_p_initializer_1p3418.get.call(C))
);

_C_p_getter_5k93do = _C_p_result_tqsvhg.get || _C_p_getter_5k93do;

_C_p_setter_226i0g = _C_p_result_tqsvhg.set || _C_p_setter_226i0g;

console.assert(C.check === 20);