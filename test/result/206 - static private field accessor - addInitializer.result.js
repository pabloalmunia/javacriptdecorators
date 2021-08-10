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

const _C_p_get_symbol_psa5u8 = Symbol();

const _C_p_set_symbol_q36sj = Symbol();

let _C_p_getter_h6f0q;

let _C_p_setter_non9l8;

const _C_static_initializers_olqbj = [];

class __C_lk5uc8 {
  static #_p_private_property_amg2fg = 1;
  static get #p() {
    return _C_p_getter_h6f0q.call(this);
  }
  static set #p(v) {
    return _C_p_setter_non9l8.call(this, v);
  }
  static _C_p_getter_h6f0q() {
    return this.#_p_private_property_amg2fg;
  }
  static _C_p_setter_non9l8(v) {
    this.#_p_private_property_amg2fg = v;
  }
  static [_C_p_get_symbol_psa5u8]() {
    return __C_lk5uc8.#p;
  }
  static [_C_p_set_symbol_q36sj](v) {
    __C_lk5uc8.#p = v;
  }
}

const _C_p_initializer_19i7c8 = {
  get: __C_lk5uc8._C_p_getter_h6f0q,
  set: __C_lk5uc8._C_p_setter_non9l8
};

_C_p_getter_h6f0q = __C_lk5uc8._C_p_getter_h6f0q;

_C_p_setter_non9l8 = __C_lk5uc8._C_p_setter_non9l8;

delete __C_lk5uc8._C_p_getter_h6f0q;

delete __C_lk5uc8._C_p_setter_non9l8;

const _C_p_result_f1cg2 = decorator({
  get: _C_p_getter_h6f0q,
  set: _C_p_setter_non9l8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_lk5uc8[_C_p_get_symbol_psa5u8],
    set: __C_lk5uc8[_C_p_set_symbol_q36sj]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_lk5uc8, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_olqbj.push(initializer)
}) || {};

_C_p_initializer_19i7c8.set.call(
  __C_lk5uc8,
  (_C_p_result_f1cg2.initialize || (v => v))(_C_p_initializer_19i7c8.get.call(__C_lk5uc8))
);

_C_p_getter_h6f0q = _C_p_result_f1cg2.get || _C_p_getter_h6f0q;

_C_p_setter_non9l8 = _C_p_result_f1cg2.set || _C_p_setter_non9l8;

let C = __C_lk5uc8;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_olqbj.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);