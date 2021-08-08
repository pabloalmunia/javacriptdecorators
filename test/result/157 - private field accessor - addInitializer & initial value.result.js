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

const _C_p_get_symbol_3d8tqg = Symbol();

const _C_p_set_symbol_elnae8 = Symbol();

let _C_p_getter_u0l8n;

let _C_p_setter_49qgk8;

let _C_p_initializer_iahlco;

const _C_member_initializers_3aa0bg = [];

class C {
  constructor() {
    _C_member_initializers_3aa0bg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_3077ig = _C_p_initializer_iahlco.call(this, 10);
  get #p() {
    return _C_p_getter_u0l8n.call(this);
  }
  set #p(v) {
    return _C_p_setter_49qgk8.call(this, v);
  }
  static _C_p_getter_u0l8n() {
    return this.#_p_private_property_3077ig;
  }
  static _C_p_setter_49qgk8(v) {
    this.#_p_private_property_3077ig = v;
  }
  [_C_p_get_symbol_3d8tqg]() {
    return this.#p;
  }
  [_C_p_set_symbol_elnae8](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_u0l8n = C._C_p_getter_u0l8n;

_C_p_setter_49qgk8 = C._C_p_setter_49qgk8;

delete C._C_p_getter_u0l8n;

delete C._C_p_setter_49qgk8;

const _C_p_result_4181co = decorator({
  get: _C_p_getter_u0l8n,
  set: _C_p_setter_49qgk8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_3d8tqg],
    set: C.prototype[_C_p_set_symbol_elnae8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_3aa0bg.push(initializer)
}) || {};

_C_p_initializer_iahlco = _C_p_result_4181co.initialize || (v => v);

_C_p_getter_u0l8n = _C_p_result_4181co.get || _C_p_getter_u0l8n;

_C_p_setter_49qgk8 = _C_p_result_4181co.set || _C_p_setter_49qgk8;

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);