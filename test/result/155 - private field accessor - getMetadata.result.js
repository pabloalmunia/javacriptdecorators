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

const _C_f_get_symbol_ebou58 = Symbol();

const _C_f_set_symbol_5jkrvo = Symbol();

let _C_f_getter_6klgrg;

let _C_f_setter_i1db7g;

let _C_f_initializer_gosi9;

let _C_f_initializer_5j8um;

const _C_p_get_symbol_l5jun8 = Symbol();

const _C_p_set_symbol_rk7pf8 = Symbol();

let _C_p_getter_2krh18;

let _C_p_setter_6fd4l8;

let _C_p_initializer_om4rb;

let _C_p_initializer_qhg958;

class C {
  #_p_private_property_n7soso = _C_p_initializer_qhg958.call(this, _C_p_initializer_om4rb.call(this, 10));
  get #p() {
    return _C_p_getter_2krh18.call(this);
  }
  set #p(v) {
    return _C_p_setter_6fd4l8.call(this, v);
  }
  static _C_p_getter_2krh18() {
    return this.#_p_private_property_n7soso;
  }
  static _C_p_setter_6fd4l8(v) {
    this.#_p_private_property_n7soso = v;
  }
  [_C_p_get_symbol_l5jun8]() {
    return this.#p;
  }
  [_C_p_set_symbol_rk7pf8](v) {
    this.#p = v;
  }
  #_f_private_property_hbdmj8 = _C_f_initializer_5j8um.call(this, _C_f_initializer_gosi9.call(this, 20));
  get #f() {
    return _C_f_getter_6klgrg.call(this);
  }
  set #f(v) {
    return _C_f_setter_i1db7g.call(this, v);
  }
  static _C_f_getter_6klgrg() {
    return this.#_f_private_property_hbdmj8;
  }
  static _C_f_setter_i1db7g(v) {
    this.#_f_private_property_hbdmj8 = v;
  }
  [_C_f_get_symbol_ebou58]() {
    return this.#f;
  }
  [_C_f_set_symbol_5jkrvo](v) {
    this.#f = v;
  }
}

_C_p_getter_2krh18 = C._C_p_getter_2krh18;

_C_p_setter_6fd4l8 = C._C_p_setter_6fd4l8;

delete C._C_p_getter_2krh18;

delete C._C_p_setter_6fd4l8;

const _C_p_result_q8l34 = meta(1)({
  get: _C_p_getter_2krh18,
  set: _C_p_setter_6fd4l8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_l5jun8],
    set: C.prototype[_C_p_set_symbol_rk7pf8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_qhg958 = _C_p_result_q8l34.initialize || (v => v);

_C_p_getter_2krh18 = _C_p_result_q8l34.get || _C_p_getter_2krh18;

_C_p_setter_6fd4l8 = _C_p_result_q8l34.set || _C_p_setter_6fd4l8;

const _C_p_result_j7ml6o = meta(2)({
  get: _C_p_getter_2krh18,
  set: _C_p_setter_6fd4l8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_l5jun8],
    set: C.prototype[_C_p_set_symbol_rk7pf8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_om4rb = _C_p_result_j7ml6o.initialize || (v => v);

_C_p_getter_2krh18 = _C_p_result_j7ml6o.get || _C_p_getter_2krh18;

_C_p_setter_6fd4l8 = _C_p_result_j7ml6o.set || _C_p_setter_6fd4l8;

_C_f_getter_6klgrg = C._C_f_getter_6klgrg;

_C_f_setter_i1db7g = C._C_f_setter_i1db7g;

delete C._C_f_getter_6klgrg;

delete C._C_f_setter_i1db7g;

const _C_f_result_3d6mmo = meta(3)({
  get: _C_f_getter_6klgrg,
  set: _C_f_setter_i1db7g
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_ebou58],
    set: C.prototype[_C_f_set_symbol_5jkrvo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_5j8um = _C_f_result_3d6mmo.initialize || (v => v);

_C_f_getter_6klgrg = _C_f_result_3d6mmo.get || _C_f_getter_6klgrg;

_C_f_setter_i1db7g = _C_f_result_3d6mmo.set || _C_f_setter_i1db7g;

const _C_f_result_ha7mag = meta(3)({
  get: _C_f_getter_6klgrg,
  set: _C_f_setter_i1db7g
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_ebou58],
    set: C.prototype[_C_f_set_symbol_5jkrvo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_gosi9 = _C_f_result_ha7mag.initialize || (v => v);

_C_f_getter_6klgrg = _C_f_result_ha7mag.get || _C_f_getter_6klgrg;

_C_f_setter_i1db7g = _C_f_result_ha7mag.set || _C_f_setter_i1db7g;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);