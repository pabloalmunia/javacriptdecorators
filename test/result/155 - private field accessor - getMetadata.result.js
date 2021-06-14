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

const _C_f_get_symbol_sr00j8 = Symbol();

const _C_f_set_symbol_hc7nfo = Symbol();

let _C_f_getter_epqq78;

let _C_f_setter_lnu5f8;

let _C_f_initializer_64ef3;

let _C_f_initializer_591bs8;

const _C_p_get_symbol_i51dd = Symbol();

const _C_p_set_symbol_70k9t8 = Symbol();

let _C_p_getter_djn7rg;

let _C_p_setter_pbnh18;

let _C_p_initializer_1qr7no;

let _C_p_initializer_hjnk9g;

class C {
  #_p_private_property_464eno = _C_p_initializer_hjnk9g.call(this, _C_p_initializer_1qr7no.call(this, 10));
  get #p() {
    return _C_p_getter_djn7rg.call(this);
  }
  set #p(v) {
    return _C_p_setter_pbnh18.call(this, v);
  }
  static _C_p_getter_djn7rg() {
    return this.#_p_private_property_464eno;
  }
  static _C_p_setter_pbnh18(v) {
    this.#_p_private_property_464eno = v;
  }
  [_C_p_get_symbol_i51dd]() {
    return this.#p;
  }
  [_C_p_set_symbol_70k9t8](v) {
    this.#p = v;
  }
  #_f_private_property_jalij = _C_f_initializer_591bs8.call(this, _C_f_initializer_64ef3.call(this, 20));
  get #f() {
    return _C_f_getter_epqq78.call(this);
  }
  set #f(v) {
    return _C_f_setter_lnu5f8.call(this, v);
  }
  static _C_f_getter_epqq78() {
    return this.#_f_private_property_jalij;
  }
  static _C_f_setter_lnu5f8(v) {
    this.#_f_private_property_jalij = v;
  }
  [_C_f_get_symbol_sr00j8]() {
    return this.#f;
  }
  [_C_f_set_symbol_hc7nfo](v) {
    this.#f = v;
  }
}

_C_p_getter_djn7rg = C._C_p_getter_djn7rg;

_C_p_setter_pbnh18 = C._C_p_setter_pbnh18;

delete C._C_p_getter_djn7rg;

delete C._C_p_setter_pbnh18;

const _C_p_result_00dndg = meta(1)({
  get: _C_p_getter_djn7rg,
  set: _C_p_setter_pbnh18
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_i51dd],
    set: C.prototype[_C_p_set_symbol_70k9t8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_hjnk9g = _C_p_result_00dndg.initialize || (v => v);

_C_p_getter_djn7rg = _C_p_result_00dndg.get || _C_p_getter_djn7rg;

_C_p_setter_pbnh18 = _C_p_result_00dndg.set || _C_p_setter_pbnh18;

const _C_p_result_9ahru8 = meta(2)({
  get: _C_p_getter_djn7rg,
  set: _C_p_setter_pbnh18
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_i51dd],
    set: C.prototype[_C_p_set_symbol_70k9t8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_1qr7no = _C_p_result_9ahru8.initialize || (v => v);

_C_p_getter_djn7rg = _C_p_result_9ahru8.get || _C_p_getter_djn7rg;

_C_p_setter_pbnh18 = _C_p_result_9ahru8.set || _C_p_setter_pbnh18;

_C_f_getter_epqq78 = C._C_f_getter_epqq78;

_C_f_setter_lnu5f8 = C._C_f_setter_lnu5f8;

delete C._C_f_getter_epqq78;

delete C._C_f_setter_lnu5f8;

const _C_f_result_7d4va8 = meta(3)({
  get: _C_f_getter_epqq78,
  set: _C_f_setter_lnu5f8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_sr00j8],
    set: C.prototype[_C_f_set_symbol_hc7nfo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_591bs8 = _C_f_result_7d4va8.initialize || (v => v);

_C_f_getter_epqq78 = _C_f_result_7d4va8.get || _C_f_getter_epqq78;

_C_f_setter_lnu5f8 = _C_f_result_7d4va8.set || _C_f_setter_lnu5f8;

const _C_f_result_fp0268 = meta(3)({
  get: _C_f_getter_epqq78,
  set: _C_f_setter_lnu5f8
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_sr00j8],
    set: C.prototype[_C_f_set_symbol_hc7nfo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_64ef3 = _C_f_result_fp0268.initialize || (v => v);

_C_f_getter_epqq78 = _C_f_result_fp0268.get || _C_f_getter_epqq78;

_C_f_setter_lnu5f8 = _C_f_result_fp0268.set || _C_f_setter_lnu5f8;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);