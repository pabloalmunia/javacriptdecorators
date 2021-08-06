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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

const _C_p_get_symbol_tgtd5o = Symbol();

const _C_p_set_symbol_imtt08 = Symbol();

let _C_p_getter_6846v8;

let _C_p_setter_naett8;

let _C_p_initializer_6pr5f8;

const _C_member_initializers_ub8iv = [];

class C {
  constructor() {
    _C_member_initializers_ub8iv.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_khq1mg = _C_p_initializer_6pr5f8.call(this, 10);
  get #p() {
    return _C_p_getter_6846v8.call(this);
  }
  set #p(v) {
    return _C_p_setter_naett8.call(this, v);
  }
  static _C_p_getter_6846v8() {
    return this.#_p_private_property_khq1mg;
  }
  static _C_p_setter_naett8(v) {
    this.#_p_private_property_khq1mg = v;
  }
  [_C_p_get_symbol_tgtd5o]() {
    return this.#p;
  }
  [_C_p_set_symbol_imtt08](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_6846v8 = C._C_p_getter_6846v8;

_C_p_setter_naett8 = C._C_p_setter_naett8;

delete C._C_p_getter_6846v8;

delete C._C_p_setter_naett8;

const _C_p_result_76nfk = decorator({
  get: _C_p_getter_6846v8,
  set: _C_p_setter_naett8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_tgtd5o],
    set: C.prototype[_C_p_set_symbol_imtt08]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_ub8iv.push(initializer)
}) || {};

_C_p_initializer_6pr5f8 = _C_p_result_76nfk.initialize || (v => v);

_C_p_getter_6846v8 = _C_p_result_76nfk.get || _C_p_getter_6846v8;

_C_p_setter_naett8 = _C_p_result_76nfk.set || _C_p_setter_naett8;

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);