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

const _C_f_get_symbol_1hg7pg = Symbol();

const _C_f_set_symbol_kt9umg = Symbol();

let _C_f_getter_khfkko;

let _C_f_setter_4hbc18;

const _C_p_get_symbol_b6k7r = Symbol();

const _C_p_set_symbol_auccv8 = Symbol();

let _C_p_getter_tcjuf8;

let _C_p_setter_cnimug;

class C {
  static #_p_private_property_m18tlo = 10;
  static get #p() {
    return _C_p_getter_tcjuf8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_cnimug.call(this, v);
  }
  static _C_p_getter_tcjuf8() {
    return this.#_p_private_property_m18tlo;
  }
  static _C_p_setter_cnimug(v) {
    this.#_p_private_property_m18tlo = v;
  }
  static [_C_p_get_symbol_b6k7r]() {
    return C.#p;
  }
  static [_C_p_set_symbol_auccv8](v) {
    C.#p = v;
  }
  static #_f_private_property_ru26go = 20;
  static get #f() {
    return _C_f_getter_khfkko.call(this);
  }
  static set #f(v) {
    return _C_f_setter_4hbc18.call(this, v);
  }
  static _C_f_getter_khfkko() {
    return this.#_f_private_property_ru26go;
  }
  static _C_f_setter_4hbc18(v) {
    this.#_f_private_property_ru26go = v;
  }
  static [_C_f_get_symbol_1hg7pg]() {
    return C.#f;
  }
  static [_C_f_set_symbol_kt9umg](v) {
    C.#f = v;
  }
}

const _C_p_initializer_fb1fdg = {
  get: C._C_p_getter_tcjuf8,
  set: C._C_p_setter_cnimug
};

_C_p_getter_tcjuf8 = C._C_p_getter_tcjuf8;

_C_p_setter_cnimug = C._C_p_setter_cnimug;

delete C._C_p_getter_tcjuf8;

delete C._C_p_setter_cnimug;

const _C_p_result_op1a48 = meta(1)({
  get: _C_p_getter_tcjuf8,
  set: _C_p_setter_cnimug
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_b6k7r],
    set: C[_C_p_set_symbol_auccv8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_fb1fdg.set.call(
  C,
  (_C_p_result_op1a48.initialize || (v => v))(_C_p_initializer_fb1fdg.get.call(C))
);

_C_p_getter_tcjuf8 = _C_p_result_op1a48.get || _C_p_getter_tcjuf8;

_C_p_setter_cnimug = _C_p_result_op1a48.set || _C_p_setter_cnimug;

const _C_p_result_oja8og = meta(2)({
  get: _C_p_getter_tcjuf8,
  set: _C_p_setter_cnimug
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_b6k7r],
    set: C[_C_p_set_symbol_auccv8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_fb1fdg.set.call(
  C,
  (_C_p_result_oja8og.initialize || (v => v))(_C_p_initializer_fb1fdg.get.call(C))
);

_C_p_getter_tcjuf8 = _C_p_result_oja8og.get || _C_p_getter_tcjuf8;

_C_p_setter_cnimug = _C_p_result_oja8og.set || _C_p_setter_cnimug;

const _C_f_initializer_edhpt8 = {
  get: C._C_f_getter_khfkko,
  set: C._C_f_setter_4hbc18
};

_C_f_getter_khfkko = C._C_f_getter_khfkko;

_C_f_setter_4hbc18 = C._C_f_setter_4hbc18;

delete C._C_f_getter_khfkko;

delete C._C_f_setter_4hbc18;

const _C_f_result_d7c83o = meta(3)({
  get: _C_f_getter_khfkko,
  set: _C_f_setter_4hbc18
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_1hg7pg],
    set: C[_C_f_set_symbol_kt9umg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_edhpt8.set.call(
  C,
  (_C_f_result_d7c83o.initialize || (v => v))(_C_f_initializer_edhpt8.get.call(C))
);

_C_f_getter_khfkko = _C_f_result_d7c83o.get || _C_f_getter_khfkko;

_C_f_setter_4hbc18 = _C_f_result_d7c83o.set || _C_f_setter_4hbc18;

const _C_f_result_hv9q4 = meta(3)({
  get: _C_f_getter_khfkko,
  set: _C_f_setter_4hbc18
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_1hg7pg],
    set: C[_C_f_set_symbol_kt9umg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_edhpt8.set.call(
  C,
  (_C_f_result_hv9q4.initialize || (v => v))(_C_f_initializer_edhpt8.get.call(C))
);

_C_f_getter_khfkko = _C_f_result_hv9q4.get || _C_f_getter_khfkko;

_C_f_setter_4hbc18 = _C_f_result_hv9q4.set || _C_f_setter_4hbc18;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);