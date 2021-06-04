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

let _C_p_initializer_m3kd6;

let _C_p_initializer_05f5d8;

class C {
  static #_p_private_property_qk7i68 = 1;
  static get p() {
    return this.#_p_private_property_qk7i68;
  }
  static set p(v) {
    this.#_p_private_property_qk7i68 = v;
  }
}

const _C_p_descriptor_1bb44g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_2blsgg = decorator1({
  get: _C_p_descriptor_1bb44g.get,
  set: _C_p_descriptor_1bb44g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_05f5d8 = _C_p_result_2blsgg.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_2blsgg.get || _C_p_descriptor_1bb44g.get,
  set: _C_p_result_2blsgg.set || _C_p_descriptor_1bb44g.set
});

_C_p_descriptor_1bb44g.set.call(C, _C_p_initializer_05f5d8(_C_p_descriptor_1bb44g.get.call(C)));

const _C_p_descriptor_phdum = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_5gj8uo = decorator2({
  get: _C_p_descriptor_phdum.get,
  set: _C_p_descriptor_phdum.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_m3kd6 = _C_p_result_5gj8uo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_5gj8uo.get || _C_p_descriptor_phdum.get,
  set: _C_p_result_5gj8uo.set || _C_p_descriptor_phdum.set
});

_C_p_descriptor_phdum.set.call(C, _C_p_initializer_m3kd6(_C_p_descriptor_phdum.get.call(C)));

console.assert(C.p === 6);