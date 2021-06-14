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

let _C_f_initializer_266edg;

let _C_f_initializer_29vs28;

let _C_p_initializer_9gkm48;

let _C_p_initializer_v98p68;

class C {
  #_p_private_property_noscr = _C_p_initializer_v98p68.call(this, _C_p_initializer_9gkm48.call(this, 10));
  get p() {
    return this.#_p_private_property_noscr;
  }
  set p(v) {
    this.#_p_private_property_noscr = v;
  }
  #_f_private_property_g5s3ko = _C_f_initializer_29vs28.call(this, _C_f_initializer_266edg.call(this, 20));
  get f() {
    return this.#_f_private_property_g5s3ko;
  }
  set f(v) {
    this.#_f_private_property_g5s3ko = v;
  }
}

const _C_p_descriptor_c2r72 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_an8dho = meta(1)({
  get: _C_p_descriptor_c2r72.get,
  set: _C_p_descriptor_c2r72.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_v98p68 = _C_p_result_an8dho.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_an8dho.get || _C_p_descriptor_c2r72.get,
  set: _C_p_result_an8dho.set || _C_p_descriptor_c2r72.set
});

const _C_p_descriptor_3v8dt = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_ndgmn8 = meta(2)({
  get: _C_p_descriptor_3v8dt.get,
  set: _C_p_descriptor_3v8dt.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_9gkm48 = _C_p_result_ndgmn8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_ndgmn8.get || _C_p_descriptor_3v8dt.get,
  set: _C_p_result_ndgmn8.set || _C_p_descriptor_3v8dt.set
});

const _C_f_descriptor_9q2r6o = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_sjdosg = meta(3)({
  get: _C_f_descriptor_9q2r6o.get,
  set: _C_f_descriptor_9q2r6o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_29vs28 = _C_f_result_sjdosg.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_sjdosg.get || _C_f_descriptor_9q2r6o.get,
  set: _C_f_result_sjdosg.set || _C_f_descriptor_9q2r6o.set
});

const _C_f_descriptor_g4rhco = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_eabp18 = meta(3)({
  get: _C_f_descriptor_g4rhco.get,
  set: _C_f_descriptor_g4rhco.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_266edg = _C_f_result_eabp18.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_eabp18.get || _C_f_descriptor_g4rhco.get,
  set: _C_f_result_eabp18.set || _C_f_descriptor_g4rhco.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);