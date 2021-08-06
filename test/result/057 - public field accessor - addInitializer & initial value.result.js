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

let _C_p_initializer_i2v0m;

const _C_member_initializers_37qis = [];

class C {
  constructor() {
    _C_member_initializers_37qis.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_726v8o = _C_p_initializer_i2v0m.call(this, 10);
  get p() {
    return this.#_p_private_property_726v8o;
  }
  set p(v) {
    this.#_p_private_property_726v8o = v;
  }
}

const _C_p_descriptor_iouts = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_7os6dg = decorator({
  get: _C_p_descriptor_iouts.get,
  set: _C_p_descriptor_iouts.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_37qis.push(initializer)
}) || {};

_C_p_initializer_i2v0m = _C_p_result_7os6dg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_7os6dg.get || _C_p_descriptor_iouts.get,
  set: _C_p_result_7os6dg.set || _C_p_descriptor_iouts.set
});

console.assert(new C().test === 10);

const c = new C();

console.assert(c.p === 20);

c.p = 20;

console.assert(c.p === 40);