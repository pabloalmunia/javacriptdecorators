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

let _C_p_initializer_nmjrfg;

class C {
  #_p_private_property_vhqd6o = _C_p_initializer_nmjrfg.call(this, 10);
  get p() {
    return this.#_p_private_property_vhqd6o;
  }
  set p(v) {
    this.#_p_private_property_vhqd6o = v;
  }
}

const _C_p_descriptor_a2dim = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_fhjqr = decorator({
  get: _C_p_descriptor_a2dim.get,
  set: _C_p_descriptor_a2dim.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_nmjrfg = _C_p_result_fhjqr.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_fhjqr.get || _C_p_descriptor_a2dim.get,
  set: _C_p_result_fhjqr.set || _C_p_descriptor_a2dim.set
});

const c = new C();

console.assert(c.p === 20);