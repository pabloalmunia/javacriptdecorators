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

let _C_p_initializer_suf3co;

const _C_static_initializers_9agk68 = [];

class C {
  static #_p_private_property_0l4k08 = 1;
  static get p() {
    return this.#_p_private_property_0l4k08;
  }
  static set p(v) {
    this.#_p_private_property_0l4k08 = v;
  }
}

const _C_p_descriptor_p7sv7g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_i8a4ho = decorator({
  get: _C_p_descriptor_p7sv7g.get,
  set: _C_p_descriptor_p7sv7g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_9agk68.push(initializer)
}) || {};

_C_p_initializer_suf3co = _C_p_result_i8a4ho.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_i8a4ho.get || _C_p_descriptor_p7sv7g.get,
  set: _C_p_result_i8a4ho.set || _C_p_descriptor_p7sv7g.set
});

_C_p_descriptor_p7sv7g.set.call(C, _C_p_initializer_suf3co(_C_p_descriptor_p7sv7g.get.call(C)));

_C_static_initializers_9agk68.forEach(initialize => initialize.call(C, C));

console.assert(C.p === 1);

console.assert(C.test === 10);