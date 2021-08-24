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

let _C_f_initializer_b4ebuo;

let _C_f_initializer_rh6qi;

let _C_p_initializer_e4osgo;

let _C_p_initializer_3felg8;

class C {
  #_p_private_property_m5sceg = _C_p_initializer_3felg8.call(this, _C_p_initializer_e4osgo.call(this, 10));
  get p() {
    return this.#_p_private_property_m5sceg;
  }
  set p(v) {
    this.#_p_private_property_m5sceg = v;
  }
  #_f_private_property_dep43g = _C_f_initializer_rh6qi.call(this, _C_f_initializer_b4ebuo.call(this, 20));
  get f() {
    return this.#_f_private_property_dep43g;
  }
  set f(v) {
    this.#_f_private_property_dep43g = v;
  }
}

const _C_p_descriptor_hb0it8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_t9dda = meta(1)({
  get: _C_p_descriptor_hb0it8.get,
  set: _C_p_descriptor_hb0it8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_3felg8 = _C_p_result_t9dda.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_t9dda.get || _C_p_descriptor_hb0it8.get,
  set: _C_p_result_t9dda.set || _C_p_descriptor_hb0it8.set
});

const _C_p_descriptor_9gr7b = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_6uv6bo = meta(2)({
  get: _C_p_descriptor_9gr7b.get,
  set: _C_p_descriptor_9gr7b.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_e4osgo = _C_p_result_6uv6bo.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_6uv6bo.get || _C_p_descriptor_9gr7b.get,
  set: _C_p_result_6uv6bo.set || _C_p_descriptor_9gr7b.set
});

const _C_f_descriptor_jq0apo = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_44c14o = meta(3)({
  get: _C_f_descriptor_jq0apo.get,
  set: _C_f_descriptor_jq0apo.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_rh6qi = _C_f_result_44c14o.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_44c14o.get || _C_f_descriptor_jq0apo.get,
  set: _C_f_result_44c14o.set || _C_f_descriptor_jq0apo.set
});

const _C_f_descriptor_qk2slg = Object.getOwnPropertyDescriptor(C.prototype, "f");

const _C_f_result_lhh76 = meta(3)({
  get: _C_f_descriptor_qk2slg.get,
  set: _C_f_descriptor_qk2slg.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "f")
}) || {};

_C_f_initializer_b4ebuo = _C_f_result_lhh76.initialize || (v => v);

Object.defineProperty(C.prototype, "f", {
  get: _C_f_result_lhh76.get || _C_f_descriptor_qk2slg.get,
  set: _C_f_result_lhh76.set || _C_f_descriptor_qk2slg.set
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 3);

console.assert(C.prototype[Symbol.metadata][META].public.f === 6);