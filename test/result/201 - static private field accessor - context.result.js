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

const _A_p_get_symbol_6av81g = Symbol();

const _A_p_set_symbol_v4ir08 = Symbol();

let _A_p_getter_6799d8;

let _A_p_setter_60lbco;

class A {
  static #_p_private_property_9u13io = 1;
  static get #p() {
    return _A_p_getter_6799d8.call(this);
  }
  static set #p(v) {
    return _A_p_setter_60lbco.call(this, v);
  }
  static _A_p_getter_6799d8() {
    return this.#_p_private_property_9u13io;
  }
  static _A_p_setter_60lbco(v) {
    this.#_p_private_property_9u13io = v;
  }
  static [_A_p_get_symbol_6av81g]() {
    return A.#p;
  }
  static [_A_p_set_symbol_v4ir08](v) {
    A.#p = v;
  }
}

const _A_p_initializer_iima1 = {
  get: A._A_p_getter_6799d8,
  set: A._A_p_setter_60lbco
};

_A_p_getter_6799d8 = A._A_p_getter_6799d8;

_A_p_setter_60lbco = A._A_p_setter_60lbco;

delete A._A_p_getter_6799d8;

delete A._A_p_setter_60lbco;

const _A_p_result_6b4frg = decorator({
  get: _A_p_getter_6799d8,
  set: _A_p_setter_60lbco
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_6av81g],
    set: A[_A_p_set_symbol_v4ir08]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", undefined)
}) || {};

_A_p_initializer_iima1.set.call(
  A,
  (_A_p_result_6b4frg.initialize || (v => v))(_A_p_initializer_iima1.get.call(A))
);

_A_p_getter_6799d8 = _A_p_result_6b4frg.get || _A_p_getter_6799d8;

_A_p_setter_60lbco = _A_p_result_6b4frg.set || _A_p_setter_60lbco;