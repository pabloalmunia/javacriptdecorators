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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

let _C_p_initializer_hknfrg;

const _C_member_initializers_l22u68 = [];

class C {
  constructor() {
    _C_member_initializers_l22u68.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_c50qc = _C_p_initializer_hknfrg.call(this, 1);
  get p() {
    return this.#_p_private_property_c50qc;
  }
  set p(v) {
    this.#_p_private_property_c50qc = v;
  }
}

const _C_p_descriptor_b8n0eg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_dcn58 = decorator({
  get: _C_p_descriptor_b8n0eg.get,
  set: _C_p_descriptor_b8n0eg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_l22u68.push(initializer)
}) || {};

_C_p_initializer_hknfrg = _C_p_result_dcn58.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_dcn58.get || _C_p_descriptor_b8n0eg.get,
  set: _C_p_result_dcn58.set || _C_p_descriptor_b8n0eg.set
});

console.assert(new C().p === 1);

console.assert(new C().test === 10);