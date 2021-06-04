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
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
    }
  }
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
      createObjectWithPrototype(base, Symbol.metadata);
      createObjectWithPrototype(base[Symbol.metadata], key);
      createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_plqb3 = Symbol();

const _C_p_set_symbol_f5g56 = Symbol();

let _C_p_getter_ij65ho;

let _C_p_setter_npq3eg;

let _C_p_initializer_pu9rqo;

let _C_p_initializer_61bkv8;

class C {
  #_p_private_property_qnv28 = _C_p_initializer_61bkv8.call(this, _C_p_initializer_pu9rqo.call(this, 10));
  get #p() {
    return _C_p_getter_ij65ho.call(this);
  }
  set #p(v) {
    return _C_p_setter_npq3eg.call(this, v);
  }
  static _C_p_getter_ij65ho() {
    return this.#_p_private_property_qnv28;
  }
  static _C_p_setter_npq3eg(v) {
    this.#_p_private_property_qnv28 = v;
  }
  [_C_p_get_symbol_plqb3]() {
    return this.#p;
  }
  [_C_p_set_symbol_f5g56](v) {
    this.#p = v;
  }
}

_C_p_getter_ij65ho = C._C_p_getter_ij65ho;

_C_p_setter_npq3eg = C._C_p_setter_npq3eg;

delete C._C_p_getter_ij65ho;

delete C._C_p_setter_npq3eg;

const _C_p_result_ljmuu = decorator1({
  get: _C_p_getter_ij65ho,
  set: _C_p_setter_npq3eg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_plqb3],
    set: C.prototype[_C_p_set_symbol_f5g56]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_61bkv8 = _C_p_result_ljmuu.initialize || (v => v);

_C_p_getter_ij65ho = _C_p_result_ljmuu.get || _C_p_getter_ij65ho;

_C_p_setter_npq3eg = _C_p_result_ljmuu.set || _C_p_setter_npq3eg;

const _C_p_result_n2skio = decorator2({
  get: _C_p_getter_ij65ho,
  set: _C_p_setter_npq3eg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_plqb3],
    set: C.prototype[_C_p_set_symbol_f5g56]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_pu9rqo = _C_p_result_n2skio.initialize || (v => v);

_C_p_getter_ij65ho = _C_p_result_n2skio.get || _C_p_getter_ij65ho;

_C_p_setter_npq3eg = _C_p_result_n2skio.set || _C_p_setter_npq3eg;

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);