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

let _C_p_initializer_09u3pg;

let _C_p_initializer_83jqpo;

class C {
  static #_p_private_property_qfbso8 = 1;
  static get p() {
    return this.#_p_private_property_qfbso8;
  }
  static set p(v) {
    this.#_p_private_property_qfbso8 = v;
  }
}

const _C_p_descriptor_a54ksg = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_ku2cu8 = decorator1({
  get: _C_p_descriptor_a54ksg.get,
  set: _C_p_descriptor_a54ksg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_83jqpo = _C_p_result_ku2cu8.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_ku2cu8.get || _C_p_descriptor_a54ksg.get,
  set: _C_p_result_ku2cu8.set || _C_p_descriptor_a54ksg.set
});

_C_p_descriptor_a54ksg.set.call(C, _C_p_initializer_83jqpo(_C_p_descriptor_a54ksg.get.call(C)));

const _C_p_descriptor_d0348 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_p36p6 = decorator2({
  get: _C_p_descriptor_d0348.get,
  set: _C_p_descriptor_d0348.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_09u3pg = _C_p_result_p36p6.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_p36p6.get || _C_p_descriptor_d0348.get,
  set: _C_p_result_p36p6.set || _C_p_descriptor_d0348.set
});

_C_p_descriptor_d0348.set.call(C, _C_p_initializer_09u3pg(_C_p_descriptor_d0348.get.call(C)));

console.assert(C.p === 6);