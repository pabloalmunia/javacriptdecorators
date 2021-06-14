function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize(v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
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

const _C_p_get_symbol_235t8o = Symbol();

const _C_p_set_symbol_ktgp8g = Symbol();

let _C_p_getter_egaq3;

let _C_p_setter_4un1fg;

const _C_static_initializers_qoauvg = [];

class C {
  static #_p_private_property_mmbla = 10;
  static get #p() {
    return _C_p_getter_egaq3.call(this);
  }
  static set #p(v) {
    return _C_p_setter_4un1fg.call(this, v);
  }
  static _C_p_getter_egaq3() {
    return this.#_p_private_property_mmbla;
  }
  static _C_p_setter_4un1fg(v) {
    this.#_p_private_property_mmbla = v;
  }
  static [_C_p_get_symbol_235t8o]() {
    return C.#p;
  }
  static [_C_p_set_symbol_ktgp8g](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_g01teo = {
  get: C._C_p_getter_egaq3,
  set: C._C_p_setter_4un1fg
};

_C_p_getter_egaq3 = C._C_p_getter_egaq3;

_C_p_setter_4un1fg = C._C_p_setter_4un1fg;

delete C._C_p_getter_egaq3;

delete C._C_p_setter_4un1fg;

const _C_p_result_t0gu4 = decorator({
  get: _C_p_getter_egaq3,
  set: _C_p_setter_4un1fg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_235t8o],
    set: C[_C_p_set_symbol_ktgp8g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_qoauvg.push(initializer)
}) || {};

_C_p_initializer_g01teo.set.call(
  C,
  (_C_p_result_t0gu4.initialize || (v => v))(_C_p_initializer_g01teo.get.call(C))
);

_C_p_getter_egaq3 = _C_p_result_t0gu4.get || _C_p_getter_egaq3;

_C_p_setter_4un1fg = _C_p_result_t0gu4.set || _C_p_setter_4un1fg;

_C_static_initializers_qoauvg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);

C.check = 20;

console.assert(C.check === 40);