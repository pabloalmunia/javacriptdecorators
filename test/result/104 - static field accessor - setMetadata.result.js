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

let _C_p_initializer_9k7bb;

let _C_p_initializer_dra2gg;

class __C_pvm19 {
  #_p_private_property_ekd3vg = _C_p_initializer_dra2gg.call(this, _C_p_initializer_9k7bb.call(this, 10));
  get p() {
    return this.#_p_private_property_ekd3vg;
  }
  set p(v) {
    this.#_p_private_property_ekd3vg = v;
  }
}

const ___C_pvm19_p_descriptor_dr8hrg = Object.getOwnPropertyDescriptor(__C_pvm19.prototype, "p");

const ___C_pvm19_p_result_v8m648 = decorator1({
  get: ___C_pvm19_p_descriptor_dr8hrg.get,
  set: ___C_pvm19_p_descriptor_dr8hrg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pvm19.prototype, "public", "p")
}) || {};

_C_p_initializer_dra2gg = ___C_pvm19_p_result_v8m648.initialize || (v => v);

Object.defineProperty(__C_pvm19.prototype, "p", {
  get: ___C_pvm19_p_result_v8m648.get || ___C_pvm19_p_descriptor_dr8hrg.get,
  set: ___C_pvm19_p_result_v8m648.set || ___C_pvm19_p_descriptor_dr8hrg.set
});

const ___C_pvm19_p_descriptor_9tsvr = Object.getOwnPropertyDescriptor(__C_pvm19.prototype, "p");

const ___C_pvm19_p_result_3gicpg = decorator2({
  get: ___C_pvm19_p_descriptor_9tsvr.get,
  set: ___C_pvm19_p_descriptor_9tsvr.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pvm19.prototype, "public", "p")
}) || {};

_C_p_initializer_9k7bb = ___C_pvm19_p_result_3gicpg.initialize || (v => v);

Object.defineProperty(__C_pvm19.prototype, "p", {
  get: ___C_pvm19_p_result_3gicpg.get || ___C_pvm19_p_descriptor_9tsvr.get,
  set: ___C_pvm19_p_result_3gicpg.set || ___C_pvm19_p_descriptor_9tsvr.set
});

let C = __C_pvm19;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);