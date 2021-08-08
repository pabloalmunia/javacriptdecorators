function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize(v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
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

let _C_p_initializer_t93ag8;

const _C_static_initializers_qli9k8 = [];

class C {
  static #_p_private_property_593cco = 10;
  static get p() {
    return this.#_p_private_property_593cco;
  }
  static set p(v) {
    this.#_p_private_property_593cco = v;
  }
}

const _C_p_descriptor_kjn3s = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_98hmm = decorator({
  get: _C_p_descriptor_kjn3s.get,
  set: _C_p_descriptor_kjn3s.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_qli9k8.push(initializer)
}) || {};

_C_p_initializer_t93ag8 = _C_p_result_98hmm.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_98hmm.get || _C_p_descriptor_kjn3s.get,
  set: _C_p_result_98hmm.set || _C_p_descriptor_kjn3s.set
});

_C_p_descriptor_kjn3s.set.call(C, _C_p_initializer_t93ag8(_C_p_descriptor_kjn3s.get.call(C)));

_C_static_initializers_qli9k8.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);

C.p = 20;

console.assert(C.p === 40);