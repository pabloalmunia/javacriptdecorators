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

let _C_p_initializer_te7fe;

const _C_static_initializers_ordeh = [];

class C {
  static #_p_private_property_jsbmvo = 10;
  static get p() {
    return this.#_p_private_property_jsbmvo;
  }
  static set p(v) {
    this.#_p_private_property_jsbmvo = v;
  }
}

const _C_p_descriptor_o7vhf = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_a4tfoo = decorator({
  get: _C_p_descriptor_o7vhf.get,
  set: _C_p_descriptor_o7vhf.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_ordeh.push(initializer)
}) || {};

_C_p_initializer_te7fe = _C_p_result_a4tfoo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_a4tfoo.get || _C_p_descriptor_o7vhf.get,
  set: _C_p_result_a4tfoo.set || _C_p_descriptor_o7vhf.set
});

_C_p_descriptor_o7vhf.set.call(C, _C_p_initializer_te7fe(_C_p_descriptor_o7vhf.get.call(C)));

_C_static_initializers_ordeh.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);

C.p = 20;

console.assert(C.p === 40);