function decorator(context) {
  return {
    initialize(v) {
      return v * 2;
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

const _C_p_get_symbol_n79r0o = Symbol();

const _C_p_set_symbol_n63ni = Symbol();

let _C_p_getter_afmof8;

let _C_p_setter_fute58;

class __C_jqd95o {
  static #_p_private_property_9s6jgo = 10;
  static get #p() {
    return _C_p_getter_afmof8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_fute58.call(this, v);
  }
  static _C_p_getter_afmof8() {
    return this.#_p_private_property_9s6jgo;
  }
  static _C_p_setter_fute58(v) {
    this.#_p_private_property_9s6jgo = v;
  }
  static [_C_p_get_symbol_n79r0o]() {
    return __C_jqd95o.#p;
  }
  static [_C_p_set_symbol_n63ni](v) {
    __C_jqd95o.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_s9oeao = {
  get: __C_jqd95o._C_p_getter_afmof8,
  set: __C_jqd95o._C_p_setter_fute58
};

_C_p_getter_afmof8 = __C_jqd95o._C_p_getter_afmof8;

_C_p_setter_fute58 = __C_jqd95o._C_p_setter_fute58;

delete __C_jqd95o._C_p_getter_afmof8;

delete __C_jqd95o._C_p_setter_fute58;

const _C_p_result_pp02lg = decorator({
  get: _C_p_getter_afmof8,
  set: _C_p_setter_fute58
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_jqd95o[_C_p_get_symbol_n79r0o],
    set: __C_jqd95o[_C_p_set_symbol_n63ni]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_jqd95o, "private", "#p")
}) || {};

_C_p_initializer_s9oeao.set.call(
  __C_jqd95o,
  (_C_p_result_pp02lg.initialize || (v => v))(_C_p_initializer_s9oeao.get.call(__C_jqd95o))
);

_C_p_getter_afmof8 = _C_p_result_pp02lg.get || _C_p_getter_afmof8;

_C_p_setter_fute58 = _C_p_result_pp02lg.set || _C_p_setter_fute58;

let C = __C_jqd95o;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.check === 20);