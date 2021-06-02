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
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
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

let _C_p_initializer_c8c22o;

const _C_static_initializers_go57uo = [];

class C {
  static #_p_private_property_q9b9p = 1;
  static get p() {
    return this.#_p_private_property_q9b9p;
  }
  static set p(v) {
    this.#_p_private_property_q9b9p = v;
  }
}

const _C_p_descriptor_k12eq = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_km97vg = decorator({
  get: _C_p_descriptor_k12eq.get,
  set: _C_p_descriptor_k12eq.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_go57uo.push(initializer)
}) || {};

_C_p_initializer_c8c22o = _C_p_result_km97vg.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_km97vg.get || _C_p_descriptor_k12eq.get,
  set: _C_p_result_km97vg.set || _C_p_descriptor_k12eq.set
});

_C_p_descriptor_k12eq.set.call(C, _C_p_initializer_c8c22o(_C_p_descriptor_k12eq.get.call(C)));

_C_static_initializers_go57uo.forEach(initialize => initialize.call(C, C));

console.assert(C.p === 1);

console.assert(C.test === 10);