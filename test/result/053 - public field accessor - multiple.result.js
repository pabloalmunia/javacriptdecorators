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

let _C_p_initializer_qcsung;

let _C_p_initializer_c5on98;

class C {
  #_p_private_property_o57788 = _C_p_initializer_c5on98.call(this, _C_p_initializer_qcsung.call(this, 1));
  get p() {
    return this.#_p_private_property_o57788;
  }
  set p(v) {
    this.#_p_private_property_o57788 = v;
  }
}

const _C_p_descriptor_6npjg8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_9d6j18 = decorator1({
  get: _C_p_descriptor_6npjg8.get,
  set: _C_p_descriptor_6npjg8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_c5on98 = _C_p_result_9d6j18.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_9d6j18.get || _C_p_descriptor_6npjg8.get,
  set: _C_p_result_9d6j18.set || _C_p_descriptor_6npjg8.set
});

const _C_p_descriptor_bcggl8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_utocno = decorator2({
  get: _C_p_descriptor_bcggl8.get,
  set: _C_p_descriptor_bcggl8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_qcsung = _C_p_result_utocno.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_utocno.get || _C_p_descriptor_bcggl8.get,
  set: _C_p_result_utocno.set || _C_p_descriptor_bcggl8.set
});

const c = new C();

console.assert(c.p === 6);