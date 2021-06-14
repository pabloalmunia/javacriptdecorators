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

let _C_p_initializer_29msqg;

let _C_p_initializer_4dd1s8;

class C {
  #_p_private_property_b9vok = _C_p_initializer_4dd1s8.call(this, _C_p_initializer_29msqg.call(this, 1));
  get p() {
    return this.#_p_private_property_b9vok;
  }
  set p(v) {
    this.#_p_private_property_b9vok = v;
  }
}

const _C_p_descriptor_50bgco = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_osidag = decorator1({
  get: _C_p_descriptor_50bgco.get,
  set: _C_p_descriptor_50bgco.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_4dd1s8 = _C_p_result_osidag.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_osidag.get || _C_p_descriptor_50bgco.get,
  set: _C_p_result_osidag.set || _C_p_descriptor_50bgco.set
});

const _C_p_descriptor_rkd0v = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_kfohj8 = decorator2({
  get: _C_p_descriptor_rkd0v.get,
  set: _C_p_descriptor_rkd0v.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_29msqg = _C_p_result_kfohj8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_kfohj8.get || _C_p_descriptor_rkd0v.get,
  set: _C_p_result_kfohj8.set || _C_p_descriptor_rkd0v.set
});

const c = new C();

console.assert(c.p === 6);