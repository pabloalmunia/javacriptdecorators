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

const _C_p_get_symbol_d1fs4o = Symbol();

const _C_p_set_symbol_8k388o = Symbol();

let _C_p_getter_pu789;

let _C_p_setter_c158b8;

class __C_65m71o {
  static #_p_private_property_7ve53 = 10;
  static get #p() {
    return _C_p_getter_pu789.call(this);
  }
  static set #p(v) {
    return _C_p_setter_c158b8.call(this, v);
  }
  static _C_p_getter_pu789() {
    return this.#_p_private_property_7ve53;
  }
  static _C_p_setter_c158b8(v) {
    this.#_p_private_property_7ve53 = v;
  }
  static [_C_p_get_symbol_d1fs4o]() {
    return __C_65m71o.#p;
  }
  static [_C_p_set_symbol_8k388o](v) {
    __C_65m71o.#p = v;
  }
}

const _C_p_initializer_gc3g5 = {
  get: __C_65m71o._C_p_getter_pu789,
  set: __C_65m71o._C_p_setter_c158b8
};

_C_p_getter_pu789 = __C_65m71o._C_p_getter_pu789;

_C_p_setter_c158b8 = __C_65m71o._C_p_setter_c158b8;

delete __C_65m71o._C_p_getter_pu789;

delete __C_65m71o._C_p_setter_c158b8;

const _C_p_result_k35ji8 = decorator1({
  get: _C_p_getter_pu789,
  set: _C_p_setter_c158b8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_65m71o[_C_p_get_symbol_d1fs4o],
    set: __C_65m71o[_C_p_set_symbol_8k388o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_65m71o, "private", "#p")
}) || {};

_C_p_initializer_gc3g5.set.call(
  __C_65m71o,
  (_C_p_result_k35ji8.initialize || (v => v))(_C_p_initializer_gc3g5.get.call(__C_65m71o))
);

_C_p_getter_pu789 = _C_p_result_k35ji8.get || _C_p_getter_pu789;

_C_p_setter_c158b8 = _C_p_result_k35ji8.set || _C_p_setter_c158b8;

const _C_p_result_h6plj8 = decorator2({
  get: _C_p_getter_pu789,
  set: _C_p_setter_c158b8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_65m71o[_C_p_get_symbol_d1fs4o],
    set: __C_65m71o[_C_p_set_symbol_8k388o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_65m71o, "private", "#p")
}) || {};

_C_p_initializer_gc3g5.set.call(
  __C_65m71o,
  (_C_p_result_h6plj8.initialize || (v => v))(_C_p_initializer_gc3g5.get.call(__C_65m71o))
);

_C_p_getter_pu789 = _C_p_result_h6plj8.get || _C_p_getter_pu789;

_C_p_setter_c158b8 = _C_p_result_h6plj8.set || _C_p_setter_c158b8;

const _C_p_result_7vd288 = decorator2({
  get: _C_p_getter_pu789,
  set: _C_p_setter_c158b8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_65m71o[_C_p_get_symbol_d1fs4o],
    set: __C_65m71o[_C_p_set_symbol_8k388o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_65m71o, "private", "#p")
}) || {};

_C_p_initializer_gc3g5.set.call(
  __C_65m71o,
  (_C_p_result_7vd288.initialize || (v => v))(_C_p_initializer_gc3g5.get.call(__C_65m71o))
);

_C_p_getter_pu789 = _C_p_result_7vd288.get || _C_p_getter_pu789;

_C_p_setter_c158b8 = _C_p_result_7vd288.set || _C_p_setter_c158b8;

let C = __C_65m71o;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);

console.assert(C[Symbol.metadata][TWO].private.length === 1);