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
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

const _C_p_get_symbol_dvambo = Symbol();

const _C_p_set_symbol_m2r16g = Symbol();

let _C_p_getter_2po04;

let _C_p_setter_jff2ro;

class C {
  static #_p_private_property_72c06 = 1;
  static get #p() {
    return _C_p_getter_2po04.call(this);
  }
  static set #p(v) {
    return _C_p_setter_jff2ro.call(this, v);
  }
  static _C_p_getter_2po04() {
    return this.#_p_private_property_72c06;
  }
  static _C_p_setter_jff2ro(v) {
    this.#_p_private_property_72c06 = v;
  }
  static [_C_p_get_symbol_dvambo]() {
    return C.#p;
  }
  static [_C_p_set_symbol_m2r16g](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_rshk28 = {
  get: C._C_p_getter_2po04,
  set: C._C_p_setter_jff2ro
};

_C_p_getter_2po04 = C._C_p_getter_2po04;

_C_p_setter_jff2ro = C._C_p_setter_jff2ro;

delete C._C_p_getter_2po04;

delete C._C_p_setter_jff2ro;

const _C_p_result_bvbn18 = decorator1({
  get: _C_p_getter_2po04,
  set: _C_p_setter_jff2ro
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_dvambo],
    set: C[_C_p_set_symbol_m2r16g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_rshk28.set.call(
  C,
  (_C_p_result_bvbn18.initialize || (v => v))(_C_p_initializer_rshk28.get.call(C))
);

_C_p_getter_2po04 = _C_p_result_bvbn18.get || _C_p_getter_2po04;

_C_p_setter_jff2ro = _C_p_result_bvbn18.set || _C_p_setter_jff2ro;

const _C_p_result_12u04 = decorator2({
  get: _C_p_getter_2po04,
  set: _C_p_setter_jff2ro
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_dvambo],
    set: C[_C_p_set_symbol_m2r16g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_rshk28.set.call(
  C,
  (_C_p_result_12u04.initialize || (v => v))(_C_p_initializer_rshk28.get.call(C))
);

_C_p_getter_2po04 = _C_p_result_12u04.get || _C_p_getter_2po04;

_C_p_setter_jff2ro = _C_p_result_12u04.set || _C_p_setter_jff2ro;

console.assert(C.check === 6);