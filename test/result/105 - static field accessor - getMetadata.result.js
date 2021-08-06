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

let _C_f_initializer_qfv6to;

let _C_f_initializer_shhcb8;

let _C_p_initializer_aci7tg;

let _C_p_initializer_dvhe5;

class C {
  static #_p_private_property_9m4lf = 10;
  static get p() {
    return this.#_p_private_property_9m4lf;
  }
  static set p(v) {
    this.#_p_private_property_9m4lf = v;
  }
  static #_f_private_property_0n5o38 = 20;
  static get f() {
    return this.#_f_private_property_0n5o38;
  }
  static set f(v) {
    this.#_f_private_property_0n5o38 = v;
  }
}

const _C_p_descriptor_g0t46o = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_8fr55o = meta(1)({
  get: _C_p_descriptor_g0t46o.get,
  set: _C_p_descriptor_g0t46o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_dvhe5 = _C_p_result_8fr55o.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_8fr55o.get || _C_p_descriptor_g0t46o.get,
  set: _C_p_result_8fr55o.set || _C_p_descriptor_g0t46o.set
});

_C_p_descriptor_g0t46o.set.call(C, _C_p_initializer_dvhe5(_C_p_descriptor_g0t46o.get.call(C)));

const _C_p_descriptor_9b4mg8 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_brl408 = meta(2)({
  get: _C_p_descriptor_9b4mg8.get,
  set: _C_p_descriptor_9b4mg8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_aci7tg = _C_p_result_brl408.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_brl408.get || _C_p_descriptor_9b4mg8.get,
  set: _C_p_result_brl408.set || _C_p_descriptor_9b4mg8.set
});

_C_p_descriptor_9b4mg8.set.call(C, _C_p_initializer_aci7tg(_C_p_descriptor_9b4mg8.get.call(C)));

const _C_f_descriptor_ke48lg = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_cldjo8 = meta(3)({
  get: _C_f_descriptor_ke48lg.get,
  set: _C_f_descriptor_ke48lg.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_shhcb8 = _C_f_result_cldjo8.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_cldjo8.get || _C_f_descriptor_ke48lg.get,
  set: _C_f_result_cldjo8.set || _C_f_descriptor_ke48lg.set
});

_C_f_descriptor_ke48lg.set.call(C, _C_f_initializer_shhcb8(_C_f_descriptor_ke48lg.get.call(C)));

const _C_f_descriptor_s6o8f8 = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_nl8phg = meta(3)({
  get: _C_f_descriptor_s6o8f8.get,
  set: _C_f_descriptor_s6o8f8.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_qfv6to = _C_f_result_nl8phg.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_nl8phg.get || _C_f_descriptor_s6o8f8.get,
  set: _C_f_result_nl8phg.set || _C_f_descriptor_s6o8f8.set
});

_C_f_descriptor_s6o8f8.set.call(C, _C_f_initializer_qfv6to(_C_f_descriptor_s6o8f8.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);