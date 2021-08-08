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

let _C_p_initializer_cr5rp8;

let _C_p_initializer_1m56r;

class C {
  #_p_private_property_bqqg7g = _C_p_initializer_1m56r.call(this, _C_p_initializer_cr5rp8.call(this, 10));
  get p() {
    return this.#_p_private_property_bqqg7g;
  }
  set p(v) {
    this.#_p_private_property_bqqg7g = v;
  }
}

const _C_p_descriptor_pgvoao = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_8ckalg = decorator1({
  get: _C_p_descriptor_pgvoao.get,
  set: _C_p_descriptor_pgvoao.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_1m56r = _C_p_result_8ckalg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_8ckalg.get || _C_p_descriptor_pgvoao.get,
  set: _C_p_result_8ckalg.set || _C_p_descriptor_pgvoao.set
});

const _C_p_descriptor_c544b8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_iqogjg = decorator2({
  get: _C_p_descriptor_c544b8.get,
  set: _C_p_descriptor_c544b8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_cr5rp8 = _C_p_result_iqogjg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_iqogjg.get || _C_p_descriptor_c544b8.get,
  set: _C_p_result_iqogjg.set || _C_p_descriptor_c544b8.set
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);