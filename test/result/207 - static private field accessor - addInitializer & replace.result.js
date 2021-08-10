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

const _C_p_get_symbol_bhdci = Symbol();

const _C_p_set_symbol_e4e5tg = Symbol();

let _C_p_getter_6mchto;

let _C_p_setter_1fkes8;

const _C_static_initializers_ij2h3o = [];

class __C_qjr0u {
  static #_p_private_property_g7va7g = 10;
  static get #p() {
    return _C_p_getter_6mchto.call(this);
  }
  static set #p(v) {
    return _C_p_setter_1fkes8.call(this, v);
  }
  static _C_p_getter_6mchto() {
    return this.#_p_private_property_g7va7g;
  }
  static _C_p_setter_1fkes8(v) {
    this.#_p_private_property_g7va7g = v;
  }
  static [_C_p_get_symbol_bhdci]() {
    return __C_qjr0u.#p;
  }
  static [_C_p_set_symbol_e4e5tg](v) {
    __C_qjr0u.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_hdra4o = {
  get: __C_qjr0u._C_p_getter_6mchto,
  set: __C_qjr0u._C_p_setter_1fkes8
};

_C_p_getter_6mchto = __C_qjr0u._C_p_getter_6mchto;

_C_p_setter_1fkes8 = __C_qjr0u._C_p_setter_1fkes8;

delete __C_qjr0u._C_p_getter_6mchto;

delete __C_qjr0u._C_p_setter_1fkes8;

const _C_p_result_eh59b = decorator({
  get: _C_p_getter_6mchto,
  set: _C_p_setter_1fkes8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_qjr0u[_C_p_get_symbol_bhdci],
    set: __C_qjr0u[_C_p_set_symbol_e4e5tg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_qjr0u, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_ij2h3o.push(initializer)
}) || {};

_C_p_initializer_hdra4o.set.call(
  __C_qjr0u,
  (_C_p_result_eh59b.initialize || (v => v))(_C_p_initializer_hdra4o.get.call(__C_qjr0u))
);

_C_p_getter_6mchto = _C_p_result_eh59b.get || _C_p_getter_6mchto;

_C_p_setter_1fkes8 = _C_p_result_eh59b.set || _C_p_setter_1fkes8;

let C = __C_qjr0u;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_ij2h3o.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);

C.check = 20;

console.assert(C.check === 40);