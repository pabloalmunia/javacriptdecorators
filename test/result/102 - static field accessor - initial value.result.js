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

let _C_p_initializer_c4qc5o;

class C {
  static #_p_private_property_4gr47 = 10;
  static get p() {
    return this.#_p_private_property_4gr47;
  }
  static set p(v) {
    this.#_p_private_property_4gr47 = v;
  }
}

const _C_p_descriptor_5gemh = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_d4ojeo = decorator({
  get: _C_p_descriptor_5gemh.get,
  set: _C_p_descriptor_5gemh.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_c4qc5o = _C_p_result_d4ojeo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_d4ojeo.get || _C_p_descriptor_5gemh.get,
  set: _C_p_result_d4ojeo.set || _C_p_descriptor_5gemh.set
});

_C_p_descriptor_5gemh.set.call(C, _C_p_initializer_c4qc5o(_C_p_descriptor_5gemh.get.call(C)));

console.assert(C.p === 20);