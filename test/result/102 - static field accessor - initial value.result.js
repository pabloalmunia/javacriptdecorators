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

let _C_p_initializer_5u6aj;

class C {
  static #_p_private_property_47f6po = 10;
  static get p() {
    return this.#_p_private_property_47f6po;
  }
  static set p(v) {
    this.#_p_private_property_47f6po = v;
  }
}

const _C_p_descriptor_aaldt8 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_m16ipo = decorator({
  get: _C_p_descriptor_aaldt8.get,
  set: _C_p_descriptor_aaldt8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_5u6aj = _C_p_result_m16ipo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_m16ipo.get || _C_p_descriptor_aaldt8.get,
  set: _C_p_result_m16ipo.set || _C_p_descriptor_aaldt8.set
});

_C_p_descriptor_aaldt8.set.call(C, _C_p_initializer_5u6aj(_C_p_descriptor_aaldt8.get.call(C)));

console.assert(C.p === 20);