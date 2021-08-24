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

const _C_p_get_symbol_si4egg = Symbol();

const _C_p_set_symbol_hcjo4o = Symbol();

let _C_p_getter_kf38go;

let _C_p_setter_ocgt0o;

class C {
  static #_p_private_property_jdfcv = 10;
  static get #p() {
    return _C_p_getter_kf38go.call(this);
  }
  static set #p(v) {
    return _C_p_setter_ocgt0o.call(this, v);
  }
  static _C_p_getter_kf38go() {
    return this.#_p_private_property_jdfcv;
  }
  static _C_p_setter_ocgt0o(v) {
    this.#_p_private_property_jdfcv = v;
  }
  static [_C_p_get_symbol_si4egg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_hcjo4o](v) {
    C.#p = v;
  }
}

const _C_p_initializer_r1p8r8 = {
  get: C._C_p_getter_kf38go,
  set: C._C_p_setter_ocgt0o
};

_C_p_getter_kf38go = C._C_p_getter_kf38go;

_C_p_setter_ocgt0o = C._C_p_setter_ocgt0o;

delete C._C_p_getter_kf38go;

delete C._C_p_setter_ocgt0o;

const _C_p_result_nd7oh8 = decorator1({
  get: _C_p_getter_kf38go,
  set: _C_p_setter_ocgt0o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_si4egg],
    set: C[_C_p_set_symbol_hcjo4o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_r1p8r8.set.call(
  C,
  (_C_p_result_nd7oh8.initialize || (v => v))(_C_p_initializer_r1p8r8.get.call(C))
);

_C_p_getter_kf38go = _C_p_result_nd7oh8.get || _C_p_getter_kf38go;

_C_p_setter_ocgt0o = _C_p_result_nd7oh8.set || _C_p_setter_ocgt0o;

const _C_p_result_ahpfjg = decorator2({
  get: _C_p_getter_kf38go,
  set: _C_p_setter_ocgt0o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_si4egg],
    set: C[_C_p_set_symbol_hcjo4o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_r1p8r8.set.call(
  C,
  (_C_p_result_ahpfjg.initialize || (v => v))(_C_p_initializer_r1p8r8.get.call(C))
);

_C_p_getter_kf38go = _C_p_result_ahpfjg.get || _C_p_getter_kf38go;

_C_p_setter_ocgt0o = _C_p_result_ahpfjg.set || _C_p_setter_ocgt0o;

const _C_p_result_siall8 = decorator2({
  get: _C_p_getter_kf38go,
  set: _C_p_setter_ocgt0o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_si4egg],
    set: C[_C_p_set_symbol_hcjo4o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_r1p8r8.set.call(
  C,
  (_C_p_result_siall8.initialize || (v => v))(_C_p_initializer_r1p8r8.get.call(C))
);

_C_p_getter_kf38go = _C_p_result_siall8.get || _C_p_getter_kf38go;

_C_p_setter_ocgt0o = _C_p_result_siall8.set || _C_p_setter_ocgt0o;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);

console.assert(C[Symbol.metadata][TWO].private.length === 1);