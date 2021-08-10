function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
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

let _A_p_initializer_iqjllg;

class __A_dge198 {
  static #_p_private_property_aeb5r8 = 1;
  static get p() {
    return this.#_p_private_property_aeb5r8;
  }
  static set p(v) {
    this.#_p_private_property_aeb5r8 = v;
  }
}

const ___A_dge198_p_descriptor_4cjne8 = Object.getOwnPropertyDescriptor(__A_dge198, "p");

const ___A_dge198_p_result_ge5lbg = decorator({
  get: ___A_dge198_p_descriptor_4cjne8.get,
  set: ___A_dge198_p_descriptor_4cjne8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__A_dge198, "public", "p")
}) || {};

_A_p_initializer_iqjllg = ___A_dge198_p_result_ge5lbg.initialize || (v => v);

Object.defineProperty(__A_dge198, "p", {
  get: ___A_dge198_p_result_ge5lbg.get || ___A_dge198_p_descriptor_4cjne8.get,
  set: ___A_dge198_p_result_ge5lbg.set || ___A_dge198_p_descriptor_4cjne8.set
});

___A_dge198_p_descriptor_4cjne8.set.call(
  __A_dge198,
  _A_p_initializer_iqjllg(___A_dge198_p_descriptor_4cjne8.get.call(__A_dge198))
);

let A = __A_dge198;

Object.defineProperty(A, "name", {
  value: "A"
});