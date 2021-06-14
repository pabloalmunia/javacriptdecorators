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

const _A_p_get_symbol_iqs19 = Symbol();

const _A_p_set_symbol_nqiqp8 = Symbol();

let _A_p_getter_kqd218;

let _A_p_setter_98o5fo;

let _A_p_initializer_5rvuho;

class A {
  #_p_private_property_jnullg = _A_p_initializer_5rvuho.call(this, 1);
  get #p() {
    return _A_p_getter_kqd218.call(this);
  }
  set #p(v) {
    return _A_p_setter_98o5fo.call(this, v);
  }
  static _A_p_getter_kqd218() {
    return this.#_p_private_property_jnullg;
  }
  static _A_p_setter_98o5fo(v) {
    this.#_p_private_property_jnullg = v;
  }
  [_A_p_get_symbol_iqs19]() {
    return this.#p;
  }
  [_A_p_set_symbol_nqiqp8](v) {
    this.#p = v;
  }
}

_A_p_getter_kqd218 = A._A_p_getter_kqd218;

_A_p_setter_98o5fo = A._A_p_setter_98o5fo;

delete A._A_p_getter_kqd218;

delete A._A_p_setter_98o5fo;

const _A_p_result_kgik7o = decorator({
  get: _A_p_getter_kqd218,
  set: _A_p_setter_98o5fo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A.prototype[_A_p_get_symbol_iqs19],
    set: A.prototype[_A_p_set_symbol_nqiqp8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(A.prototype, "private", undefined)
}) || {};

_A_p_initializer_5rvuho = _A_p_result_kgik7o.initialize || (v => v);

_A_p_getter_kqd218 = _A_p_result_kgik7o.get || _A_p_getter_kqd218;

_A_p_setter_98o5fo = _A_p_result_kgik7o.set || _A_p_setter_98o5fo;