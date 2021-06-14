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

const _A_p_get_symbol_0f4h78 = Symbol();

const _A_p_set_symbol_r5hq6o = Symbol();

let _A_p_getter_8t8iu;

let _A_p_setter_u2sb88;

let _A_p_initializer_jk0t5o;

class A {
  #_p_private_property_gi9558 = _A_p_initializer_jk0t5o.call(this, 1);
  get #p() {
    return _A_p_getter_8t8iu.call(this);
  }
  set #p(v) {
    return _A_p_setter_u2sb88.call(this, v);
  }
  static _A_p_getter_8t8iu() {
    return this.#_p_private_property_gi9558;
  }
  static _A_p_setter_u2sb88(v) {
    this.#_p_private_property_gi9558 = v;
  }
  [_A_p_get_symbol_0f4h78]() {
    return this.#p;
  }
  [_A_p_set_symbol_r5hq6o](v) {
    this.#p = v;
  }
}

_A_p_getter_8t8iu = A._A_p_getter_8t8iu;

_A_p_setter_u2sb88 = A._A_p_setter_u2sb88;

delete A._A_p_getter_8t8iu;

delete A._A_p_setter_u2sb88;

const _A_p_result_5g5fcg = decorator({
  get: _A_p_getter_8t8iu,
  set: _A_p_setter_u2sb88
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A.prototype[_A_p_get_symbol_0f4h78],
    set: A.prototype[_A_p_set_symbol_r5hq6o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(A.prototype, "private", undefined)
}) || {};

_A_p_initializer_jk0t5o = _A_p_result_5g5fcg.initialize || (v => v);

_A_p_getter_8t8iu = _A_p_result_5g5fcg.get || _A_p_getter_8t8iu;

_A_p_setter_u2sb88 = _A_p_result_5g5fcg.set || _A_p_setter_u2sb88;