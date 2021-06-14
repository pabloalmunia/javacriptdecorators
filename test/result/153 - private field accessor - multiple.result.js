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

const _C_p_get_symbol_bfmgu8 = Symbol();

const _C_p_set_symbol_kpd4ko = Symbol();

let _C_p_getter_6jkn9;

let _C_p_setter_a6ald;

let _C_p_initializer_7a2vp;

let _C_p_initializer_7mjn6;

class C {
  #_p_private_property_u9tp48 = _C_p_initializer_7mjn6.call(this, _C_p_initializer_7a2vp.call(this, 1));
  get #p() {
    return _C_p_getter_6jkn9.call(this);
  }
  set #p(v) {
    return _C_p_setter_a6ald.call(this, v);
  }
  static _C_p_getter_6jkn9() {
    return this.#_p_private_property_u9tp48;
  }
  static _C_p_setter_a6ald(v) {
    this.#_p_private_property_u9tp48 = v;
  }
  [_C_p_get_symbol_bfmgu8]() {
    return this.#p;
  }
  [_C_p_set_symbol_kpd4ko](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_6jkn9 = C._C_p_getter_6jkn9;

_C_p_setter_a6ald = C._C_p_setter_a6ald;

delete C._C_p_getter_6jkn9;

delete C._C_p_setter_a6ald;

const _C_p_result_bplglg = decorator1({
  get: _C_p_getter_6jkn9,
  set: _C_p_setter_a6ald
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bfmgu8],
    set: C.prototype[_C_p_set_symbol_kpd4ko]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_7mjn6 = _C_p_result_bplglg.initialize || (v => v);

_C_p_getter_6jkn9 = _C_p_result_bplglg.get || _C_p_getter_6jkn9;

_C_p_setter_a6ald = _C_p_result_bplglg.set || _C_p_setter_a6ald;

const _C_p_result_88lo3o = decorator2({
  get: _C_p_getter_6jkn9,
  set: _C_p_setter_a6ald
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bfmgu8],
    set: C.prototype[_C_p_set_symbol_kpd4ko]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_7a2vp = _C_p_result_88lo3o.initialize || (v => v);

_C_p_getter_6jkn9 = _C_p_result_88lo3o.get || _C_p_getter_6jkn9;

_C_p_setter_a6ald = _C_p_result_88lo3o.set || _C_p_setter_a6ald;

const c = new C();

console.assert(c.check === 6);