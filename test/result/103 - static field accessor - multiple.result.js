function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
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

let _C_p_initializer_8te5d;

let _C_p_initializer_uoh0s;

class C {
  static #_p_private_property_obgdk8 = 1;
  static get p() {
    return this.#_p_private_property_obgdk8;
  }
  static set p(v) {
    this.#_p_private_property_obgdk8 = v;
  }
}

const _C_p_descriptor_rgc21g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_lh0jho = decorator1({
  get: _C_p_descriptor_rgc21g.get,
  set: _C_p_descriptor_rgc21g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_uoh0s = _C_p_result_lh0jho.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_lh0jho.get || _C_p_descriptor_rgc21g.get,
  set: _C_p_result_lh0jho.set || _C_p_descriptor_rgc21g.set
});

_C_p_descriptor_rgc21g.set.call(C, _C_p_initializer_uoh0s(_C_p_descriptor_rgc21g.get.call(C)));

const _C_p_descriptor_j9nt4 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_6nch0g = decorator2({
  get: _C_p_descriptor_j9nt4.get,
  set: _C_p_descriptor_j9nt4.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_8te5d = _C_p_result_6nch0g.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_6nch0g.get || _C_p_descriptor_j9nt4.get,
  set: _C_p_result_6nch0g.set || _C_p_descriptor_j9nt4.set
});

_C_p_descriptor_j9nt4.set.call(C, _C_p_initializer_8te5d(_C_p_descriptor_j9nt4.get.call(C)));

console.assert(C.p === 6);