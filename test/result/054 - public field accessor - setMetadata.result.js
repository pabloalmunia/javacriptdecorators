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

let _C_p_initializer_7a16do;

let _C_p_initializer_et0f8o;

class __C_dgfocg {
  #_p_private_property_vgtfm = _C_p_initializer_et0f8o.call(this, _C_p_initializer_7a16do.call(this, 10));
  get p() {
    return this.#_p_private_property_vgtfm;
  }
  set p(v) {
    this.#_p_private_property_vgtfm = v;
  }
}

const ___C_dgfocg_p_descriptor_htdb2g = Object.getOwnPropertyDescriptor(__C_dgfocg.prototype, "p");

const ___C_dgfocg_p_result_i85tng = decorator1({
  get: ___C_dgfocg_p_descriptor_htdb2g.get,
  set: ___C_dgfocg_p_descriptor_htdb2g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_dgfocg.prototype, "public", "p")
}) || {};

_C_p_initializer_et0f8o = ___C_dgfocg_p_result_i85tng.initialize || (v => v);

Object.defineProperty(__C_dgfocg.prototype, "p", {
  get: ___C_dgfocg_p_result_i85tng.get || ___C_dgfocg_p_descriptor_htdb2g.get,
  set: ___C_dgfocg_p_result_i85tng.set || ___C_dgfocg_p_descriptor_htdb2g.set
});

const ___C_dgfocg_p_descriptor_sontf = Object.getOwnPropertyDescriptor(__C_dgfocg.prototype, "p");

const ___C_dgfocg_p_result_im40tg = decorator2({
  get: ___C_dgfocg_p_descriptor_sontf.get,
  set: ___C_dgfocg_p_descriptor_sontf.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_dgfocg.prototype, "public", "p")
}) || {};

_C_p_initializer_7a16do = ___C_dgfocg_p_result_im40tg.initialize || (v => v);

Object.defineProperty(__C_dgfocg.prototype, "p", {
  get: ___C_dgfocg_p_result_im40tg.get || ___C_dgfocg_p_descriptor_sontf.get,
  set: ___C_dgfocg_p_result_im40tg.set || ___C_dgfocg_p_descriptor_sontf.set
});

let C = __C_dgfocg;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);