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

const _C_f_get_symbol_2auaug = Symbol();

const _C_f_set_symbol_qmhd38 = Symbol();

let _C_f_getter_rcclp8;

let _C_f_setter_d4l9r8;

let _C_f_initializer_6o9n4;

let _C_f_initializer_sv23lo;

const _C_p_get_symbol_c92ks = Symbol();

const _C_p_set_symbol_jtrueg = Symbol();

let _C_p_getter_dkpouo;

let _C_p_setter_qbbil;

let _C_p_initializer_tkhdo;

let _C_p_initializer_ag8mlg;

class C {
  #_p_private_property_5hb398 = _C_p_initializer_ag8mlg.call(this, _C_p_initializer_tkhdo.call(this, 10));
  get #p() {
    return _C_p_getter_dkpouo.call(this);
  }
  set #p(v) {
    return _C_p_setter_qbbil.call(this, v);
  }
  static _C_p_getter_dkpouo() {
    return this.#_p_private_property_5hb398;
  }
  static _C_p_setter_qbbil(v) {
    this.#_p_private_property_5hb398 = v;
  }
  [_C_p_get_symbol_c92ks]() {
    return this.#p;
  }
  [_C_p_set_symbol_jtrueg](v) {
    this.#p = v;
  }
  #_f_private_property_6jm2pg = _C_f_initializer_sv23lo.call(this, _C_f_initializer_6o9n4.call(this, 20));
  get #f() {
    return _C_f_getter_rcclp8.call(this);
  }
  set #f(v) {
    return _C_f_setter_d4l9r8.call(this, v);
  }
  static _C_f_getter_rcclp8() {
    return this.#_f_private_property_6jm2pg;
  }
  static _C_f_setter_d4l9r8(v) {
    this.#_f_private_property_6jm2pg = v;
  }
  [_C_f_get_symbol_2auaug]() {
    return this.#f;
  }
  [_C_f_set_symbol_qmhd38](v) {
    this.#f = v;
  }
}

_C_p_getter_dkpouo = C._C_p_getter_dkpouo;

_C_p_setter_qbbil = C._C_p_setter_qbbil;

delete C._C_p_getter_dkpouo;

delete C._C_p_setter_qbbil;

const _C_p_result_hmhkvo = meta(1)({
  get: _C_p_getter_dkpouo,
  set: _C_p_setter_qbbil
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c92ks],
    set: C.prototype[_C_p_set_symbol_jtrueg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_ag8mlg = _C_p_result_hmhkvo.initialize || (v => v);

_C_p_getter_dkpouo = _C_p_result_hmhkvo.get || _C_p_getter_dkpouo;

_C_p_setter_qbbil = _C_p_result_hmhkvo.set || _C_p_setter_qbbil;

const _C_p_result_gp18v = meta(2)({
  get: _C_p_getter_dkpouo,
  set: _C_p_setter_qbbil
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c92ks],
    set: C.prototype[_C_p_set_symbol_jtrueg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_tkhdo = _C_p_result_gp18v.initialize || (v => v);

_C_p_getter_dkpouo = _C_p_result_gp18v.get || _C_p_getter_dkpouo;

_C_p_setter_qbbil = _C_p_result_gp18v.set || _C_p_setter_qbbil;

_C_f_getter_rcclp8 = C._C_f_getter_rcclp8;

_C_f_setter_d4l9r8 = C._C_f_setter_d4l9r8;

delete C._C_f_getter_rcclp8;

delete C._C_f_setter_d4l9r8;

const _C_f_result_fklnh8 = meta(3)({
  get: _C_f_getter_rcclp8,
  set: _C_f_setter_d4l9r8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_2auaug],
    set: C.prototype[_C_f_set_symbol_qmhd38]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#f")
}) || {};

_C_f_initializer_sv23lo = _C_f_result_fklnh8.initialize || (v => v);

_C_f_getter_rcclp8 = _C_f_result_fklnh8.get || _C_f_getter_rcclp8;

_C_f_setter_d4l9r8 = _C_f_result_fklnh8.set || _C_f_setter_d4l9r8;

const _C_f_result_klr0d = meta(3)({
  get: _C_f_getter_rcclp8,
  set: _C_f_setter_d4l9r8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_2auaug],
    set: C.prototype[_C_f_set_symbol_qmhd38]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#f")
}) || {};

_C_f_initializer_6o9n4 = _C_f_result_klr0d.initialize || (v => v);

_C_f_getter_rcclp8 = _C_f_result_klr0d.get || _C_f_getter_rcclp8;

_C_f_setter_d4l9r8 = _C_f_result_klr0d.set || _C_f_setter_d4l9r8;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 6);