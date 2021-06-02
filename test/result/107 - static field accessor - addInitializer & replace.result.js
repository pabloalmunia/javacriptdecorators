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

let _C_p_initializer_99ccoo;

const _C_static_initializers_u78rm8 = [];

class C {
  static #_p_private_property_8s1h8g = 10;
  static get p() {
    return this.#_p_private_property_8s1h8g;
  }
  static set p(v) {
    this.#_p_private_property_8s1h8g = v;
  }
}

const _C_p_descriptor_n92lsg = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_av2ev = decorator({
  get: _C_p_descriptor_n92lsg.get,
  set: _C_p_descriptor_n92lsg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_u78rm8.push(initializer)
}) || {};

_C_p_initializer_99ccoo = _C_p_result_av2ev.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_av2ev.get || _C_p_descriptor_n92lsg.get,
  set: _C_p_result_av2ev.set || _C_p_descriptor_n92lsg.set
});

_C_p_descriptor_n92lsg.set.call(C, _C_p_initializer_99ccoo(_C_p_descriptor_n92lsg.get.call(C)));

_C_static_initializers_u78rm8.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);

C.p = 20;

console.assert(C.p === 40);