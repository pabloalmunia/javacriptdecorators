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

let _C_f_initializer_2adhn8;

let _C_f_initializer_qr1bm8;

let _C_p_initializer_6e4nvo;

let _C_p_initializer_1k382;

class C {
  static #_p_private_property_heccro = 10;
  static get p() {
    return this.#_p_private_property_heccro;
  }
  static set p(v) {
    this.#_p_private_property_heccro = v;
  }
  static #_f_private_property_nusmc8 = 20;
  static get f() {
    return this.#_f_private_property_nusmc8;
  }
  static set f(v) {
    this.#_f_private_property_nusmc8 = v;
  }
}

const _C_p_descriptor_10bl9g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_o6j97o = meta(1)({
  get: _C_p_descriptor_10bl9g.get,
  set: _C_p_descriptor_10bl9g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_1k382 = _C_p_result_o6j97o.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_o6j97o.get || _C_p_descriptor_10bl9g.get,
  set: _C_p_result_o6j97o.set || _C_p_descriptor_10bl9g.set
});

_C_p_descriptor_10bl9g.set.call(C, _C_p_initializer_1k382(_C_p_descriptor_10bl9g.get.call(C)));

const _C_p_descriptor_m039ig = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_m71dgo = meta(2)({
  get: _C_p_descriptor_m039ig.get,
  set: _C_p_descriptor_m039ig.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_6e4nvo = _C_p_result_m71dgo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_m71dgo.get || _C_p_descriptor_m039ig.get,
  set: _C_p_result_m71dgo.set || _C_p_descriptor_m039ig.set
});

_C_p_descriptor_m039ig.set.call(C, _C_p_initializer_6e4nvo(_C_p_descriptor_m039ig.get.call(C)));

const _C_f_descriptor_4m38k8 = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_luhnp = meta(3)({
  get: _C_f_descriptor_4m38k8.get,
  set: _C_f_descriptor_4m38k8.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_qr1bm8 = _C_f_result_luhnp.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_luhnp.get || _C_f_descriptor_4m38k8.get,
  set: _C_f_result_luhnp.set || _C_f_descriptor_4m38k8.set
});

_C_f_descriptor_4m38k8.set.call(C, _C_f_initializer_qr1bm8(_C_f_descriptor_4m38k8.get.call(C)));

const _C_f_descriptor_0r148g = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_agcuo = meta(3)({
  get: _C_f_descriptor_0r148g.get,
  set: _C_f_descriptor_0r148g.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_2adhn8 = _C_f_result_agcuo.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_agcuo.get || _C_f_descriptor_0r148g.get,
  set: _C_f_result_agcuo.set || _C_f_descriptor_0r148g.set
});

_C_f_descriptor_0r148g.set.call(C, _C_f_initializer_2adhn8(_C_f_descriptor_0r148g.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);