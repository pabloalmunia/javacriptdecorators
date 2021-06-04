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

let _C_p_initializer_k395kg;

let _C_p_initializer_sufefg;

class C {
  #_p_private_property_g7gbi = _C_p_initializer_sufefg.call(this, _C_p_initializer_k395kg.call(this, 10));
  get p() {
    return this.#_p_private_property_g7gbi;
  }
  set p(v) {
    this.#_p_private_property_g7gbi = v;
  }
}

const _C_p_descriptor_0hl1f8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_d7opb8 = decorator1({
  get: _C_p_descriptor_0hl1f8.get,
  set: _C_p_descriptor_0hl1f8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_sufefg = _C_p_result_d7opb8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_d7opb8.get || _C_p_descriptor_0hl1f8.get,
  set: _C_p_result_d7opb8.set || _C_p_descriptor_0hl1f8.set
});

const _C_p_descriptor_n2p8mg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_k7luao = decorator2({
  get: _C_p_descriptor_n2p8mg.get,
  set: _C_p_descriptor_n2p8mg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_k395kg = _C_p_result_k7luao.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_k7luao.get || _C_p_descriptor_n2p8mg.get,
  set: _C_p_result_k7luao.set || _C_p_descriptor_n2p8mg.set
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);