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

const _C_p_get_symbol_oepmn8 = Symbol();

const _C_p_set_symbol_stuo08 = Symbol();

let _C_p_getter_6p8dq8;

let _C_p_setter_t7srg8;

const _C_static_initializers_qpvncg = [];

class C {
  static #_p_private_property_pvut78 = 10;
  static get #p() {
    return _C_p_getter_6p8dq8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_t7srg8.call(this, v);
  }
  static _C_p_getter_6p8dq8() {
    return this.#_p_private_property_pvut78;
  }
  static _C_p_setter_t7srg8(v) {
    this.#_p_private_property_pvut78 = v;
  }
  static [_C_p_get_symbol_oepmn8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_stuo08](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_nl1oco = {
  get: C._C_p_getter_6p8dq8,
  set: C._C_p_setter_t7srg8
};

_C_p_getter_6p8dq8 = C._C_p_getter_6p8dq8;

_C_p_setter_t7srg8 = C._C_p_setter_t7srg8;

delete C._C_p_getter_6p8dq8;

delete C._C_p_setter_t7srg8;

const _C_p_result_2kl7ng = decorator({
  get: _C_p_getter_6p8dq8,
  set: _C_p_setter_t7srg8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_oepmn8],
    set: C[_C_p_set_symbol_stuo08]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_qpvncg.push(initializer)
}) || {};

_C_p_initializer_nl1oco.set.call(
  C,
  (_C_p_result_2kl7ng.initialize || (v => v))(_C_p_initializer_nl1oco.get.call(C))
);

_C_p_getter_6p8dq8 = _C_p_result_2kl7ng.get || _C_p_getter_6p8dq8;

_C_p_setter_t7srg8 = _C_p_result_2kl7ng.set || _C_p_setter_t7srg8;

_C_static_initializers_qpvncg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);

C.check = 20;

console.assert(C.check === 40);