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

const _C_p_get_symbol_3oo8l8 = Symbol();

const _C_p_set_symbol_dpskd8 = Symbol();

let _C_p_getter_2m51to;

let _C_p_setter_5lo6n;

const _C_static_initializers_3qappo = [];

class C {
  static #_p_private_property_3p97k = 10;
  static get #p() {
    return _C_p_getter_2m51to.call(this);
  }
  static set #p(v) {
    return _C_p_setter_5lo6n.call(this, v);
  }
  static _C_p_getter_2m51to() {
    return this.#_p_private_property_3p97k;
  }
  static _C_p_setter_5lo6n(v) {
    this.#_p_private_property_3p97k = v;
  }
  static [_C_p_get_symbol_3oo8l8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_dpskd8](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_c5573o = {
  get: C._C_p_getter_2m51to,
  set: C._C_p_setter_5lo6n
};

_C_p_getter_2m51to = C._C_p_getter_2m51to;

_C_p_setter_5lo6n = C._C_p_setter_5lo6n;

delete C._C_p_getter_2m51to;

delete C._C_p_setter_5lo6n;

const _C_p_result_032b28 = decorator({
  get: _C_p_getter_2m51to,
  set: _C_p_setter_5lo6n
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_3oo8l8],
    set: C[_C_p_set_symbol_dpskd8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_3qappo.push(initializer)
}) || {};

_C_p_initializer_c5573o.set.call(
  C,
  (_C_p_result_032b28.initialize || (v => v))(_C_p_initializer_c5573o.get.call(C))
);

_C_p_getter_2m51to = _C_p_result_032b28.get || _C_p_getter_2m51to;

_C_p_setter_5lo6n = _C_p_result_032b28.set || _C_p_setter_5lo6n;

_C_static_initializers_3qappo.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);

C.check = 20;

console.assert(C.check === 40);