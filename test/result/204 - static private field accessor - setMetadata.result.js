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

const _C_p_get_symbol_jsqp6g = Symbol();

const _C_p_set_symbol_npil4g = Symbol();

let _C_p_getter_qhn2uo;

let _C_p_setter_m9ucm8;

class C {
  static #_p_private_property_8vtvio = 10;
  static get #p() {
    return _C_p_getter_qhn2uo.call(this);
  }
  static set #p(v) {
    return _C_p_setter_m9ucm8.call(this, v);
  }
  static _C_p_getter_qhn2uo() {
    return this.#_p_private_property_8vtvio;
  }
  static _C_p_setter_m9ucm8(v) {
    this.#_p_private_property_8vtvio = v;
  }
  static [_C_p_get_symbol_jsqp6g]() {
    return C.#p;
  }
  static [_C_p_set_symbol_npil4g](v) {
    C.#p = v;
  }
}

const _C_p_initializer_aer83g = {
  get: C._C_p_getter_qhn2uo,
  set: C._C_p_setter_m9ucm8
};

_C_p_getter_qhn2uo = C._C_p_getter_qhn2uo;

_C_p_setter_m9ucm8 = C._C_p_setter_m9ucm8;

delete C._C_p_getter_qhn2uo;

delete C._C_p_setter_m9ucm8;

const _C_p_result_s3jts8 = decorator1({
  get: _C_p_getter_qhn2uo,
  set: _C_p_setter_m9ucm8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_jsqp6g],
    set: C[_C_p_set_symbol_npil4g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_aer83g.set.call(
  C,
  (_C_p_result_s3jts8.initialize || (v => v))(_C_p_initializer_aer83g.get.call(C))
);

_C_p_getter_qhn2uo = _C_p_result_s3jts8.get || _C_p_getter_qhn2uo;

_C_p_setter_m9ucm8 = _C_p_result_s3jts8.set || _C_p_setter_m9ucm8;

const _C_p_result_2cgt2o = decorator2({
  get: _C_p_getter_qhn2uo,
  set: _C_p_setter_m9ucm8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_jsqp6g],
    set: C[_C_p_set_symbol_npil4g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_aer83g.set.call(
  C,
  (_C_p_result_2cgt2o.initialize || (v => v))(_C_p_initializer_aer83g.get.call(C))
);

_C_p_getter_qhn2uo = _C_p_result_2cgt2o.get || _C_p_getter_qhn2uo;

_C_p_setter_m9ucm8 = _C_p_result_2cgt2o.set || _C_p_setter_m9ucm8;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);