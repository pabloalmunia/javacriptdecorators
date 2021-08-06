function decorator(context) {
  return {
    initialize(v) {
      return v * 2;
    }
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

const _C_p_get_symbol_tt49fg = Symbol();

const _C_p_set_symbol_2b4ao8 = Symbol();

let _C_p_getter_q2r0rg;

let _C_p_setter_n9riv;

let _C_p_initializer_tvhjl8;

class C {
  #_p_private_property_jm4eno = _C_p_initializer_tvhjl8.call(this, 10);
  get #p() {
    return _C_p_getter_q2r0rg.call(this);
  }
  set #p(v) {
    return _C_p_setter_n9riv.call(this, v);
  }
  static _C_p_getter_q2r0rg() {
    return this.#_p_private_property_jm4eno;
  }
  static _C_p_setter_n9riv(v) {
    this.#_p_private_property_jm4eno = v;
  }
  [_C_p_get_symbol_tt49fg]() {
    return this.#p;
  }
  [_C_p_set_symbol_2b4ao8](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_q2r0rg = C._C_p_getter_q2r0rg;

_C_p_setter_n9riv = C._C_p_setter_n9riv;

delete C._C_p_getter_q2r0rg;

delete C._C_p_setter_n9riv;

const _C_p_result_oauuj8 = decorator({
  get: _C_p_getter_q2r0rg,
  set: _C_p_setter_n9riv
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_tt49fg],
    set: C.prototype[_C_p_set_symbol_2b4ao8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_tvhjl8 = _C_p_result_oauuj8.initialize || (v => v);

_C_p_getter_q2r0rg = _C_p_result_oauuj8.get || _C_p_getter_q2r0rg;

_C_p_setter_n9riv = _C_p_result_oauuj8.set || _C_p_setter_n9riv;

const c = new C();

console.assert(c.check === 20);