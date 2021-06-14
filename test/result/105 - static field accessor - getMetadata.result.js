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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

let _C_f_initializer_fm5h48;

let _C_f_initializer_t9161;

let _C_p_initializer_qolu18;

let _C_p_initializer_f5i0v;

class C {
  static #_p_private_property_rf58p8 = 10;
  static get p() {
    return this.#_p_private_property_rf58p8;
  }
  static set p(v) {
    this.#_p_private_property_rf58p8 = v;
  }
  static #_f_private_property_c74vp8 = 20;
  static get f() {
    return this.#_f_private_property_c74vp8;
  }
  static set f(v) {
    this.#_f_private_property_c74vp8 = v;
  }
}

const _C_p_descriptor_0683ug = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_b9p96g = meta(1)({
  get: _C_p_descriptor_0683ug.get,
  set: _C_p_descriptor_0683ug.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_f5i0v = _C_p_result_b9p96g.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_b9p96g.get || _C_p_descriptor_0683ug.get,
  set: _C_p_result_b9p96g.set || _C_p_descriptor_0683ug.set
});

_C_p_descriptor_0683ug.set.call(C, _C_p_initializer_f5i0v(_C_p_descriptor_0683ug.get.call(C)));

const _C_p_descriptor_ijlcto = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_3js33g = meta(2)({
  get: _C_p_descriptor_ijlcto.get,
  set: _C_p_descriptor_ijlcto.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_qolu18 = _C_p_result_3js33g.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_3js33g.get || _C_p_descriptor_ijlcto.get,
  set: _C_p_result_3js33g.set || _C_p_descriptor_ijlcto.set
});

_C_p_descriptor_ijlcto.set.call(C, _C_p_initializer_qolu18(_C_p_descriptor_ijlcto.get.call(C)));

const _C_f_descriptor_sjijeg = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_m7m61g = meta(3)({
  get: _C_f_descriptor_sjijeg.get,
  set: _C_f_descriptor_sjijeg.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_t9161 = _C_f_result_m7m61g.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_m7m61g.get || _C_f_descriptor_sjijeg.get,
  set: _C_f_result_m7m61g.set || _C_f_descriptor_sjijeg.set
});

_C_f_descriptor_sjijeg.set.call(C, _C_f_initializer_t9161(_C_f_descriptor_sjijeg.get.call(C)));

const _C_f_descriptor_c9v9o = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_jh6s18 = meta(3)({
  get: _C_f_descriptor_c9v9o.get,
  set: _C_f_descriptor_c9v9o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_fm5h48 = _C_f_result_jh6s18.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_jh6s18.get || _C_f_descriptor_c9v9o.get,
  set: _C_f_result_jh6s18.set || _C_f_descriptor_c9v9o.set
});

_C_f_descriptor_c9v9o.set.call(C, _C_f_initializer_fm5h48(_C_f_descriptor_c9v9o.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);