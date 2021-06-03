function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_p_get_symbol_74m5q = Symbol();

const _C_p_set_symbol_9fu81 = Symbol();

let _C_p_getter_es1tj8;

let _C_p_setter_k35s8;

const _C_static_initializers_a45u6o = [];

class C {
  static #_p_private_property_rhq8o = 1;
  static get #p() {
    return _C_p_getter_es1tj8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_k35s8.call(this, v);
  }
  static _C_p_getter_es1tj8() {
    return this.#_p_private_property_rhq8o;
  }
  static _C_p_setter_k35s8(v) {
    this.#_p_private_property_rhq8o = v;
  }
  static [_C_p_get_symbol_74m5q]() {
    return C.#p;
  }
  static [_C_p_set_symbol_9fu81](v) {
    C.#p = v;
  }
}

const _C_p_initializer_10trp = {
  get: C._C_p_getter_es1tj8,
  set: C._C_p_setter_k35s8
};

_C_p_getter_es1tj8 = C._C_p_getter_es1tj8;

_C_p_setter_k35s8 = C._C_p_setter_k35s8;

delete C._C_p_getter_es1tj8;

delete C._C_p_setter_k35s8;

const _C_p_result_jts9p8 = decorator({
  get: _C_p_getter_es1tj8,
  set: _C_p_setter_k35s8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_74m5q],
    set: C[_C_p_set_symbol_9fu81]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_a45u6o.push(initializer)
}) || {};

_C_p_initializer_10trp.set.call(
  C,
  (_C_p_result_jts9p8.initialize || (v => v))(_C_p_initializer_10trp.get.call(C))
);

_C_p_getter_es1tj8 = _C_p_result_jts9p8.get || _C_p_getter_es1tj8;

_C_p_setter_k35s8 = _C_p_result_jts9p8.set || _C_p_setter_k35s8;

_C_static_initializers_a45u6o.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);