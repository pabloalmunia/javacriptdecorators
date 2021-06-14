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

const _C_p_get_symbol_ke3eog = Symbol();

const _C_p_set_symbol_m7t028 = Symbol();

let _C_p_getter_il1hc;

let _C_p_setter_ufqkj;

let _C_p_initializer_9kfs9o;

let _C_p_initializer_cm19rg;

class C {
  #_p_private_property_rftj2o = _C_p_initializer_cm19rg.call(this, _C_p_initializer_9kfs9o.call(this, 10));
  get #p() {
    return _C_p_getter_il1hc.call(this);
  }
  set #p(v) {
    return _C_p_setter_ufqkj.call(this, v);
  }
  static _C_p_getter_il1hc() {
    return this.#_p_private_property_rftj2o;
  }
  static _C_p_setter_ufqkj(v) {
    this.#_p_private_property_rftj2o = v;
  }
  [_C_p_get_symbol_ke3eog]() {
    return this.#p;
  }
  [_C_p_set_symbol_m7t028](v) {
    this.#p = v;
  }
}

_C_p_getter_il1hc = C._C_p_getter_il1hc;

_C_p_setter_ufqkj = C._C_p_setter_ufqkj;

delete C._C_p_getter_il1hc;

delete C._C_p_setter_ufqkj;

const _C_p_result_k1mqoo = decorator1({
  get: _C_p_getter_il1hc,
  set: _C_p_setter_ufqkj
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_ke3eog],
    set: C.prototype[_C_p_set_symbol_m7t028]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_cm19rg = _C_p_result_k1mqoo.initialize || (v => v);

_C_p_getter_il1hc = _C_p_result_k1mqoo.get || _C_p_getter_il1hc;

_C_p_setter_ufqkj = _C_p_result_k1mqoo.set || _C_p_setter_ufqkj;

const _C_p_result_oqjpio = decorator2({
  get: _C_p_getter_il1hc,
  set: _C_p_setter_ufqkj
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_ke3eog],
    set: C.prototype[_C_p_set_symbol_m7t028]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_9kfs9o = _C_p_result_oqjpio.initialize || (v => v);

_C_p_getter_il1hc = _C_p_result_oqjpio.get || _C_p_getter_il1hc;

_C_p_setter_ufqkj = _C_p_result_oqjpio.set || _C_p_setter_ufqkj;

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);