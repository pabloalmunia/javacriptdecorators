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

let _C_p_initializer_1nto7g;

const _C_static_initializers_00eb4o = [];

class C {
  static #_p_private_property_92f4t8 = 1;
  static get p() {
    return this.#_p_private_property_92f4t8;
  }
  static set p(v) {
    this.#_p_private_property_92f4t8 = v;
  }
}

const _C_p_descriptor_pm6blg = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_i4laag = decorator({
  get: _C_p_descriptor_pm6blg.get,
  set: _C_p_descriptor_pm6blg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_00eb4o.push(initializer)
}) || {};

_C_p_initializer_1nto7g = _C_p_result_i4laag.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_i4laag.get || _C_p_descriptor_pm6blg.get,
  set: _C_p_result_i4laag.set || _C_p_descriptor_pm6blg.set
});

_C_p_descriptor_pm6blg.set.call(C, _C_p_initializer_1nto7g(_C_p_descriptor_pm6blg.get.call(C)));

_C_static_initializers_00eb4o.forEach(initialize => initialize.call(C, C));

console.assert(C.p === 1);

console.assert(C.test === 10);