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

const _C_p_get_symbol_v236og = Symbol();

const _C_p_set_symbol_jv83eo = Symbol();

let _C_p_getter_lkmcgo;

let _C_p_setter_5k8drg;

class C {
  static #_p_private_property_2qe43 = 1;
  static get #p() {
    return _C_p_getter_lkmcgo.call(this);
  }
  static set #p(v) {
    return _C_p_setter_5k8drg.call(this, v);
  }
  static _C_p_getter_lkmcgo() {
    return this.#_p_private_property_2qe43;
  }
  static _C_p_setter_5k8drg(v) {
    this.#_p_private_property_2qe43 = v;
  }
  static [_C_p_get_symbol_v236og]() {
    return C.#p;
  }
  static [_C_p_set_symbol_jv83eo](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_4kmpe = {
  get: C._C_p_getter_lkmcgo,
  set: C._C_p_setter_5k8drg
};

_C_p_getter_lkmcgo = C._C_p_getter_lkmcgo;

_C_p_setter_5k8drg = C._C_p_setter_5k8drg;

delete C._C_p_getter_lkmcgo;

delete C._C_p_setter_5k8drg;

const _C_p_result_up24m8 = decorator1({
  get: _C_p_getter_lkmcgo,
  set: _C_p_setter_5k8drg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_v236og],
    set: C[_C_p_set_symbol_jv83eo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_4kmpe.set.call(
  C,
  (_C_p_result_up24m8.initialize || (v => v))(_C_p_initializer_4kmpe.get.call(C))
);

_C_p_getter_lkmcgo = _C_p_result_up24m8.get || _C_p_getter_lkmcgo;

_C_p_setter_5k8drg = _C_p_result_up24m8.set || _C_p_setter_5k8drg;

const _C_p_result_j04drg = decorator2({
  get: _C_p_getter_lkmcgo,
  set: _C_p_setter_5k8drg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_v236og],
    set: C[_C_p_set_symbol_jv83eo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_4kmpe.set.call(
  C,
  (_C_p_result_j04drg.initialize || (v => v))(_C_p_initializer_4kmpe.get.call(C))
);

_C_p_getter_lkmcgo = _C_p_result_j04drg.get || _C_p_getter_lkmcgo;

_C_p_setter_5k8drg = _C_p_result_j04drg.set || _C_p_setter_5k8drg;

console.assert(C.check === 6);