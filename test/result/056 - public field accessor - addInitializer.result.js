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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

let _C_p_initializer_fuldbo;

const _C_member_initializers_ir5dmo = [];

class C {
  constructor() {
    _C_member_initializers_ir5dmo.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_l9vpgg = _C_p_initializer_fuldbo.call(this, 1);
  get p() {
    return this.#_p_private_property_l9vpgg;
  }
  set p(v) {
    this.#_p_private_property_l9vpgg = v;
  }
}

const _C_p_descriptor_j0snag = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_f0dg2o = decorator({
  get: _C_p_descriptor_j0snag.get,
  set: _C_p_descriptor_j0snag.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_ir5dmo.push(initializer)
}) || {};

_C_p_initializer_fuldbo = _C_p_result_f0dg2o.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_f0dg2o.get || _C_p_descriptor_j0snag.get,
  set: _C_p_result_f0dg2o.set || _C_p_descriptor_j0snag.set
});

console.assert(new C().p === 1);

console.assert(new C().test === 10);