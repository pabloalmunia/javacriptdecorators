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

const _C_f_get_symbol_iujldo = Symbol();

const _C_f_set_symbol_i8bot = Symbol();

let _C_f_getter_lir9pg;

let _C_f_setter_rt5rh8;

const _C_p_get_symbol_e5molg = Symbol();

const _C_p_set_symbol_o9qk3g = Symbol();

let _C_p_getter_i2dtn8;

let _C_p_setter_6ljrgo;

class __C_oge1e {
  static #_p_private_property_eurts = 10;
  static get #p() {
    return _C_p_getter_i2dtn8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_6ljrgo.call(this, v);
  }
  static _C_p_getter_i2dtn8() {
    return this.#_p_private_property_eurts;
  }
  static _C_p_setter_6ljrgo(v) {
    this.#_p_private_property_eurts = v;
  }
  static [_C_p_get_symbol_e5molg]() {
    return __C_oge1e.#p;
  }
  static [_C_p_set_symbol_o9qk3g](v) {
    __C_oge1e.#p = v;
  }
  static #_f_private_property_7gt1s8 = 20;
  static get #f() {
    return _C_f_getter_lir9pg.call(this);
  }
  static set #f(v) {
    return _C_f_setter_rt5rh8.call(this, v);
  }
  static _C_f_getter_lir9pg() {
    return this.#_f_private_property_7gt1s8;
  }
  static _C_f_setter_rt5rh8(v) {
    this.#_f_private_property_7gt1s8 = v;
  }
  static [_C_f_get_symbol_iujldo]() {
    return __C_oge1e.#f;
  }
  static [_C_f_set_symbol_i8bot](v) {
    __C_oge1e.#f = v;
  }
}

const _C_p_initializer_8slr6g = {
  get: __C_oge1e._C_p_getter_i2dtn8,
  set: __C_oge1e._C_p_setter_6ljrgo
};

_C_p_getter_i2dtn8 = __C_oge1e._C_p_getter_i2dtn8;

_C_p_setter_6ljrgo = __C_oge1e._C_p_setter_6ljrgo;

delete __C_oge1e._C_p_getter_i2dtn8;

delete __C_oge1e._C_p_setter_6ljrgo;

const _C_p_result_rb9nu = meta(1)({
  get: _C_p_getter_i2dtn8,
  set: _C_p_setter_6ljrgo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_oge1e[_C_p_get_symbol_e5molg],
    set: __C_oge1e[_C_p_set_symbol_o9qk3g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_oge1e, "private", "#p")
}) || {};

_C_p_initializer_8slr6g.set.call(
  __C_oge1e,
  (_C_p_result_rb9nu.initialize || (v => v))(_C_p_initializer_8slr6g.get.call(__C_oge1e))
);

_C_p_getter_i2dtn8 = _C_p_result_rb9nu.get || _C_p_getter_i2dtn8;

_C_p_setter_6ljrgo = _C_p_result_rb9nu.set || _C_p_setter_6ljrgo;

const _C_p_result_b5q4mg = meta(2)({
  get: _C_p_getter_i2dtn8,
  set: _C_p_setter_6ljrgo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_oge1e[_C_p_get_symbol_e5molg],
    set: __C_oge1e[_C_p_set_symbol_o9qk3g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_oge1e, "private", "#p")
}) || {};

_C_p_initializer_8slr6g.set.call(
  __C_oge1e,
  (_C_p_result_b5q4mg.initialize || (v => v))(_C_p_initializer_8slr6g.get.call(__C_oge1e))
);

_C_p_getter_i2dtn8 = _C_p_result_b5q4mg.get || _C_p_getter_i2dtn8;

_C_p_setter_6ljrgo = _C_p_result_b5q4mg.set || _C_p_setter_6ljrgo;

const _C_f_initializer_ppvd48 = {
  get: __C_oge1e._C_f_getter_lir9pg,
  set: __C_oge1e._C_f_setter_rt5rh8
};

_C_f_getter_lir9pg = __C_oge1e._C_f_getter_lir9pg;

_C_f_setter_rt5rh8 = __C_oge1e._C_f_setter_rt5rh8;

delete __C_oge1e._C_f_getter_lir9pg;

delete __C_oge1e._C_f_setter_rt5rh8;

const _C_f_result_2nke6 = meta(3)({
  get: _C_f_getter_lir9pg,
  set: _C_f_setter_rt5rh8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: __C_oge1e[_C_f_get_symbol_iujldo],
    set: __C_oge1e[_C_f_set_symbol_i8bot]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_oge1e, "private", "#f")
}) || {};

_C_f_initializer_ppvd48.set.call(
  __C_oge1e,
  (_C_f_result_2nke6.initialize || (v => v))(_C_f_initializer_ppvd48.get.call(__C_oge1e))
);

_C_f_getter_lir9pg = _C_f_result_2nke6.get || _C_f_getter_lir9pg;

_C_f_setter_rt5rh8 = _C_f_result_2nke6.set || _C_f_setter_rt5rh8;

const _C_f_result_mnnur = meta(3)({
  get: _C_f_getter_lir9pg,
  set: _C_f_setter_rt5rh8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: __C_oge1e[_C_f_get_symbol_iujldo],
    set: __C_oge1e[_C_f_set_symbol_i8bot]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_oge1e, "private", "#f")
}) || {};

_C_f_initializer_ppvd48.set.call(
  __C_oge1e,
  (_C_f_result_mnnur.initialize || (v => v))(_C_f_initializer_ppvd48.get.call(__C_oge1e))
);

_C_f_getter_lir9pg = _C_f_result_mnnur.get || _C_f_getter_lir9pg;

_C_f_setter_rt5rh8 = _C_f_result_mnnur.set || _C_f_setter_rt5rh8;

let C = __C_oge1e;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][META].private[0] === 3);

console.assert(C[Symbol.metadata][META].private[1] === 6);