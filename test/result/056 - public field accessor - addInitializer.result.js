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

let _C_p_initializer_2knbe;

const _C_member_initializers_j0bb88 = [];

class __C_ccqll8 {
  constructor() {
    _C_member_initializers_j0bb88.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_5jcs7o = _C_p_initializer_2knbe.call(this, 1);
  get p() {
    return this.#_p_private_property_5jcs7o;
  }
  set p(v) {
    this.#_p_private_property_5jcs7o = v;
  }
}

const ___C_ccqll8_p_descriptor_ohbra = Object.getOwnPropertyDescriptor(__C_ccqll8.prototype, "p");

const ___C_ccqll8_p_result_p9t1b8 = decorator({
  get: ___C_ccqll8_p_descriptor_ohbra.get,
  set: ___C_ccqll8_p_descriptor_ohbra.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_ccqll8.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_j0bb88.push(initializer)
}) || {};

_C_p_initializer_2knbe = ___C_ccqll8_p_result_p9t1b8.initialize || (v => v);

Object.defineProperty(__C_ccqll8.prototype, "p", {
  get: ___C_ccqll8_p_result_p9t1b8.get || ___C_ccqll8_p_descriptor_ohbra.get,
  set: ___C_ccqll8_p_result_p9t1b8.set || ___C_ccqll8_p_descriptor_ohbra.set
});

let C = __C_ccqll8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().p === 1);

console.assert(new C().test === 10);