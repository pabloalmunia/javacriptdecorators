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

let _C_p_initializer_k7nb6o;

const _C_member_initializers_5jgfv = [];

class C {
  constructor() {
    _C_member_initializers_5jgfv.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_jt5hl = _C_p_initializer_k7nb6o.call(this, 1);
  get p() {
    return this.#_p_private_property_jt5hl;
  }
  set p(v) {
    this.#_p_private_property_jt5hl = v;
  }
}

const _C_p_descriptor_9rerf = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_0hj8o8 = decorator({
  get: _C_p_descriptor_9rerf.get,
  set: _C_p_descriptor_9rerf.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_5jgfv.push(initializer)
}) || {};

_C_p_initializer_k7nb6o = _C_p_result_0hj8o8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_0hj8o8.get || _C_p_descriptor_9rerf.get,
  set: _C_p_result_0hj8o8.set || _C_p_descriptor_9rerf.set
});

console.assert(new C().p === 1);

console.assert(new C().test === 10);