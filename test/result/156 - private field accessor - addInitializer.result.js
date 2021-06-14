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

const _C_p_get_symbol_49afbg = Symbol();

const _C_p_set_symbol_d3qfug = Symbol();

let _C_p_getter_t102uo;

let _C_p_setter_pa5hjg;

let _C_p_initializer_mme83;

const _C_member_initializers_k1fa1 = [];

class C {
  constructor() {
    _C_member_initializers_k1fa1.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_pv9lu = _C_p_initializer_mme83.call(this, 1);
  get #p() {
    return _C_p_getter_t102uo.call(this);
  }
  set #p(v) {
    return _C_p_setter_pa5hjg.call(this, v);
  }
  static _C_p_getter_t102uo() {
    return this.#_p_private_property_pv9lu;
  }
  static _C_p_setter_pa5hjg(v) {
    this.#_p_private_property_pv9lu = v;
  }
  [_C_p_get_symbol_49afbg]() {
    return this.#p;
  }
  [_C_p_set_symbol_d3qfug](v) {
    this.#p = v;
  }
}

_C_p_getter_t102uo = C._C_p_getter_t102uo;

_C_p_setter_pa5hjg = C._C_p_setter_pa5hjg;

delete C._C_p_getter_t102uo;

delete C._C_p_setter_pa5hjg;

const _C_p_result_a1ngt = decorator({
  get: _C_p_getter_t102uo,
  set: _C_p_setter_pa5hjg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_49afbg],
    set: C.prototype[_C_p_set_symbol_d3qfug]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_k1fa1.push(initializer)
}) || {};

_C_p_initializer_mme83 = _C_p_result_a1ngt.initialize || (v => v);

_C_p_getter_t102uo = _C_p_result_a1ngt.get || _C_p_getter_t102uo;

_C_p_setter_pa5hjg = _C_p_result_a1ngt.set || _C_p_setter_pa5hjg;

console.assert(new C().test === 10);