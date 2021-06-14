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

const _C_p_get_symbol_1m599 = Symbol();

const _C_p_set_symbol_qluto8 = Symbol();

let _C_p_getter_u31ufg;

let _C_p_setter_42bljg;

let _C_p_initializer_kcnlj8;

const _C_member_initializers_91irko = [];

class C {
  constructor() {
    _C_member_initializers_91irko.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_r1ql7g = _C_p_initializer_kcnlj8.call(this, 1);
  get #p() {
    return _C_p_getter_u31ufg.call(this);
  }
  set #p(v) {
    return _C_p_setter_42bljg.call(this, v);
  }
  static _C_p_getter_u31ufg() {
    return this.#_p_private_property_r1ql7g;
  }
  static _C_p_setter_42bljg(v) {
    this.#_p_private_property_r1ql7g = v;
  }
  [_C_p_get_symbol_1m599]() {
    return this.#p;
  }
  [_C_p_set_symbol_qluto8](v) {
    this.#p = v;
  }
}

_C_p_getter_u31ufg = C._C_p_getter_u31ufg;

_C_p_setter_42bljg = C._C_p_setter_42bljg;

delete C._C_p_getter_u31ufg;

delete C._C_p_setter_42bljg;

const _C_p_result_t1hpqo = decorator({
  get: _C_p_getter_u31ufg,
  set: _C_p_setter_42bljg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_1m599],
    set: C.prototype[_C_p_set_symbol_qluto8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_91irko.push(initializer)
}) || {};

_C_p_initializer_kcnlj8 = _C_p_result_t1hpqo.initialize || (v => v);

_C_p_getter_u31ufg = _C_p_result_t1hpqo.get || _C_p_getter_u31ufg;

_C_p_setter_42bljg = _C_p_result_t1hpqo.set || _C_p_setter_42bljg;

console.assert(new C().test === 10);