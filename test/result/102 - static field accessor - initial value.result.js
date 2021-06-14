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

let _C_p_initializer_almdqo;

class C {
  static #_p_private_property_bqs4ko = 10;
  static get p() {
    return this.#_p_private_property_bqs4ko;
  }
  static set p(v) {
    this.#_p_private_property_bqs4ko = v;
  }
}

const _C_p_descriptor_blldjo = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_v1din8 = decorator({
  get: _C_p_descriptor_blldjo.get,
  set: _C_p_descriptor_blldjo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_almdqo = _C_p_result_v1din8.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_v1din8.get || _C_p_descriptor_blldjo.get,
  set: _C_p_result_v1din8.set || _C_p_descriptor_blldjo.set
});

_C_p_descriptor_blldjo.set.call(C, _C_p_initializer_almdqo(_C_p_descriptor_blldjo.get.call(C)));

console.assert(C.p === 20);