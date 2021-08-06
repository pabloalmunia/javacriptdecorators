const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

let _C_p_initializer_kvohr8;

let _C_p_initializer_aq2qi;

class C {
  #_p_private_property_vnbg1g = _C_p_initializer_aq2qi.call(this, _C_p_initializer_kvohr8.call(this, 10));
  get p() {
    return this.#_p_private_property_vnbg1g;
  }
  set p(v) {
    this.#_p_private_property_vnbg1g = v;
  }
}

const _C_p_descriptor_vo992o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_4mculo = decorator1({
  get: _C_p_descriptor_vo992o.get,
  set: _C_p_descriptor_vo992o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_aq2qi = _C_p_result_4mculo.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_4mculo.get || _C_p_descriptor_vo992o.get,
  set: _C_p_result_4mculo.set || _C_p_descriptor_vo992o.set
});

const _C_p_descriptor_cvn59o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_0dumco = decorator2({
  get: _C_p_descriptor_cvn59o.get,
  set: _C_p_descriptor_cvn59o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_kvohr8 = _C_p_result_0dumco.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_0dumco.get || _C_p_descriptor_cvn59o.get,
  set: _C_p_result_0dumco.set || _C_p_descriptor_cvn59o.set
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);