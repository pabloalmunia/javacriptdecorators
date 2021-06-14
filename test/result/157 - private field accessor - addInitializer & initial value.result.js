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

const _C_p_get_symbol_q5di38 = Symbol();

const _C_p_set_symbol_6ib1qg = Symbol();

let _C_p_getter_eccrm;

let _C_p_setter_pkcqn;

let _C_p_initializer_8983;

const _C_member_initializers_j68sh = [];

class C {
  constructor() {
    _C_member_initializers_j68sh.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_gdnmmg = _C_p_initializer_8983.call(this, 10);
  get #p() {
    return _C_p_getter_eccrm.call(this);
  }
  set #p(v) {
    return _C_p_setter_pkcqn.call(this, v);
  }
  static _C_p_getter_eccrm() {
    return this.#_p_private_property_gdnmmg;
  }
  static _C_p_setter_pkcqn(v) {
    this.#_p_private_property_gdnmmg = v;
  }
  [_C_p_get_symbol_q5di38]() {
    return this.#p;
  }
  [_C_p_set_symbol_6ib1qg](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_eccrm = C._C_p_getter_eccrm;

_C_p_setter_pkcqn = C._C_p_setter_pkcqn;

delete C._C_p_getter_eccrm;

delete C._C_p_setter_pkcqn;

const _C_p_result_n50h4 = decorator({
  get: _C_p_getter_eccrm,
  set: _C_p_setter_pkcqn
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_q5di38],
    set: C.prototype[_C_p_set_symbol_6ib1qg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_j68sh.push(initializer)
}) || {};

_C_p_initializer_8983 = _C_p_result_n50h4.initialize || (v => v);

_C_p_getter_eccrm = _C_p_result_n50h4.get || _C_p_getter_eccrm;

_C_p_setter_pkcqn = _C_p_result_n50h4.set || _C_p_setter_pkcqn;

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);