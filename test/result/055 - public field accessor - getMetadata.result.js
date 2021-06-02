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
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
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

let _C_p_initializer_40b5qg;

let _C_p_initializer_ja5lu8;

let _C_f_initializer_eujmhg;

let _C_f_initializer_k2c2ao;

class C {
  #_p_private_property_legkp8 = _C_p_initializer_ja5lu8.call(this, _C_p_initializer_40b5qg.call(this, 10));
  get p() {
    return this.#_p_private_property_legkp8;
  }
  set p(v) {
    this.#_p_private_property_legkp8 = v;
  }
  #_f_private_property_q90b3 = _C_f_initializer_k2c2ao.call(this, _C_f_initializer_eujmhg.call(this, 20));
  get f() {
    return this.#_f_private_property_q90b3;
  }
  set f(v) {
    this.#_f_private_property_q90b3 = v;
  }
}

const _C_f_descriptor_r79bno = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_tppld = meta(3)({
  get: _C_f_descriptor_r79bno.get,
  set: _C_f_descriptor_r79bno.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_k2c2ao = _C_f_result_tppld.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_tppld.get || _C_f_descriptor_r79bno.get,
  set: _C_f_result_tppld.set || _C_f_descriptor_r79bno.set
});

const _C_f_descriptor_4e4v08 = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_u44odg = meta(3)({
  get: _C_f_descriptor_4e4v08.get,
  set: _C_f_descriptor_4e4v08.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_eujmhg = _C_f_result_u44odg.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_u44odg.get || _C_f_descriptor_4e4v08.get,
  set: _C_f_result_u44odg.set || _C_f_descriptor_4e4v08.set
});

const _C_p_descriptor_3tkt7o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_12naoo = meta(1)({
  get: _C_p_descriptor_3tkt7o.get,
  set: _C_p_descriptor_3tkt7o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_ja5lu8 = _C_p_result_12naoo.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_12naoo.get || _C_p_descriptor_3tkt7o.get,
  set: _C_p_result_12naoo.set || _C_p_descriptor_3tkt7o.set
});

const _C_p_descriptor_uml02 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_bpu88 = meta(2)({
  get: _C_p_descriptor_uml02.get,
  set: _C_p_descriptor_uml02.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_40b5qg = _C_p_result_bpu88.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_bpu88.get || _C_p_descriptor_uml02.get,
  set: _C_p_result_bpu88.set || _C_p_descriptor_uml02.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);