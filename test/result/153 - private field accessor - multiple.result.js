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

const _C_p_get_symbol_2g3cfg = Symbol();

const _C_p_set_symbol_896t0g = Symbol();

let _C_p_getter_vv17s8;

let _C_p_setter_dskaao;

let _C_p_initializer_5v73po;

let _C_p_initializer_q67g8o;

class __C_urac2o {
  #_p_private_property_koavk8 = _C_p_initializer_q67g8o.call(this, _C_p_initializer_5v73po.call(this, 1));
  get #p() {
    return _C_p_getter_vv17s8.call(this);
  }
  set #p(v) {
    return _C_p_setter_dskaao.call(this, v);
  }
  static _C_p_getter_vv17s8() {
    return this.#_p_private_property_koavk8;
  }
  static _C_p_setter_dskaao(v) {
    this.#_p_private_property_koavk8 = v;
  }
  [_C_p_get_symbol_2g3cfg]() {
    return this.#p;
  }
  [_C_p_set_symbol_896t0g](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_vv17s8 = __C_urac2o._C_p_getter_vv17s8;

_C_p_setter_dskaao = __C_urac2o._C_p_setter_dskaao;

delete __C_urac2o._C_p_getter_vv17s8;

delete __C_urac2o._C_p_setter_dskaao;

const _C_p_result_3j1fr = decorator1({
  get: _C_p_getter_vv17s8,
  set: _C_p_setter_dskaao
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_urac2o.prototype[_C_p_get_symbol_2g3cfg],
    set: __C_urac2o.prototype[_C_p_set_symbol_896t0g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_urac2o.prototype, "private", "#p")
}) || {};

_C_p_initializer_q67g8o = _C_p_result_3j1fr.initialize || (v => v);

_C_p_getter_vv17s8 = _C_p_result_3j1fr.get || _C_p_getter_vv17s8;

_C_p_setter_dskaao = _C_p_result_3j1fr.set || _C_p_setter_dskaao;

const _C_p_result_vkcm08 = decorator2({
  get: _C_p_getter_vv17s8,
  set: _C_p_setter_dskaao
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_urac2o.prototype[_C_p_get_symbol_2g3cfg],
    set: __C_urac2o.prototype[_C_p_set_symbol_896t0g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_urac2o.prototype, "private", "#p")
}) || {};

_C_p_initializer_5v73po = _C_p_result_vkcm08.initialize || (v => v);

_C_p_getter_vv17s8 = _C_p_result_vkcm08.get || _C_p_getter_vv17s8;

_C_p_setter_dskaao = _C_p_result_vkcm08.set || _C_p_setter_dskaao;

let C = __C_urac2o;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(c.check === 6);