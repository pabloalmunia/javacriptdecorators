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

const _C_p_get_symbol_3nf1jo = Symbol();

const _C_p_set_symbol_rr8g28 = Symbol();

let _C_p_getter_06h98o;

let _C_p_setter_vk2mq8;

let _C_p_initializer_3sep4g;

const _C_member_initializers_v3vm8o = [];

class C {
  constructor() {
    _C_member_initializers_v3vm8o.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_t113n8 = _C_p_initializer_3sep4g.call(this, 10);
  get #p() {
    return _C_p_getter_06h98o.call(this);
  }
  set #p(v) {
    return _C_p_setter_vk2mq8.call(this, v);
  }
  static _C_p_getter_06h98o() {
    return this.#_p_private_property_t113n8;
  }
  static _C_p_setter_vk2mq8(v) {
    this.#_p_private_property_t113n8 = v;
  }
  [_C_p_get_symbol_3nf1jo]() {
    return this.#p;
  }
  [_C_p_set_symbol_rr8g28](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_06h98o = C._C_p_getter_06h98o;

_C_p_setter_vk2mq8 = C._C_p_setter_vk2mq8;

delete C._C_p_getter_06h98o;

delete C._C_p_setter_vk2mq8;

const _C_p_result_jbncj = decorator({
  get: _C_p_getter_06h98o,
  set: _C_p_setter_vk2mq8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_3nf1jo],
    set: C.prototype[_C_p_set_symbol_rr8g28]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_v3vm8o.push(initializer)
}) || {};

_C_p_initializer_3sep4g = _C_p_result_jbncj.initialize || (v => v);

_C_p_getter_06h98o = _C_p_result_jbncj.get || _C_p_getter_06h98o;

_C_p_setter_vk2mq8 = _C_p_result_jbncj.set || _C_p_setter_vk2mq8;

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);