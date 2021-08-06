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

const _A_p_get_symbol_hmo3kg = Symbol();

const _A_p_set_symbol_42osk8 = Symbol();

let _A_p_getter_5u038o;

let _A_p_setter_endq3o;

class A {
  static #_p_private_property_n4eat = 1;
  static get #p() {
    return _A_p_getter_5u038o.call(this);
  }
  static set #p(v) {
    return _A_p_setter_endq3o.call(this, v);
  }
  static _A_p_getter_5u038o() {
    return this.#_p_private_property_n4eat;
  }
  static _A_p_setter_endq3o(v) {
    this.#_p_private_property_n4eat = v;
  }
  static [_A_p_get_symbol_hmo3kg]() {
    return A.#p;
  }
  static [_A_p_set_symbol_42osk8](v) {
    A.#p = v;
  }
}

const _A_p_initializer_2fuv = {
  get: A._A_p_getter_5u038o,
  set: A._A_p_setter_endq3o
};

_A_p_getter_5u038o = A._A_p_getter_5u038o;

_A_p_setter_endq3o = A._A_p_setter_endq3o;

delete A._A_p_getter_5u038o;

delete A._A_p_setter_endq3o;

const _A_p_result_a1hdv = decorator({
  get: _A_p_getter_5u038o,
  set: _A_p_setter_endq3o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_hmo3kg],
    set: A[_A_p_set_symbol_42osk8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", undefined)
}) || {};

_A_p_initializer_2fuv.set.call(
  A,
  (_A_p_result_a1hdv.initialize || (v => v))(_A_p_initializer_2fuv.get.call(A))
);

_A_p_getter_5u038o = _A_p_result_a1hdv.get || _A_p_getter_5u038o;

_A_p_setter_endq3o = _A_p_result_a1hdv.set || _A_p_setter_endq3o;