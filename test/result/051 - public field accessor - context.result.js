function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
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

let _A_p_initializer_7om37;

class __A_dtiik {
  #_p_private_property_7417gg = _A_p_initializer_7om37.call(this, 1);
  get p() {
    return this.#_p_private_property_7417gg;
  }
  set p(v) {
    this.#_p_private_property_7417gg = v;
  }
}

const ___A_dtiik_p_descriptor_ppu8fo = Object.getOwnPropertyDescriptor(__A_dtiik.prototype, "p");

const ___A_dtiik_p_result_ncsdi = decorator({
  get: ___A_dtiik_p_descriptor_ppu8fo.get,
  set: ___A_dtiik_p_descriptor_ppu8fo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__A_dtiik.prototype, "public", "p")
}) || {};

_A_p_initializer_7om37 = ___A_dtiik_p_result_ncsdi.initialize || (v => v);

Object.defineProperty(__A_dtiik.prototype, "p", {
  get: ___A_dtiik_p_result_ncsdi.get || ___A_dtiik_p_descriptor_ppu8fo.get,
  set: ___A_dtiik_p_result_ncsdi.set || ___A_dtiik_p_descriptor_ppu8fo.set
});

let A = __A_dtiik;

Object.defineProperty(A, "name", {
  value: "A"
});