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

const _C_p_get_symbol_7s9h = Symbol();

const _C_p_set_symbol_s30f9 = Symbol();

let _C_p_getter_k7uhig;

let _C_p_setter_58qp98;

let _C_p_initializer_drb388;

const _C_member_initializers_1i6kp8 = [];

class __C_btlipo {
  constructor() {
    _C_member_initializers_1i6kp8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_ilcf8 = _C_p_initializer_drb388.call(this, 10);
  get #p() {
    return _C_p_getter_k7uhig.call(this);
  }
  set #p(v) {
    return _C_p_setter_58qp98.call(this, v);
  }
  static _C_p_getter_k7uhig() {
    return this.#_p_private_property_ilcf8;
  }
  static _C_p_setter_58qp98(v) {
    this.#_p_private_property_ilcf8 = v;
  }
  [_C_p_get_symbol_7s9h]() {
    return this.#p;
  }
  [_C_p_set_symbol_s30f9](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_k7uhig = __C_btlipo._C_p_getter_k7uhig;

_C_p_setter_58qp98 = __C_btlipo._C_p_setter_58qp98;

delete __C_btlipo._C_p_getter_k7uhig;

delete __C_btlipo._C_p_setter_58qp98;

const _C_p_result_o7mfp8 = decorator({
  get: _C_p_getter_k7uhig,
  set: _C_p_setter_58qp98
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_btlipo.prototype[_C_p_get_symbol_7s9h],
    set: __C_btlipo.prototype[_C_p_set_symbol_s30f9]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_btlipo.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_1i6kp8.push(initializer)
}) || {};

_C_p_initializer_drb388 = _C_p_result_o7mfp8.initialize || (v => v);

_C_p_getter_k7uhig = _C_p_result_o7mfp8.get || _C_p_getter_k7uhig;

_C_p_setter_58qp98 = _C_p_result_o7mfp8.set || _C_p_setter_58qp98;

let C = __C_btlipo;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);

const c = new C();

console.assert(c.check === 20);

c.check = 20;

console.assert(c.check === 40);