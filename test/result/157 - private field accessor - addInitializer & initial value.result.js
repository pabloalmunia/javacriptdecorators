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

const _C_p_get_symbol_fjrtn = Symbol();

const _C_p_set_symbol_sq6ob8 = Symbol();

let _C_p_getter_l77f1g;

let _C_p_setter_4q4q8;

let _C_p_initializer_bj1fvo;

const _C_member_initializers_ogrvd = [];

class C {
  constructor() {
    _C_member_initializers_ogrvd.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_nefoq8 = _C_p_initializer_bj1fvo.call(this, 10);
  get #p() {
    return _C_p_getter_l77f1g.call(this);
  }
  set #p(v) {
    return _C_p_setter_4q4q8.call(this, v);
  }
  static _C_p_getter_l77f1g() {
    return this.#_p_private_property_nefoq8;
  }
  static _C_p_setter_4q4q8(v) {
    this.#_p_private_property_nefoq8 = v;
  }
  [_C_p_get_symbol_fjrtn]() {
    return this.#p;
  }
  [_C_p_set_symbol_sq6ob8](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_l77f1g = C._C_p_getter_l77f1g;

_C_p_setter_4q4q8 = C._C_p_setter_4q4q8;

delete C._C_p_getter_l77f1g;

delete C._C_p_setter_4q4q8;

const _C_p_result_qoe28o = decorator({
  get: _C_p_getter_l77f1g,
  set: _C_p_setter_4q4q8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_fjrtn],
    set: C.prototype[_C_p_set_symbol_sq6ob8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_ogrvd.push(initializer)
}) || {};

_C_p_initializer_bj1fvo = _C_p_result_qoe28o.initialize || (v => v);

_C_p_getter_l77f1g = _C_p_result_qoe28o.get || _C_p_getter_l77f1g;

_C_p_setter_4q4q8 = _C_p_result_qoe28o.set || _C_p_setter_4q4q8;

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);