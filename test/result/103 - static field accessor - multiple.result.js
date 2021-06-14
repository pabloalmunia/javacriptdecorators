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

let _C_p_initializer_kcjirg;

let _C_p_initializer_bid3oo;

class C {
  static #_p_private_property_v4hnj8 = 1;
  static get p() {
    return this.#_p_private_property_v4hnj8;
  }
  static set p(v) {
    this.#_p_private_property_v4hnj8 = v;
  }
}

const _C_p_descriptor_i15dug = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_0eqsm8 = decorator1({
  get: _C_p_descriptor_i15dug.get,
  set: _C_p_descriptor_i15dug.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_bid3oo = _C_p_result_0eqsm8.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_0eqsm8.get || _C_p_descriptor_i15dug.get,
  set: _C_p_result_0eqsm8.set || _C_p_descriptor_i15dug.set
});

_C_p_descriptor_i15dug.set.call(C, _C_p_initializer_bid3oo(_C_p_descriptor_i15dug.get.call(C)));

const _C_p_descriptor_fvvn78 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_8c1oc = decorator2({
  get: _C_p_descriptor_fvvn78.get,
  set: _C_p_descriptor_fvvn78.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_kcjirg = _C_p_result_8c1oc.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_8c1oc.get || _C_p_descriptor_fvvn78.get,
  set: _C_p_result_8c1oc.set || _C_p_descriptor_fvvn78.set
});

_C_p_descriptor_fvvn78.set.call(C, _C_p_initializer_kcjirg(_C_p_descriptor_fvvn78.get.call(C)));

console.assert(C.p === 6);