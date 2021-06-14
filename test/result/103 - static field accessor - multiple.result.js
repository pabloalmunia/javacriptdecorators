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

let _C_p_initializer_74ob88;

let _C_p_initializer_8rs6vg;

class C {
  static #_p_private_property_f2g7bo = 1;
  static get p() {
    return this.#_p_private_property_f2g7bo;
  }
  static set p(v) {
    this.#_p_private_property_f2g7bo = v;
  }
}

const _C_p_descriptor_78fa38 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_f8pmjg = decorator1({
  get: _C_p_descriptor_78fa38.get,
  set: _C_p_descriptor_78fa38.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_8rs6vg = _C_p_result_f8pmjg.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_f8pmjg.get || _C_p_descriptor_78fa38.get,
  set: _C_p_result_f8pmjg.set || _C_p_descriptor_78fa38.set
});

_C_p_descriptor_78fa38.set.call(C, _C_p_initializer_8rs6vg(_C_p_descriptor_78fa38.get.call(C)));

const _C_p_descriptor_uvq958 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_51bm78 = decorator2({
  get: _C_p_descriptor_uvq958.get,
  set: _C_p_descriptor_uvq958.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_74ob88 = _C_p_result_51bm78.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_51bm78.get || _C_p_descriptor_uvq958.get,
  set: _C_p_result_51bm78.set || _C_p_descriptor_uvq958.set
});

_C_p_descriptor_uvq958.set.call(C, _C_p_initializer_74ob88(_C_p_descriptor_uvq958.get.call(C)));

console.assert(C.p === 6);