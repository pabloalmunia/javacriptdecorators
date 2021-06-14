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

let _C_f_initializer_3hn1vo;

let _C_f_initializer_q7er2g;

let _C_p_initializer_te4h48;

let _C_p_initializer_gsn0n8;

class C {
  #_p_private_property_envu5g = _C_p_initializer_gsn0n8.call(this, _C_p_initializer_te4h48.call(this, 10));
  get p() {
    return this.#_p_private_property_envu5g;
  }
  set p(v) {
    this.#_p_private_property_envu5g = v;
  }
  #_f_private_property_53t418 = _C_f_initializer_q7er2g.call(this, _C_f_initializer_3hn1vo.call(this, 20));
  get f() {
    return this.#_f_private_property_53t418;
  }
  set f(v) {
    this.#_f_private_property_53t418 = v;
  }
}

const _C_p_descriptor_vcf25o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_a00f6 = meta(1)({
  get: _C_p_descriptor_vcf25o.get,
  set: _C_p_descriptor_vcf25o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_gsn0n8 = _C_p_result_a00f6.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_a00f6.get || _C_p_descriptor_vcf25o.get,
  set: _C_p_result_a00f6.set || _C_p_descriptor_vcf25o.set
});

const _C_p_descriptor_p9qrj8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_ugrojo = meta(2)({
  get: _C_p_descriptor_p9qrj8.get,
  set: _C_p_descriptor_p9qrj8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_te4h48 = _C_p_result_ugrojo.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_ugrojo.get || _C_p_descriptor_p9qrj8.get,
  set: _C_p_result_ugrojo.set || _C_p_descriptor_p9qrj8.set
});

const _C_f_descriptor_oedusg = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_k7s48g = meta(3)({
  get: _C_f_descriptor_oedusg.get,
  set: _C_f_descriptor_oedusg.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_q7er2g = _C_f_result_k7s48g.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_k7s48g.get || _C_f_descriptor_oedusg.get,
  set: _C_f_result_k7s48g.set || _C_f_descriptor_oedusg.set
});

const _C_f_descriptor_3oc0u8 = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_ns3c4 = meta(3)({
  get: _C_f_descriptor_3oc0u8.get,
  set: _C_f_descriptor_3oc0u8.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_3hn1vo = _C_f_result_ns3c4.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_ns3c4.get || _C_f_descriptor_3oc0u8.get,
  set: _C_f_result_ns3c4.set || _C_f_descriptor_3oc0u8.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);