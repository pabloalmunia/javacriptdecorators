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

const _C_f_get_symbol_n3i4n8 = Symbol();

const _C_f_set_symbol_f79ku = Symbol();

let _C_f_getter_jc22oo;

let _C_f_setter_hksl78;

const _C_p_get_symbol_h6g3s = Symbol();

const _C_p_set_symbol_j3i33 = Symbol();

let _C_p_getter_0qga9g;

let _C_p_setter_upj76g;

class C {
  static #_p_private_property_f7jkko = 10;
  static get #p() {
    return _C_p_getter_0qga9g.call(this);
  }
  static set #p(v) {
    return _C_p_setter_upj76g.call(this, v);
  }
  static _C_p_getter_0qga9g() {
    return this.#_p_private_property_f7jkko;
  }
  static _C_p_setter_upj76g(v) {
    this.#_p_private_property_f7jkko = v;
  }
  static [_C_p_get_symbol_h6g3s]() {
    return C.#p;
  }
  static [_C_p_set_symbol_j3i33](v) {
    C.#p = v;
  }
  static #_f_private_property_j5hev = 20;
  static get #f() {
    return _C_f_getter_jc22oo.call(this);
  }
  static set #f(v) {
    return _C_f_setter_hksl78.call(this, v);
  }
  static _C_f_getter_jc22oo() {
    return this.#_f_private_property_j5hev;
  }
  static _C_f_setter_hksl78(v) {
    this.#_f_private_property_j5hev = v;
  }
  static [_C_f_get_symbol_n3i4n8]() {
    return C.#f;
  }
  static [_C_f_set_symbol_f79ku](v) {
    C.#f = v;
  }
}

const _C_p_initializer_akh4h = {
  get: C._C_p_getter_0qga9g,
  set: C._C_p_setter_upj76g
};

_C_p_getter_0qga9g = C._C_p_getter_0qga9g;

_C_p_setter_upj76g = C._C_p_setter_upj76g;

delete C._C_p_getter_0qga9g;

delete C._C_p_setter_upj76g;

const _C_p_result_k2bpm8 = meta(1)({
  get: _C_p_getter_0qga9g,
  set: _C_p_setter_upj76g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_h6g3s],
    set: C[_C_p_set_symbol_j3i33]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_akh4h.set.call(
  C,
  (_C_p_result_k2bpm8.initialize || (v => v))(_C_p_initializer_akh4h.get.call(C))
);

_C_p_getter_0qga9g = _C_p_result_k2bpm8.get || _C_p_getter_0qga9g;

_C_p_setter_upj76g = _C_p_result_k2bpm8.set || _C_p_setter_upj76g;

const _C_p_result_aq0q6o = meta(2)({
  get: _C_p_getter_0qga9g,
  set: _C_p_setter_upj76g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_h6g3s],
    set: C[_C_p_set_symbol_j3i33]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_akh4h.set.call(
  C,
  (_C_p_result_aq0q6o.initialize || (v => v))(_C_p_initializer_akh4h.get.call(C))
);

_C_p_getter_0qga9g = _C_p_result_aq0q6o.get || _C_p_getter_0qga9g;

_C_p_setter_upj76g = _C_p_result_aq0q6o.set || _C_p_setter_upj76g;

const _C_f_initializer_326c3g = {
  get: C._C_f_getter_jc22oo,
  set: C._C_f_setter_hksl78
};

_C_f_getter_jc22oo = C._C_f_getter_jc22oo;

_C_f_setter_hksl78 = C._C_f_setter_hksl78;

delete C._C_f_getter_jc22oo;

delete C._C_f_setter_hksl78;

const _C_f_result_1lldj = meta(3)({
  get: _C_f_getter_jc22oo,
  set: _C_f_setter_hksl78
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_n3i4n8],
    set: C[_C_f_set_symbol_f79ku]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_326c3g.set.call(
  C,
  (_C_f_result_1lldj.initialize || (v => v))(_C_f_initializer_326c3g.get.call(C))
);

_C_f_getter_jc22oo = _C_f_result_1lldj.get || _C_f_getter_jc22oo;

_C_f_setter_hksl78 = _C_f_result_1lldj.set || _C_f_setter_hksl78;

const _C_f_result_mtn65o = meta(3)({
  get: _C_f_getter_jc22oo,
  set: _C_f_setter_hksl78
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C[_C_f_get_symbol_n3i4n8],
    set: C[_C_f_set_symbol_f79ku]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_f_initializer_326c3g.set.call(
  C,
  (_C_f_result_mtn65o.initialize || (v => v))(_C_f_initializer_326c3g.get.call(C))
);

_C_f_getter_jc22oo = _C_f_result_mtn65o.get || _C_f_getter_jc22oo;

_C_f_setter_hksl78 = _C_f_result_mtn65o.set || _C_f_setter_hksl78;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 9);