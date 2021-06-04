function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
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

const _A_p_get_symbol_b1ljp8 = Symbol();

const _A_p_set_symbol_1lpao8 = Symbol();

let _A_p_getter_opsnd;

let _A_p_setter_ien23;

let _A_p_initializer_p66cdg;

class A {
  #_p_private_property_nv76q = _A_p_initializer_p66cdg.call(this, 1);
  get #p() {
    return _A_p_getter_opsnd.call(this);
  }
  set #p(v) {
    return _A_p_setter_ien23.call(this, v);
  }
  static _A_p_getter_opsnd() {
    return this.#_p_private_property_nv76q;
  }
  static _A_p_setter_ien23(v) {
    this.#_p_private_property_nv76q = v;
  }
  [_A_p_get_symbol_b1ljp8]() {
    return this.#p;
  }
  [_A_p_set_symbol_1lpao8](v) {
    this.#p = v;
  }
}

_A_p_getter_opsnd = A._A_p_getter_opsnd;

_A_p_setter_ien23 = A._A_p_setter_ien23;

delete A._A_p_getter_opsnd;

delete A._A_p_setter_ien23;

const _A_p_result_bofvlo = decorator({
  get: _A_p_getter_opsnd,
  set: _A_p_setter_ien23
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A.prototype[_A_p_get_symbol_b1ljp8],
    set: A.prototype[_A_p_set_symbol_1lpao8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(A.prototype, "private", undefined)
}) || {};

_A_p_initializer_p66cdg = _A_p_result_bofvlo.initialize || (v => v);

_A_p_getter_opsnd = _A_p_result_bofvlo.get || _A_p_getter_opsnd;

_A_p_setter_ien23 = _A_p_result_bofvlo.set || _A_p_setter_ien23;