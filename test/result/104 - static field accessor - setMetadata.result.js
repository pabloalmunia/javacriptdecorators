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

let _C_p_initializer_b85pi;

let _C_p_initializer_l9v2;

class C {
  #_p_private_property_reoqno = _C_p_initializer_l9v2.call(this, _C_p_initializer_b85pi.call(this, 10));
  get p() {
    return this.#_p_private_property_reoqno;
  }
  set p(v) {
    this.#_p_private_property_reoqno = v;
  }
}

const _C_p_descriptor_c555o8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_sla8b = decorator1({
  get: _C_p_descriptor_c555o8.get,
  set: _C_p_descriptor_c555o8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_l9v2 = _C_p_result_sla8b.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_sla8b.get || _C_p_descriptor_c555o8.get,
  set: _C_p_result_sla8b.set || _C_p_descriptor_c555o8.set
});

const _C_p_descriptor_a8121 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_9nebf8 = decorator2({
  get: _C_p_descriptor_a8121.get,
  set: _C_p_descriptor_a8121.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_b85pi = _C_p_result_9nebf8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_9nebf8.get || _C_p_descriptor_a8121.get,
  set: _C_p_result_9nebf8.set || _C_p_descriptor_a8121.set
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);