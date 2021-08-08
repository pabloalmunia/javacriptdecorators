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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || Object.prototype);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : kind === "private" ? __metadataPrivate.has(base[Symbol.metadata][key]) ? __metadataPrivate.get(base[Symbol.metadata][key])[property] : undefined : base[Symbol.metadata][key][kind];
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
            return Object.values(__metadataPrivate.get(base[Symbol.metadata][key]) || {}).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], {});
        }
        __metadataPrivate.get(base[Symbol.metadata][key])[property] = value;
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _A_p_get_symbol_1rbu2 = Symbol();

const _A_p_set_symbol_96c17g = Symbol();

let _A_p_getter_nlegd8;

let _A_p_setter_lb1tg;

class A {
  static #_p_private_property_akknj = 1;
  static get #p() {
    return _A_p_getter_nlegd8.call(this);
  }
  static set #p(v) {
    return _A_p_setter_lb1tg.call(this, v);
  }
  static _A_p_getter_nlegd8() {
    return this.#_p_private_property_akknj;
  }
  static _A_p_setter_lb1tg(v) {
    this.#_p_private_property_akknj = v;
  }
  static [_A_p_get_symbol_1rbu2]() {
    return A.#p;
  }
  static [_A_p_set_symbol_96c17g](v) {
    A.#p = v;
  }
}

const _A_p_initializer_16ncp8 = {
  get: A._A_p_getter_nlegd8,
  set: A._A_p_setter_lb1tg
};

_A_p_getter_nlegd8 = A._A_p_getter_nlegd8;

_A_p_setter_lb1tg = A._A_p_setter_lb1tg;

delete A._A_p_getter_nlegd8;

delete A._A_p_setter_lb1tg;

const _A_p_result_5lds2o = decorator({
  get: _A_p_getter_nlegd8,
  set: _A_p_setter_lb1tg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A[_A_p_get_symbol_1rbu2],
    set: A[_A_p_set_symbol_96c17g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(A, "private", "#p")
}) || {};

_A_p_initializer_16ncp8.set.call(
  A,
  (_A_p_result_5lds2o.initialize || (v => v))(_A_p_initializer_16ncp8.get.call(A))
);

_A_p_getter_nlegd8 = _A_p_result_5lds2o.get || _A_p_getter_nlegd8;

_A_p_setter_lb1tg = _A_p_result_5lds2o.set || _A_p_setter_lb1tg;