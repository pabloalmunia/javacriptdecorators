const META = Symbol();

function meta(value) {
  return function(element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata(META, a[a.length - 1] + value);
  };
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

const _C_f_get_symbol_br1k98 = Symbol();

const _C_f_set_symbol_7rvok = Symbol();

let _C_f_getter_k8spvg;

let _C_f_setter_1hfuko;

const _C_p_get_symbol_1bias8 = Symbol();

const _C_p_set_symbol_5sv9s = Symbol();

let _C_p_getter_8it0u8;

let _C_p_setter_27nva8;

class C {
  static #_p_private_property_c2d34o = 10;
  static get #p() {
    return _C_p_getter_8it0u8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_27nva8.call(this, v);
  }
  static _C_p_getter_8it0u8() {
    return this.#_p_private_property_c2d34o;
  }
  static _C_p_setter_27nva8(v) {
    this.#_p_private_property_c2d34o = v;
  }
  static [_C_p_get_symbol_1bias8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_5sv9s](v) {
    C.#p = v;
  }
  static #_f_private_property_1oalq8 = 20;
  static get #f() {
    return _C_f_getter_k8spvg.call(this);
  }
  static set #f(v) {
    return _C_f_setter_1hfuko.call(this, v);
  }
  static _C_f_getter_k8spvg() {
    return this.#_f_private_property_1oalq8;
  }
  static _C_f_setter_1hfuko(v) {
    this.#_f_private_property_1oalq8 = v;
  }
  static [_C_f_get_symbol_br1k98]() {
    return C.#f;
  }
  static [_C_f_set_symbol_7rvok](v) {
    C.#f = v;
  }
}

const _C_p_initializer_crddlo = {
  get: C._C_p_getter_8it0u8,
  set: C._C_p_setter_27nva8
};

_C_p_getter_8it0u8 = C._C_p_getter_8it0u8;

_C_p_setter_27nva8 = C._C_p_setter_27nva8;

delete C._C_p_getter_8it0u8;

delete C._C_p_setter_27nva8;

const _C_p_result_theme8 = meta(1)({
  get: _C_p_getter_8it0u8,
  set: _C_p_setter_27nva8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_1bias8],
    set: C[_C_p_set_symbol_5sv9s]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_crddlo.set.call(
  C,
  (_C_p_result_theme8.initialize || (v => v))(_C_p_initializer_crddlo.get.call(C))
);

_C_p_getter_8it0u8 = _C_p_result_theme8.get || _C_p_getter_8it0u8;

_C_p_setter_27nva8 = _C_p_result_theme8.set || _C_p_setter_27nva8;

const _C_p_result_m32q8o = meta(2)({
  get: _C_p_getter_8it0u8,
  set: _C_p_setter_27nva8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_1bias8],
    set: C[_C_p_set_symbol_5sv9s]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_crddlo.set.call(
  C,
  (_C_p_result_m32q8o.initialize || (v => v))(_C_p_initializer_crddlo.get.call(C))
);

_C_p_getter_8it0u8 = _C_p_result_m32q8o.get || _C_p_getter_8it0u8;

_C_p_setter_27nva8 = _C_p_result_m32q8o.set || _C_p_setter_27nva8;

const _C_f_initializer_kk4poo = {
  get: C._C_f_getter_k8spvg,
  set: C._C_f_setter_1hfuko
};

_C_f_getter_k8spvg = C._C_f_getter_k8spvg;

_C_f_setter_1hfuko = C._C_f_setter_1hfuko;

delete C._C_f_getter_k8spvg;

delete C._C_f_setter_1hfuko;

const _C_f_result_91pir8 = meta(3)({
  get: _C_f_getter_k8spvg,
  set: _C_f_setter_1hfuko
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_br1k98],
    set: C[_C_f_set_symbol_7rvok]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_kk4poo.set.call(
  C,
  (_C_f_result_91pir8.initialize || (v => v))(_C_f_initializer_kk4poo.get.call(C))
);

_C_f_getter_k8spvg = _C_f_result_91pir8.get || _C_f_getter_k8spvg;

_C_f_setter_1hfuko = _C_f_result_91pir8.set || _C_f_setter_1hfuko;

const _C_f_result_de2dro = meta(3)({
  get: _C_f_getter_k8spvg,
  set: _C_f_setter_1hfuko
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_br1k98],
    set: C[_C_f_set_symbol_7rvok]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_kk4poo.set.call(
  C,
  (_C_f_result_de2dro.initialize || (v => v))(_C_f_initializer_kk4poo.get.call(C))
);

_C_f_getter_k8spvg = _C_f_result_de2dro.get || _C_f_getter_k8spvg;

_C_f_setter_1hfuko = _C_f_result_de2dro.set || _C_f_setter_1hfuko;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);