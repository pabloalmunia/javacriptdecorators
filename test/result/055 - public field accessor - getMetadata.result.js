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

let _C_f_initializer_figs2o;

let _C_f_initializer_i79nso;

let _C_p_initializer_487b3o;

let _C_p_initializer_bosq4g;

class C {
  #_p_private_property_m7gs7g = _C_p_initializer_bosq4g.call(this, _C_p_initializer_487b3o.call(this, 10));
  get p() {
    return this.#_p_private_property_m7gs7g;
  }
  set p(v) {
    this.#_p_private_property_m7gs7g = v;
  }
  #_f_private_property_gga07 = _C_f_initializer_i79nso.call(this, _C_f_initializer_figs2o.call(this, 20));
  get f() {
    return this.#_f_private_property_gga07;
  }
  set f(v) {
    this.#_f_private_property_gga07 = v;
  }
}

const _C_p_descriptor_aemr8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_7cr1hg = meta(1)({
  get: _C_p_descriptor_aemr8.get,
  set: _C_p_descriptor_aemr8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_bosq4g = _C_p_result_7cr1hg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_7cr1hg.get || _C_p_descriptor_aemr8.get,
  set: _C_p_result_7cr1hg.set || _C_p_descriptor_aemr8.set
});

const _C_p_descriptor_d1dbng = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_mbaq38 = meta(2)({
  get: _C_p_descriptor_d1dbng.get,
  set: _C_p_descriptor_d1dbng.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_487b3o = _C_p_result_mbaq38.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_mbaq38.get || _C_p_descriptor_d1dbng.get,
  set: _C_p_result_mbaq38.set || _C_p_descriptor_d1dbng.set
});

const _C_f_descriptor_tdivr = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_593mpg = meta(3)({
  get: _C_f_descriptor_tdivr.get,
  set: _C_f_descriptor_tdivr.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_i79nso = _C_f_result_593mpg.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_593mpg.get || _C_f_descriptor_tdivr.get,
  set: _C_f_result_593mpg.set || _C_f_descriptor_tdivr.set
});

const _C_f_descriptor_u53mi = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_02j01g = meta(3)({
  get: _C_f_descriptor_u53mi.get,
  set: _C_f_descriptor_u53mi.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_figs2o = _C_f_result_02j01g.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_02j01g.get || _C_f_descriptor_u53mi.get,
  set: _C_f_result_02j01g.set || _C_f_descriptor_u53mi.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);