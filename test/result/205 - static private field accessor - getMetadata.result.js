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

const _C_f_get_symbol_0oqn58 = Symbol();

const _C_f_set_symbol_njke = Symbol();

let _C_f_getter_fm66e;

let _C_f_setter_hs054o;

const _C_p_get_symbol_32aklg = Symbol();

const _C_p_set_symbol_n8r0q = Symbol();

let _C_p_getter_d60qd;

let _C_p_setter_1bpjrg;

class C {
  static #_p_private_property_u5ctj = 10;
  static get #p() {
    return _C_p_getter_d60qd.call(this);
  }
  static set #p(v) {
    return _C_p_setter_1bpjrg.call(this, v);
  }
  static _C_p_getter_d60qd() {
    return this.#_p_private_property_u5ctj;
  }
  static _C_p_setter_1bpjrg(v) {
    this.#_p_private_property_u5ctj = v;
  }
  static [_C_p_get_symbol_32aklg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_n8r0q](v) {
    C.#p = v;
  }
  static #_f_private_property_2t1u38 = 20;
  static get #f() {
    return _C_f_getter_fm66e.call(this);
  }
  static set #f(v) {
    return _C_f_setter_hs054o.call(this, v);
  }
  static _C_f_getter_fm66e() {
    return this.#_f_private_property_2t1u38;
  }
  static _C_f_setter_hs054o(v) {
    this.#_f_private_property_2t1u38 = v;
  }
  static [_C_f_get_symbol_0oqn58]() {
    return C.#f;
  }
  static [_C_f_set_symbol_njke](v) {
    C.#f = v;
  }
}

const _C_p_initializer_qafelg = {
  get: C._C_p_getter_d60qd,
  set: C._C_p_setter_1bpjrg
};

_C_p_getter_d60qd = C._C_p_getter_d60qd;

_C_p_setter_1bpjrg = C._C_p_setter_1bpjrg;

delete C._C_p_getter_d60qd;

delete C._C_p_setter_1bpjrg;

const _C_p_result_qg388g = meta(1)({
  get: _C_p_getter_d60qd,
  set: _C_p_setter_1bpjrg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_32aklg],
    set: C[_C_p_set_symbol_n8r0q]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_qafelg.set.call(
  C,
  (_C_p_result_qg388g.initialize || (v => v))(_C_p_initializer_qafelg.get.call(C))
);

_C_p_getter_d60qd = _C_p_result_qg388g.get || _C_p_getter_d60qd;

_C_p_setter_1bpjrg = _C_p_result_qg388g.set || _C_p_setter_1bpjrg;

const _C_p_result_mefg2 = meta(2)({
  get: _C_p_getter_d60qd,
  set: _C_p_setter_1bpjrg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_32aklg],
    set: C[_C_p_set_symbol_n8r0q]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_qafelg.set.call(
  C,
  (_C_p_result_mefg2.initialize || (v => v))(_C_p_initializer_qafelg.get.call(C))
);

_C_p_getter_d60qd = _C_p_result_mefg2.get || _C_p_getter_d60qd;

_C_p_setter_1bpjrg = _C_p_result_mefg2.set || _C_p_setter_1bpjrg;

const _C_f_initializer_g3dso = {
  get: C._C_f_getter_fm66e,
  set: C._C_f_setter_hs054o
};

_C_f_getter_fm66e = C._C_f_getter_fm66e;

_C_f_setter_hs054o = C._C_f_setter_hs054o;

delete C._C_f_getter_fm66e;

delete C._C_f_setter_hs054o;

const _C_f_result_ab1bqo = meta(3)({
  get: _C_f_getter_fm66e,
  set: _C_f_setter_hs054o
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_0oqn58],
    set: C[_C_f_set_symbol_njke]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_g3dso.set.call(
  C,
  (_C_f_result_ab1bqo.initialize || (v => v))(_C_f_initializer_g3dso.get.call(C))
);

_C_f_getter_fm66e = _C_f_result_ab1bqo.get || _C_f_getter_fm66e;

_C_f_setter_hs054o = _C_f_result_ab1bqo.set || _C_f_setter_hs054o;

const _C_f_result_1cbm3 = meta(3)({
  get: _C_f_getter_fm66e,
  set: _C_f_setter_hs054o
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_0oqn58],
    set: C[_C_f_set_symbol_njke]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_g3dso.set.call(
  C,
  (_C_f_result_1cbm3.initialize || (v => v))(_C_f_initializer_g3dso.get.call(C))
);

_C_f_getter_fm66e = _C_f_result_1cbm3.get || _C_f_getter_fm66e;

_C_f_setter_hs054o = _C_f_result_1cbm3.set || _C_f_setter_hs054o;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);