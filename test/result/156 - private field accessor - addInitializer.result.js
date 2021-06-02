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

const _C_p_get_symbol_5kg8qo = Symbol();

const _C_p_set_symbol_ig9mqo = Symbol();

let _C_p_getter_o2b1;

let _C_p_setter_qaurj;

let _C_p_initializer_kd7qk;

const _C_member_initializers_nmtik = [];

class C {
  constructor() {
    _C_member_initializers_nmtik.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_tq3td = _C_p_initializer_kd7qk.call(this, 1);
  get #p() {
    return _C_p_getter_o2b1.call(this);
  }
  set #p(v) {
    return _C_p_setter_qaurj.call(this, v);
  }
  static _C_p_getter_o2b1() {
    return this.#_p_private_property_tq3td;
  }
  static _C_p_setter_qaurj(v) {
    this.#_p_private_property_tq3td = v;
  }
  [_C_p_get_symbol_5kg8qo]() {
    return this.#p;
  }
  [_C_p_set_symbol_ig9mqo](v) {
    this.#p = v;
  }
}

_C_p_getter_o2b1 = C._C_p_getter_o2b1;

_C_p_setter_qaurj = C._C_p_setter_qaurj;

delete C._C_p_getter_o2b1;

delete C._C_p_setter_qaurj;

const _C_p_result_cd22kg = decorator({
  get: _C_p_getter_o2b1,
  set: _C_p_setter_qaurj
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_5kg8qo],
    set: C.prototype[_C_p_set_symbol_ig9mqo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_nmtik.push(initializer)
}) || {};

_C_p_initializer_kd7qk = _C_p_result_cd22kg.initialize || (v => v);

_C_p_getter_o2b1 = _C_p_result_cd22kg.get || _C_p_getter_o2b1;

_C_p_setter_qaurj = _C_p_result_cd22kg.set || _C_p_setter_qaurj;

console.assert(new C().test === 10);