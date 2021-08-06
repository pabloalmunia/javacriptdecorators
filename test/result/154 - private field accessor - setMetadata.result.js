const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

const _C_p_get_symbol_hjbfg8 = Symbol();

const _C_p_set_symbol_621dpg = Symbol();

let _C_p_getter_r9b0ko;

let _C_p_setter_ca1lgo;

let _C_p_initializer_rhqduo;

let _C_p_initializer_ksjtvg;

class C {
  #_p_private_property_bqpcro = _C_p_initializer_ksjtvg.call(this, _C_p_initializer_rhqduo.call(this, 10));
  get #p() {
    return _C_p_getter_r9b0ko.call(this);
  }
  set #p(v) {
    return _C_p_setter_ca1lgo.call(this, v);
  }
  static _C_p_getter_r9b0ko() {
    return this.#_p_private_property_bqpcro;
  }
  static _C_p_setter_ca1lgo(v) {
    this.#_p_private_property_bqpcro = v;
  }
  [_C_p_get_symbol_hjbfg8]() {
    return this.#p;
  }
  [_C_p_set_symbol_621dpg](v) {
    this.#p = v;
  }
}

_C_p_getter_r9b0ko = C._C_p_getter_r9b0ko;

_C_p_setter_ca1lgo = C._C_p_setter_ca1lgo;

delete C._C_p_getter_r9b0ko;

delete C._C_p_setter_ca1lgo;

const _C_p_result_fbtc3o = decorator1({
  get: _C_p_getter_r9b0ko,
  set: _C_p_setter_ca1lgo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hjbfg8],
    set: C.prototype[_C_p_set_symbol_621dpg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_ksjtvg = _C_p_result_fbtc3o.initialize || (v => v);

_C_p_getter_r9b0ko = _C_p_result_fbtc3o.get || _C_p_getter_r9b0ko;

_C_p_setter_ca1lgo = _C_p_result_fbtc3o.set || _C_p_setter_ca1lgo;

const _C_p_result_52fss8 = decorator2({
  get: _C_p_getter_r9b0ko,
  set: _C_p_setter_ca1lgo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hjbfg8],
    set: C.prototype[_C_p_set_symbol_621dpg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_rhqduo = _C_p_result_52fss8.initialize || (v => v);

_C_p_getter_r9b0ko = _C_p_result_52fss8.get || _C_p_getter_r9b0ko;

_C_p_setter_ca1lgo = _C_p_result_52fss8.set || _C_p_setter_ca1lgo;

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);