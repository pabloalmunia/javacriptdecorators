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

const _C_f_get_symbol_r3gpoo = Symbol();

const _C_f_set_symbol_sj9j9g = Symbol();

let _C_f_getter_ifg9cg;

let _C_f_setter_ivh60o;

let _C_f_initializer_u3rcu;

let _C_f_initializer_2hio5o;

const _C_p_get_symbol_tpui28 = Symbol();

const _C_p_set_symbol_bsm5j8 = Symbol();

let _C_p_getter_j7ho6;

let _C_p_setter_gdre88;

let _C_p_initializer_rd05t;

let _C_p_initializer_4sai78;

class C {
  #_p_private_property_97kh2g = _C_p_initializer_4sai78.call(this, _C_p_initializer_rd05t.call(this, 10));
  get #p() {
    return _C_p_getter_j7ho6.call(this);
  }
  set #p(v) {
    return _C_p_setter_gdre88.call(this, v);
  }
  static _C_p_getter_j7ho6() {
    return this.#_p_private_property_97kh2g;
  }
  static _C_p_setter_gdre88(v) {
    this.#_p_private_property_97kh2g = v;
  }
  [_C_p_get_symbol_tpui28]() {
    return this.#p;
  }
  [_C_p_set_symbol_bsm5j8](v) {
    this.#p = v;
  }
  #_f_private_property_t23rc8 = _C_f_initializer_2hio5o.call(this, _C_f_initializer_u3rcu.call(this, 20));
  get #f() {
    return _C_f_getter_ifg9cg.call(this);
  }
  set #f(v) {
    return _C_f_setter_ivh60o.call(this, v);
  }
  static _C_f_getter_ifg9cg() {
    return this.#_f_private_property_t23rc8;
  }
  static _C_f_setter_ivh60o(v) {
    this.#_f_private_property_t23rc8 = v;
  }
  [_C_f_get_symbol_r3gpoo]() {
    return this.#f;
  }
  [_C_f_set_symbol_sj9j9g](v) {
    this.#f = v;
  }
}

_C_p_getter_j7ho6 = C._C_p_getter_j7ho6;

_C_p_setter_gdre88 = C._C_p_setter_gdre88;

delete C._C_p_getter_j7ho6;

delete C._C_p_setter_gdre88;

const _C_p_result_da2ou8 = meta(1)({
  get: _C_p_getter_j7ho6,
  set: _C_p_setter_gdre88
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_tpui28],
    set: C.prototype[_C_p_set_symbol_bsm5j8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_4sai78 = _C_p_result_da2ou8.initialize || (v => v);

_C_p_getter_j7ho6 = _C_p_result_da2ou8.get || _C_p_getter_j7ho6;

_C_p_setter_gdre88 = _C_p_result_da2ou8.set || _C_p_setter_gdre88;

const _C_p_result_nmrck = meta(2)({
  get: _C_p_getter_j7ho6,
  set: _C_p_setter_gdre88
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_tpui28],
    set: C.prototype[_C_p_set_symbol_bsm5j8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_rd05t = _C_p_result_nmrck.initialize || (v => v);

_C_p_getter_j7ho6 = _C_p_result_nmrck.get || _C_p_getter_j7ho6;

_C_p_setter_gdre88 = _C_p_result_nmrck.set || _C_p_setter_gdre88;

_C_f_getter_ifg9cg = C._C_f_getter_ifg9cg;

_C_f_setter_ivh60o = C._C_f_setter_ivh60o;

delete C._C_f_getter_ifg9cg;

delete C._C_f_setter_ivh60o;

const _C_f_result_l09v3g = meta(3)({
  get: _C_f_getter_ifg9cg,
  set: _C_f_setter_ivh60o
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_r3gpoo],
    set: C.prototype[_C_f_set_symbol_sj9j9g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_2hio5o = _C_f_result_l09v3g.initialize || (v => v);

_C_f_getter_ifg9cg = _C_f_result_l09v3g.get || _C_f_getter_ifg9cg;

_C_f_setter_ivh60o = _C_f_result_l09v3g.set || _C_f_setter_ivh60o;

const _C_f_result_n9teg8 = meta(3)({
  get: _C_f_getter_ifg9cg,
  set: _C_f_setter_ivh60o
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_r3gpoo],
    set: C.prototype[_C_f_set_symbol_sj9j9g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_u3rcu = _C_f_result_n9teg8.initialize || (v => v);

_C_f_getter_ifg9cg = _C_f_result_n9teg8.get || _C_f_getter_ifg9cg;

_C_f_setter_ivh60o = _C_f_result_n9teg8.set || _C_f_setter_ivh60o;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);