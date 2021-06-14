function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

let _A_p_initializer_buuk1;

class A {
  #_p_private_property_l9lkig = _A_p_initializer_buuk1.call(this, 1);
  get p() {
    return this.#_p_private_property_l9lkig;
  }
  set p(v) {
    this.#_p_private_property_l9lkig = v;
  }
}

const _A_p_descriptor_8dugeg = Object.getOwnPropertyDescriptor(A.prototype, "p");

const _A_p_result_8j1cco = decorator({
  get: _A_p_descriptor_8dugeg.get,
  set: _A_p_descriptor_8dugeg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(A.prototype, "public", "p")
}) || {};

_A_p_initializer_buuk1 = _A_p_result_8j1cco.initialize || (v => v);

Object.defineProperty(A.prototype, "p", {
  get: _A_p_result_8j1cco.get || _A_p_descriptor_8dugeg.get,
  set: _A_p_result_8j1cco.set || _A_p_descriptor_8dugeg.set
});