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

const _C_p_get_symbol_9trpj8 = Symbol();

const _C_p_set_symbol_35iilg = Symbol();

let _C_p_getter_bgouf8;

let _C_p_setter_opvcdg;

class C {
  static #_p_private_property_k31kvg = 1;
  static get #p() {
    return _C_p_getter_bgouf8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_opvcdg.call(this, v);
  }
  static _C_p_getter_bgouf8() {
    return this.#_p_private_property_k31kvg;
  }
  static _C_p_setter_opvcdg(v) {
    this.#_p_private_property_k31kvg = v;
  }
  static [_C_p_get_symbol_9trpj8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_35iilg](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_sp3pe8 = {
  get: C._C_p_getter_bgouf8,
  set: C._C_p_setter_opvcdg
};

_C_p_getter_bgouf8 = C._C_p_getter_bgouf8;

_C_p_setter_opvcdg = C._C_p_setter_opvcdg;

delete C._C_p_getter_bgouf8;

delete C._C_p_setter_opvcdg;

const _C_p_result_g9spd = decorator1({
  get: _C_p_getter_bgouf8,
  set: _C_p_setter_opvcdg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_9trpj8],
    set: C[_C_p_set_symbol_35iilg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_sp3pe8.set.call(
  C,
  (_C_p_result_g9spd.initialize || (v => v))(_C_p_initializer_sp3pe8.get.call(C))
);

_C_p_getter_bgouf8 = _C_p_result_g9spd.get || _C_p_getter_bgouf8;

_C_p_setter_opvcdg = _C_p_result_g9spd.set || _C_p_setter_opvcdg;

const _C_p_result_aa0sj = decorator2({
  get: _C_p_getter_bgouf8,
  set: _C_p_setter_opvcdg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_9trpj8],
    set: C[_C_p_set_symbol_35iilg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_sp3pe8.set.call(
  C,
  (_C_p_result_aa0sj.initialize || (v => v))(_C_p_initializer_sp3pe8.get.call(C))
);

_C_p_getter_bgouf8 = _C_p_result_aa0sj.get || _C_p_getter_bgouf8;

_C_p_setter_opvcdg = _C_p_result_aa0sj.set || _C_p_setter_opvcdg;

console.assert(C.check === 6);