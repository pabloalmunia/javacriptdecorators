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

const _A_p_get_symbol_66bu5g = Symbol();

const _A_p_set_symbol_b9c0po = Symbol();

let _A_p_getter_15vhrg;

let _A_p_setter_7vpio8;

class A {
  static #_p_private_property_d0cbig = 1;
  static get #p() {
    return _A_p_getter_15vhrg.call(this);
  }
  static set #p(v) {
    return _A_p_setter_7vpio8.call(this, v);
  }
  static _A_p_getter_15vhrg() {
    return this.#_p_private_property_d0cbig;
  }
  static _A_p_setter_7vpio8(v) {
    this.#_p_private_property_d0cbig = v;
  }
  static [_A_p_get_symbol_66bu5g]() {
    return A.#p;
  }
  static [_A_p_set_symbol_b9c0po](v) {
    A.#p = v;
  }
}

const _A_p_initializer_h18img = {
  get: A._A_p_getter_15vhrg,
  set: A._A_p_setter_7vpio8
};

_A_p_getter_15vhrg = A._A_p_getter_15vhrg;

_A_p_setter_7vpio8 = A._A_p_setter_7vpio8;

delete A._A_p_getter_15vhrg;

delete A._A_p_setter_7vpio8;

const _A_p_result_8itou8 = decorator({
  get: _A_p_getter_15vhrg,
  set: _A_p_setter_7vpio8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_66bu5g],
    set: A[_A_p_set_symbol_b9c0po]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", undefined)
}) || {};

_A_p_initializer_h18img.set.call(
  A,
  (_A_p_result_8itou8.initialize || (v => v))(_A_p_initializer_h18img.get.call(A))
);

_A_p_getter_15vhrg = _A_p_result_8itou8.get || _A_p_getter_15vhrg;

_A_p_setter_7vpio8 = _A_p_result_8itou8.set || _A_p_setter_7vpio8;