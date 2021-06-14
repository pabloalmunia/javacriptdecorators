function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
  console.assert(context.isStatic);
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

const _A_p_get_symbol_j00is8 = Symbol();

const _A_p_set_symbol_42r5d = Symbol();

let _A_p_getter_dfkulg;

let _A_p_setter_8uh7eg;

class A {
  static #_p_private_property_7qca4o = 1;
  static get #p() {
    return _A_p_getter_dfkulg.call(this);
  }
  static set #p(v) {
    return _A_p_setter_8uh7eg.call(this, v);
  }
  static _A_p_getter_dfkulg() {
    return this.#_p_private_property_7qca4o;
  }
  static _A_p_setter_8uh7eg(v) {
    this.#_p_private_property_7qca4o = v;
  }
  static [_A_p_get_symbol_j00is8]() {
    return A.#p;
  }
  static [_A_p_set_symbol_42r5d](v) {
    A.#p = v;
  }
}

const _A_p_initializer_kodfco = {
  get: A._A_p_getter_dfkulg,
  set: A._A_p_setter_8uh7eg
};

_A_p_getter_dfkulg = A._A_p_getter_dfkulg;

_A_p_setter_8uh7eg = A._A_p_setter_8uh7eg;

delete A._A_p_getter_dfkulg;

delete A._A_p_setter_8uh7eg;

const _A_p_result_knokco = decorator({
  get: _A_p_getter_dfkulg,
  set: _A_p_setter_8uh7eg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_j00is8],
    set: A[_A_p_set_symbol_42r5d]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", undefined)
}) || {};

_A_p_initializer_kodfco.set.call(
  A,
  (_A_p_result_knokco.initialize || (v => v))(_A_p_initializer_kodfco.get.call(A))
);

_A_p_getter_dfkulg = _A_p_result_knokco.get || _A_p_getter_dfkulg;

_A_p_setter_8uh7eg = _A_p_result_knokco.set || _A_p_setter_8uh7eg;