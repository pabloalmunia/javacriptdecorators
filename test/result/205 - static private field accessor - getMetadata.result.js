const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata(META, n + value);
  };
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

const _C_f_get_symbol_coebeg = Symbol();

const _C_f_set_symbol_d3sqeg = Symbol();

let _C_f_getter_l9unq;

let _C_f_setter_g2p7to;

const _C_p_get_symbol_mrfvao = Symbol();

const _C_p_set_symbol_ied69o = Symbol();

let _C_p_getter_belv;

let _C_p_setter_ag7jp;

class C {
  static #_p_private_property_4ebd3 = 10;
  static get #p() {
    return _C_p_getter_belv.call(this);
  }
  static set #p(v) {
    return _C_p_setter_ag7jp.call(this, v);
  }
  static _C_p_getter_belv() {
    return this.#_p_private_property_4ebd3;
  }
  static _C_p_setter_ag7jp(v) {
    this.#_p_private_property_4ebd3 = v;
  }
  static [_C_p_get_symbol_mrfvao]() {
    return C.#p;
  }
  static [_C_p_set_symbol_ied69o](v) {
    C.#p = v;
  }
  static #_f_private_property_7m95vg = 20;
  static get #f() {
    return _C_f_getter_l9unq.call(this);
  }
  static set #f(v) {
    return _C_f_setter_g2p7to.call(this, v);
  }
  static _C_f_getter_l9unq() {
    return this.#_f_private_property_7m95vg;
  }
  static _C_f_setter_g2p7to(v) {
    this.#_f_private_property_7m95vg = v;
  }
  static [_C_f_get_symbol_coebeg]() {
    return C.#f;
  }
  static [_C_f_set_symbol_d3sqeg](v) {
    C.#f = v;
  }
}

const _C_p_initializer_undn3o = {
  get: C._C_p_getter_belv,
  set: C._C_p_setter_ag7jp
};

_C_p_getter_belv = C._C_p_getter_belv;

_C_p_setter_ag7jp = C._C_p_setter_ag7jp;

delete C._C_p_getter_belv;

delete C._C_p_setter_ag7jp;

const _C_p_result_ok56eg = meta(1)({
  get: _C_p_getter_belv,
  set: _C_p_setter_ag7jp
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_mrfvao],
    set: C[_C_p_set_symbol_ied69o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_undn3o.set.call(
  C,
  (_C_p_result_ok56eg.initialize || (v => v))(_C_p_initializer_undn3o.get.call(C))
);

_C_p_getter_belv = _C_p_result_ok56eg.get || _C_p_getter_belv;

_C_p_setter_ag7jp = _C_p_result_ok56eg.set || _C_p_setter_ag7jp;

const _C_p_result_02c2mo = meta(2)({
  get: _C_p_getter_belv,
  set: _C_p_setter_ag7jp
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_mrfvao],
    set: C[_C_p_set_symbol_ied69o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p")
}) || {};

_C_p_initializer_undn3o.set.call(
  C,
  (_C_p_result_02c2mo.initialize || (v => v))(_C_p_initializer_undn3o.get.call(C))
);

_C_p_getter_belv = _C_p_result_02c2mo.get || _C_p_getter_belv;

_C_p_setter_ag7jp = _C_p_result_02c2mo.set || _C_p_setter_ag7jp;

const _C_f_initializer_129ab8 = {
  get: C._C_f_getter_l9unq,
  set: C._C_f_setter_g2p7to
};

_C_f_getter_l9unq = C._C_f_getter_l9unq;

_C_f_setter_g2p7to = C._C_f_setter_g2p7to;

delete C._C_f_getter_l9unq;

delete C._C_f_setter_g2p7to;

const _C_f_result_b52sbg = meta(3)({
  get: _C_f_getter_l9unq,
  set: _C_f_setter_g2p7to
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_coebeg],
    set: C[_C_f_set_symbol_d3sqeg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#f")
}) || {};

_C_f_initializer_129ab8.set.call(
  C,
  (_C_f_result_b52sbg.initialize || (v => v))(_C_f_initializer_129ab8.get.call(C))
);

_C_f_getter_l9unq = _C_f_result_b52sbg.get || _C_f_getter_l9unq;

_C_f_setter_g2p7to = _C_f_result_b52sbg.set || _C_f_setter_g2p7to;

const _C_f_result_b997kg = meta(3)({
  get: _C_f_getter_l9unq,
  set: _C_f_setter_g2p7to
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_coebeg],
    set: C[_C_f_set_symbol_d3sqeg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#f")
}) || {};

_C_f_initializer_129ab8.set.call(
  C,
  (_C_f_result_b997kg.initialize || (v => v))(_C_f_initializer_129ab8.get.call(C))
);

_C_f_getter_l9unq = _C_f_result_b997kg.get || _C_f_getter_l9unq;

_C_f_setter_g2p7to = _C_f_result_b997kg.set || _C_f_setter_g2p7to;

console.assert(C[Symbol.metadata][META].private[0] === 3);

console.assert(C[Symbol.metadata][META].private[1] === 6);