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

let _C_f_initializer_cq1kfg;

let _C_f_initializer_d2brgo;

let _C_p_initializer_988qmg;

let _C_p_initializer_r0n7sg;

class C {
  static #_p_private_property_pi3bb8 = 10;
  static get p() {
    return this.#_p_private_property_pi3bb8;
  }
  static set p(v) {
    this.#_p_private_property_pi3bb8 = v;
  }
  static #_f_private_property_v7phs = 20;
  static get f() {
    return this.#_f_private_property_v7phs;
  }
  static set f(v) {
    this.#_f_private_property_v7phs = v;
  }
}

const _C_p_descriptor_dcrd8g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_o3vl9o = meta(1)({
  get: _C_p_descriptor_dcrd8g.get,
  set: _C_p_descriptor_dcrd8g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_r0n7sg = _C_p_result_o3vl9o.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_o3vl9o.get || _C_p_descriptor_dcrd8g.get,
  set: _C_p_result_o3vl9o.set || _C_p_descriptor_dcrd8g.set
});

_C_p_descriptor_dcrd8g.set.call(C, _C_p_initializer_r0n7sg(_C_p_descriptor_dcrd8g.get.call(C)));

const _C_p_descriptor_oe24b8 = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_si9tj8 = meta(2)({
  get: _C_p_descriptor_oe24b8.get,
  set: _C_p_descriptor_oe24b8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_988qmg = _C_p_result_si9tj8.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_si9tj8.get || _C_p_descriptor_oe24b8.get,
  set: _C_p_result_si9tj8.set || _C_p_descriptor_oe24b8.set
});

_C_p_descriptor_oe24b8.set.call(C, _C_p_initializer_988qmg(_C_p_descriptor_oe24b8.get.call(C)));

const _C_f_descriptor_6ckf48 = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_4hi10g = meta(3)({
  get: _C_f_descriptor_6ckf48.get,
  set: _C_f_descriptor_6ckf48.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_d2brgo = _C_f_result_4hi10g.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_4hi10g.get || _C_f_descriptor_6ckf48.get,
  set: _C_f_result_4hi10g.set || _C_f_descriptor_6ckf48.set
});

_C_f_descriptor_6ckf48.set.call(C, _C_f_initializer_d2brgo(_C_f_descriptor_6ckf48.get.call(C)));

const _C_f_descriptor_pau2vo = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_cfbb7g = meta(3)({
  get: _C_f_descriptor_pau2vo.get,
  set: _C_f_descriptor_pau2vo.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_cq1kfg = _C_f_result_cfbb7g.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_cfbb7g.get || _C_f_descriptor_pau2vo.get,
  set: _C_f_result_cfbb7g.set || _C_f_descriptor_pau2vo.set
});

_C_f_descriptor_pau2vo.set.call(C, _C_f_initializer_cq1kfg(_C_f_descriptor_pau2vo.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);