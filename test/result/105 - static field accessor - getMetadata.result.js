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

let _C_f_initializer_n6o7eo;

let _C_f_initializer_erfcn8;

let _C_p_initializer_376ga;

let _C_p_initializer_ujb8v8;

class C {
  static #_p_private_property_ojdo08 = 10;
  static get p() {
    return this.#_p_private_property_ojdo08;
  }
  static set p(v) {
    this.#_p_private_property_ojdo08 = v;
  }
  static #_f_private_property_4vkglg = 20;
  static get f() {
    return this.#_f_private_property_4vkglg;
  }
  static set f(v) {
    this.#_f_private_property_4vkglg = v;
  }
}

const _C_p_descriptor_o7148g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_n3oiro = meta(1)({
  get: _C_p_descriptor_o7148g.get,
  set: _C_p_descriptor_o7148g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_ujb8v8 = _C_p_result_n3oiro.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_n3oiro.get || _C_p_descriptor_o7148g.get,
  set: _C_p_result_n3oiro.set || _C_p_descriptor_o7148g.set
});

_C_p_descriptor_o7148g.set.call(C, _C_p_initializer_ujb8v8(_C_p_descriptor_o7148g.get.call(C)));

const _C_p_descriptor_7i7q4g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_sbhjpo = meta(2)({
  get: _C_p_descriptor_7i7q4g.get,
  set: _C_p_descriptor_7i7q4g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_376ga = _C_p_result_sbhjpo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_sbhjpo.get || _C_p_descriptor_7i7q4g.get,
  set: _C_p_result_sbhjpo.set || _C_p_descriptor_7i7q4g.set
});

_C_p_descriptor_7i7q4g.set.call(C, _C_p_initializer_376ga(_C_p_descriptor_7i7q4g.get.call(C)));

const _C_f_descriptor_20ui7g = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_nmagko = meta(3)({
  get: _C_f_descriptor_20ui7g.get,
  set: _C_f_descriptor_20ui7g.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_erfcn8 = _C_f_result_nmagko.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_nmagko.get || _C_f_descriptor_20ui7g.get,
  set: _C_f_result_nmagko.set || _C_f_descriptor_20ui7g.set
});

_C_f_descriptor_20ui7g.set.call(C, _C_f_initializer_erfcn8(_C_f_descriptor_20ui7g.get.call(C)));

const _C_f_descriptor_ef49h = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_085nr = meta(3)({
  get: _C_f_descriptor_ef49h.get,
  set: _C_f_descriptor_ef49h.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_n6o7eo = _C_f_result_085nr.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_085nr.get || _C_f_descriptor_ef49h.get,
  set: _C_f_result_085nr.set || _C_f_descriptor_ef49h.set
});

_C_f_descriptor_ef49h.set.call(C, _C_f_initializer_n6o7eo(_C_f_descriptor_ef49h.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);