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

let _C_p_initializer_gssj3;

let _C_p_initializer_lc89c;

class __C_h7ovfo {
  static #_p_private_property_vok1eo = 1;
  static get p() {
    return this.#_p_private_property_vok1eo;
  }
  static set p(v) {
    this.#_p_private_property_vok1eo = v;
  }
}

const ___C_h7ovfo_p_descriptor_2k2fn = Object.getOwnPropertyDescriptor(__C_h7ovfo, "p");

const ___C_h7ovfo_p_result_4tt7co = decorator1({
  get: ___C_h7ovfo_p_descriptor_2k2fn.get,
  set: ___C_h7ovfo_p_descriptor_2k2fn.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h7ovfo, "public", "p")
}) || {};

_C_p_initializer_lc89c = ___C_h7ovfo_p_result_4tt7co.initialize || (v => v);

Object.defineProperty(__C_h7ovfo, "p", {
  get: ___C_h7ovfo_p_result_4tt7co.get || ___C_h7ovfo_p_descriptor_2k2fn.get,
  set: ___C_h7ovfo_p_result_4tt7co.set || ___C_h7ovfo_p_descriptor_2k2fn.set
});

___C_h7ovfo_p_descriptor_2k2fn.set.call(
  __C_h7ovfo,
  _C_p_initializer_lc89c(___C_h7ovfo_p_descriptor_2k2fn.get.call(__C_h7ovfo))
);

const ___C_h7ovfo_p_descriptor_jc7f1 = Object.getOwnPropertyDescriptor(__C_h7ovfo, "p");

const ___C_h7ovfo_p_result_nkub08 = decorator2({
  get: ___C_h7ovfo_p_descriptor_jc7f1.get,
  set: ___C_h7ovfo_p_descriptor_jc7f1.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h7ovfo, "public", "p")
}) || {};

_C_p_initializer_gssj3 = ___C_h7ovfo_p_result_nkub08.initialize || (v => v);

Object.defineProperty(__C_h7ovfo, "p", {
  get: ___C_h7ovfo_p_result_nkub08.get || ___C_h7ovfo_p_descriptor_jc7f1.get,
  set: ___C_h7ovfo_p_result_nkub08.set || ___C_h7ovfo_p_descriptor_jc7f1.set
});

___C_h7ovfo_p_descriptor_jc7f1.set.call(
  __C_h7ovfo,
  _C_p_initializer_gssj3(___C_h7ovfo_p_descriptor_jc7f1.get.call(__C_h7ovfo))
);

let C = __C_h7ovfo;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.p === 6);