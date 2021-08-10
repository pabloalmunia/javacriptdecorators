function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
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

const _C_p_get_symbol_lucedg = Symbol();

const _C_p_set_symbol_1rtd2o = Symbol();

let _C_p_getter_p0bh1o;

let _C_p_setter_qo7mt8;

class __C_7tset {
  static #_p_private_property_48t8m = 1;
  static get #p() {
    return _C_p_getter_p0bh1o.call(this);
  }
  static set #p(v) {
    return _C_p_setter_qo7mt8.call(this, v);
  }
  static _C_p_getter_p0bh1o() {
    return this.#_p_private_property_48t8m;
  }
  static _C_p_setter_qo7mt8(v) {
    this.#_p_private_property_48t8m = v;
  }
  static [_C_p_get_symbol_lucedg]() {
    return __C_7tset.#p;
  }
  static [_C_p_set_symbol_1rtd2o](v) {
    __C_7tset.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_9ufico = {
  get: __C_7tset._C_p_getter_p0bh1o,
  set: __C_7tset._C_p_setter_qo7mt8
};

_C_p_getter_p0bh1o = __C_7tset._C_p_getter_p0bh1o;

_C_p_setter_qo7mt8 = __C_7tset._C_p_setter_qo7mt8;

delete __C_7tset._C_p_getter_p0bh1o;

delete __C_7tset._C_p_setter_qo7mt8;

const _C_p_result_r3ssdo = decorator1({
  get: _C_p_getter_p0bh1o,
  set: _C_p_setter_qo7mt8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_7tset[_C_p_get_symbol_lucedg],
    set: __C_7tset[_C_p_set_symbol_1rtd2o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_7tset, "private", "#p")
}) || {};

_C_p_initializer_9ufico.set.call(
  __C_7tset,
  (_C_p_result_r3ssdo.initialize || (v => v))(_C_p_initializer_9ufico.get.call(__C_7tset))
);

_C_p_getter_p0bh1o = _C_p_result_r3ssdo.get || _C_p_getter_p0bh1o;

_C_p_setter_qo7mt8 = _C_p_result_r3ssdo.set || _C_p_setter_qo7mt8;

const _C_p_result_luckb = decorator2({
  get: _C_p_getter_p0bh1o,
  set: _C_p_setter_qo7mt8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_7tset[_C_p_get_symbol_lucedg],
    set: __C_7tset[_C_p_set_symbol_1rtd2o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_7tset, "private", "#p")
}) || {};

_C_p_initializer_9ufico.set.call(
  __C_7tset,
  (_C_p_result_luckb.initialize || (v => v))(_C_p_initializer_9ufico.get.call(__C_7tset))
);

_C_p_getter_p0bh1o = _C_p_result_luckb.get || _C_p_getter_p0bh1o;

_C_p_setter_qo7mt8 = _C_p_result_luckb.set || _C_p_setter_qo7mt8;

let C = __C_7tset;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.check === 6);