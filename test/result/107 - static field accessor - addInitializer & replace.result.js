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

let _C_p_initializer_ljleug;

const _C_static_initializers_ujvrpg = [];

class C {
  static #_p_private_property_npbago = 10;
  static get p() {
    return this.#_p_private_property_npbago;
  }
  static set p(v) {
    this.#_p_private_property_npbago = v;
  }
}

const _C_p_descriptor_kiq14o = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_noicc = decorator({
  get: _C_p_descriptor_kiq14o.get,
  set: _C_p_descriptor_kiq14o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_ujvrpg.push(initializer)
}) || {};

_C_p_initializer_ljleug = _C_p_result_noicc.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_noicc.get || _C_p_descriptor_kiq14o.get,
  set: _C_p_result_noicc.set || _C_p_descriptor_kiq14o.set
});

_C_p_descriptor_kiq14o.set.call(C, _C_p_initializer_ljleug(_C_p_descriptor_kiq14o.get.call(C)));

_C_static_initializers_ujvrpg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);

C.p = 20;

console.assert(C.p === 40);