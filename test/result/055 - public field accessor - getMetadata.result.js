const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata(META, n + value);
  };
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

let _C_f_initializer_po45s8;

let _C_f_initializer_5l388o;

let _C_p_initializer_8mhafg;

let _C_p_initializer_9mr7po;

class __C_mupmbg {
  #_p_private_property_lbafco = _C_p_initializer_9mr7po.call(this, _C_p_initializer_8mhafg.call(this, 10));
  get p() {
    return this.#_p_private_property_lbafco;
  }
  set p(v) {
    this.#_p_private_property_lbafco = v;
  }
  #_f_private_property_qsateg = _C_f_initializer_5l388o.call(this, _C_f_initializer_po45s8.call(this, 20));
  get f() {
    return this.#_f_private_property_qsateg;
  }
  set f(v) {
    this.#_f_private_property_qsateg = v;
  }
}

const ___C_mupmbg_p_descriptor_ur7eao = Object.getOwnPropertyDescriptor(__C_mupmbg.prototype, "p");

const ___C_mupmbg_p_result_jk7ca = meta(1)({
  get: ___C_mupmbg_p_descriptor_ur7eao.get,
  set: ___C_mupmbg_p_descriptor_ur7eao.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_mupmbg.prototype, "public", "p")
}) || {};

_C_p_initializer_9mr7po = ___C_mupmbg_p_result_jk7ca.initialize || (v => v);

Object.defineProperty(__C_mupmbg.prototype, "p", {
  get: ___C_mupmbg_p_result_jk7ca.get || ___C_mupmbg_p_descriptor_ur7eao.get,
  set: ___C_mupmbg_p_result_jk7ca.set || ___C_mupmbg_p_descriptor_ur7eao.set
});

const ___C_mupmbg_p_descriptor_37fnfo = Object.getOwnPropertyDescriptor(__C_mupmbg.prototype, "p");

const ___C_mupmbg_p_result_6spcn = meta(2)({
  get: ___C_mupmbg_p_descriptor_37fnfo.get,
  set: ___C_mupmbg_p_descriptor_37fnfo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_mupmbg.prototype, "public", "p")
}) || {};

_C_p_initializer_8mhafg = ___C_mupmbg_p_result_6spcn.initialize || (v => v);

Object.defineProperty(__C_mupmbg.prototype, "p", {
  get: ___C_mupmbg_p_result_6spcn.get || ___C_mupmbg_p_descriptor_37fnfo.get,
  set: ___C_mupmbg_p_result_6spcn.set || ___C_mupmbg_p_descriptor_37fnfo.set
});

const ___C_mupmbg_f_descriptor_rvil0o = Object.getOwnPropertyDescriptor(__C_mupmbg.prototype, "f");

const ___C_mupmbg_f_result_tv81q8 = meta(3)({
  get: ___C_mupmbg_f_descriptor_rvil0o.get,
  set: ___C_mupmbg_f_descriptor_rvil0o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_mupmbg.prototype, "public", "f")
}) || {};

_C_f_initializer_5l388o = ___C_mupmbg_f_result_tv81q8.initialize || (v => v);

Object.defineProperty(__C_mupmbg.prototype, "f", {
  get: ___C_mupmbg_f_result_tv81q8.get || ___C_mupmbg_f_descriptor_rvil0o.get,
  set: ___C_mupmbg_f_result_tv81q8.set || ___C_mupmbg_f_descriptor_rvil0o.set
});

const ___C_mupmbg_f_descriptor_p9o58o = Object.getOwnPropertyDescriptor(__C_mupmbg.prototype, "f");

const ___C_mupmbg_f_result_vo2l98 = meta(3)({
  get: ___C_mupmbg_f_descriptor_p9o58o.get,
  set: ___C_mupmbg_f_descriptor_p9o58o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_mupmbg.prototype, "public", "f")
}) || {};

_C_f_initializer_po45s8 = ___C_mupmbg_f_result_vo2l98.initialize || (v => v);

Object.defineProperty(__C_mupmbg.prototype, "f", {
  get: ___C_mupmbg_f_result_vo2l98.get || ___C_mupmbg_f_descriptor_p9o58o.get,
  set: ___C_mupmbg_f_result_vo2l98.set || ___C_mupmbg_f_descriptor_p9o58o.set
});

let C = __C_mupmbg;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);