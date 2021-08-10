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

let _C_p_initializer_i7qkto;

class __C_p1rqq8 {
  static #_p_private_property_nkjr5 = 10;
  static get p() {
    return this.#_p_private_property_nkjr5;
  }
  static set p(v) {
    this.#_p_private_property_nkjr5 = v;
  }
}

const ___C_p1rqq8_p_descriptor_n4fspg = Object.getOwnPropertyDescriptor(__C_p1rqq8, "p");

const ___C_p1rqq8_p_result_kdb228 = decorator({
  get: ___C_p1rqq8_p_descriptor_n4fspg.get,
  set: ___C_p1rqq8_p_descriptor_n4fspg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_p1rqq8, "public", "p")
}) || {};

_C_p_initializer_i7qkto = ___C_p1rqq8_p_result_kdb228.initialize || (v => v);

Object.defineProperty(__C_p1rqq8, "p", {
  get: ___C_p1rqq8_p_result_kdb228.get || ___C_p1rqq8_p_descriptor_n4fspg.get,
  set: ___C_p1rqq8_p_result_kdb228.set || ___C_p1rqq8_p_descriptor_n4fspg.set
});

___C_p1rqq8_p_descriptor_n4fspg.set.call(
  __C_p1rqq8,
  _C_p_initializer_i7qkto(___C_p1rqq8_p_descriptor_n4fspg.get.call(__C_p1rqq8))
);

let C = __C_p1rqq8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.p === 20);