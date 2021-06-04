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

let _C_f_initializer_nhug0g;

let _C_f_initializer_v3ji7o;

let _C_p_initializer_ajfqe;

let _C_p_initializer_7jns;

class C {
  #_p_private_property_o3nolg = _C_p_initializer_7jns.call(this, _C_p_initializer_ajfqe.call(this, 10));
  get p() {
    return this.#_p_private_property_o3nolg;
  }
  set p(v) {
    this.#_p_private_property_o3nolg = v;
  }
  #_f_private_property_sk2k5g = _C_f_initializer_v3ji7o.call(this, _C_f_initializer_nhug0g.call(this, 20));
  get f() {
    return this.#_f_private_property_sk2k5g;
  }
  set f(v) {
    this.#_f_private_property_sk2k5g = v;
  }
}

const _C_p_descriptor_u0mqsg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_9ncru8 = meta(1)({
  get: _C_p_descriptor_u0mqsg.get,
  set: _C_p_descriptor_u0mqsg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_7jns = _C_p_result_9ncru8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_9ncru8.get || _C_p_descriptor_u0mqsg.get,
  set: _C_p_result_9ncru8.set || _C_p_descriptor_u0mqsg.set
});

const _C_p_descriptor_k5t47g = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_20pdm = meta(2)({
  get: _C_p_descriptor_k5t47g.get,
  set: _C_p_descriptor_k5t47g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_ajfqe = _C_p_result_20pdm.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_20pdm.get || _C_p_descriptor_k5t47g.get,
  set: _C_p_result_20pdm.set || _C_p_descriptor_k5t47g.set
});

const _C_f_descriptor_10pclo = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_rrokao = meta(3)({
  get: _C_f_descriptor_10pclo.get,
  set: _C_f_descriptor_10pclo.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_v3ji7o = _C_f_result_rrokao.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_rrokao.get || _C_f_descriptor_10pclo.get,
  set: _C_f_result_rrokao.set || _C_f_descriptor_10pclo.set
});

const _C_f_descriptor_5beb3o = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_h38bug = meta(3)({
  get: _C_f_descriptor_5beb3o.get,
  set: _C_f_descriptor_5beb3o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_nhug0g = _C_f_result_h38bug.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_h38bug.get || _C_f_descriptor_5beb3o.get,
  set: _C_f_result_h38bug.set || _C_f_descriptor_5beb3o.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);