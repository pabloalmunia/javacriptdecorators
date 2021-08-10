const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata(META, n + value);
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

const _C_f_get_symbol_da2tc = Symbol();

const _C_f_set_symbol_uihiuo = Symbol();

let _C_f_getter_hu8g68;

let _C_f_setter_a57kk8;

let _C_f_initializer_f6qk3;

let _C_f_initializer_70cda8;

const _C_p_get_symbol_0ihkq8 = Symbol();

const _C_p_set_symbol_m04vc8 = Symbol();

let _C_p_getter_v50i3g;

let _C_p_setter_6dpm5o;

let _C_p_initializer_37ggb8;

let _C_p_initializer_4p6c08;

class __C_pnr1ho {
  #_p_private_property_mgbmso = _C_p_initializer_4p6c08.call(this, _C_p_initializer_37ggb8.call(this, 10));
  get #p() {
    return _C_p_getter_v50i3g.call(this);
  }
  set #p(v) {
    return _C_p_setter_6dpm5o.call(this, v);
  }
  static _C_p_getter_v50i3g() {
    return this.#_p_private_property_mgbmso;
  }
  static _C_p_setter_6dpm5o(v) {
    this.#_p_private_property_mgbmso = v;
  }
  [_C_p_get_symbol_0ihkq8]() {
    return this.#p;
  }
  [_C_p_set_symbol_m04vc8](v) {
    this.#p = v;
  }
  #_f_private_property_pkf8f = _C_f_initializer_70cda8.call(this, _C_f_initializer_f6qk3.call(this, 20));
  get #f() {
    return _C_f_getter_hu8g68.call(this);
  }
  set #f(v) {
    return _C_f_setter_a57kk8.call(this, v);
  }
  static _C_f_getter_hu8g68() {
    return this.#_f_private_property_pkf8f;
  }
  static _C_f_setter_a57kk8(v) {
    this.#_f_private_property_pkf8f = v;
  }
  [_C_f_get_symbol_da2tc]() {
    return this.#f;
  }
  [_C_f_set_symbol_uihiuo](v) {
    this.#f = v;
  }
}

_C_p_getter_v50i3g = __C_pnr1ho._C_p_getter_v50i3g;

_C_p_setter_6dpm5o = __C_pnr1ho._C_p_setter_6dpm5o;

delete __C_pnr1ho._C_p_getter_v50i3g;

delete __C_pnr1ho._C_p_setter_6dpm5o;

const _C_p_result_dc106o = meta(1)({
  get: _C_p_getter_v50i3g,
  set: _C_p_setter_6dpm5o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_pnr1ho.prototype[_C_p_get_symbol_0ihkq8],
    set: __C_pnr1ho.prototype[_C_p_set_symbol_m04vc8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_pnr1ho.prototype, "private", "#p")
}) || {};

_C_p_initializer_4p6c08 = _C_p_result_dc106o.initialize || (v => v);

_C_p_getter_v50i3g = _C_p_result_dc106o.get || _C_p_getter_v50i3g;

_C_p_setter_6dpm5o = _C_p_result_dc106o.set || _C_p_setter_6dpm5o;

const _C_p_result_19j7kg = meta(2)({
  get: _C_p_getter_v50i3g,
  set: _C_p_setter_6dpm5o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_pnr1ho.prototype[_C_p_get_symbol_0ihkq8],
    set: __C_pnr1ho.prototype[_C_p_set_symbol_m04vc8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_pnr1ho.prototype, "private", "#p")
}) || {};

_C_p_initializer_37ggb8 = _C_p_result_19j7kg.initialize || (v => v);

_C_p_getter_v50i3g = _C_p_result_19j7kg.get || _C_p_getter_v50i3g;

_C_p_setter_6dpm5o = _C_p_result_19j7kg.set || _C_p_setter_6dpm5o;

_C_f_getter_hu8g68 = __C_pnr1ho._C_f_getter_hu8g68;

_C_f_setter_a57kk8 = __C_pnr1ho._C_f_setter_a57kk8;

delete __C_pnr1ho._C_f_getter_hu8g68;

delete __C_pnr1ho._C_f_setter_a57kk8;

const _C_f_result_vvt0ng = meta(3)({
  get: _C_f_getter_hu8g68,
  set: _C_f_setter_a57kk8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: __C_pnr1ho.prototype[_C_f_get_symbol_da2tc],
    set: __C_pnr1ho.prototype[_C_f_set_symbol_uihiuo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_pnr1ho.prototype, "private", "#f")
}) || {};

_C_f_initializer_70cda8 = _C_f_result_vvt0ng.initialize || (v => v);

_C_f_getter_hu8g68 = _C_f_result_vvt0ng.get || _C_f_getter_hu8g68;

_C_f_setter_a57kk8 = _C_f_result_vvt0ng.set || _C_f_setter_a57kk8;

const _C_f_result_nut9f8 = meta(3)({
  get: _C_f_getter_hu8g68,
  set: _C_f_setter_a57kk8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: __C_pnr1ho.prototype[_C_f_get_symbol_da2tc],
    set: __C_pnr1ho.prototype[_C_f_set_symbol_uihiuo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_pnr1ho.prototype, "private", "#f")
}) || {};

_C_f_initializer_f6qk3 = _C_f_result_nut9f8.initialize || (v => v);

_C_f_getter_hu8g68 = _C_f_result_nut9f8.get || _C_f_getter_hu8g68;

_C_f_setter_a57kk8 = _C_f_result_nut9f8.set || _C_f_setter_a57kk8;

let C = __C_pnr1ho;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][META].private[0] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 6);