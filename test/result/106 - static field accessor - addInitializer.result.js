function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
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

let _C_p_initializer_ahki3o;

const _C_static_initializers_malvr8 = [];

class __C_41l1n {
  static #_p_private_property_29dkbg = 1;
  static get p() {
    return this.#_p_private_property_29dkbg;
  }
  static set p(v) {
    this.#_p_private_property_29dkbg = v;
  }
}

const ___C_41l1n_p_descriptor_qh4bdo = Object.getOwnPropertyDescriptor(__C_41l1n, "p");

const ___C_41l1n_p_result_6rrflg = decorator({
  get: ___C_41l1n_p_descriptor_qh4bdo.get,
  set: ___C_41l1n_p_descriptor_qh4bdo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_41l1n, "public", "p"),
  addInitializer: initializer => _C_static_initializers_malvr8.push(initializer)
}) || {};

_C_p_initializer_ahki3o = ___C_41l1n_p_result_6rrflg.initialize || (v => v);

Object.defineProperty(__C_41l1n, "p", {
  get: ___C_41l1n_p_result_6rrflg.get || ___C_41l1n_p_descriptor_qh4bdo.get,
  set: ___C_41l1n_p_result_6rrflg.set || ___C_41l1n_p_descriptor_qh4bdo.set
});

___C_41l1n_p_descriptor_qh4bdo.set.call(
  __C_41l1n,
  _C_p_initializer_ahki3o(___C_41l1n_p_descriptor_qh4bdo.get.call(__C_41l1n))
);

let C = __C_41l1n;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_malvr8.forEach(initialize => initialize.call(C, C));

console.assert(C.p === 1);

console.assert(C.test === 10);