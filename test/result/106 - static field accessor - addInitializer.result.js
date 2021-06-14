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

let _C_p_initializer_3q9n2;

const _C_static_initializers_rt4vu = [];

class C {
  static #_p_private_property_6jbq0g = 1;
  static get p() {
    return this.#_p_private_property_6jbq0g;
  }
  static set p(v) {
    this.#_p_private_property_6jbq0g = v;
  }
}

const _C_p_descriptor_ams5lo = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_orvtpg = decorator({
  get: _C_p_descriptor_ams5lo.get,
  set: _C_p_descriptor_ams5lo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_rt4vu.push(initializer)
}) || {};

_C_p_initializer_3q9n2 = _C_p_result_orvtpg.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_orvtpg.get || _C_p_descriptor_ams5lo.get,
  set: _C_p_result_orvtpg.set || _C_p_descriptor_ams5lo.set
});

_C_p_descriptor_ams5lo.set.call(C, _C_p_initializer_3q9n2(_C_p_descriptor_ams5lo.get.call(C)));

_C_static_initializers_rt4vu.forEach(initialize => initialize.call(C, C));

console.assert(C.p === 1);

console.assert(C.test === 10);