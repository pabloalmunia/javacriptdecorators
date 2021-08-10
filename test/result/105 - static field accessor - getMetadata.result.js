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

let _C_f_initializer_np9qdg;

let _C_f_initializer_u5np7;

let _C_p_initializer_m2mq0g;

let _C_p_initializer_aejr9;

class __C_h3408 {
  static #_p_private_property_lljcco = 10;
  static get p() {
    return this.#_p_private_property_lljcco;
  }
  static set p(v) {
    this.#_p_private_property_lljcco = v;
  }
  static #_f_private_property_9k3bg = 20;
  static get f() {
    return this.#_f_private_property_9k3bg;
  }
  static set f(v) {
    this.#_f_private_property_9k3bg = v;
  }
}

const ___C_h3408_p_descriptor_6iu9sg = Object.getOwnPropertyDescriptor(__C_h3408, "p");

const ___C_h3408_p_result_64lel8 = meta(1)({
  get: ___C_h3408_p_descriptor_6iu9sg.get,
  set: ___C_h3408_p_descriptor_6iu9sg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h3408, "public", "p")
}) || {};

_C_p_initializer_aejr9 = ___C_h3408_p_result_64lel8.initialize || (v => v);

Object.defineProperty(__C_h3408, "p", {
  get: ___C_h3408_p_result_64lel8.get || ___C_h3408_p_descriptor_6iu9sg.get,
  set: ___C_h3408_p_result_64lel8.set || ___C_h3408_p_descriptor_6iu9sg.set
});

___C_h3408_p_descriptor_6iu9sg.set.call(
  __C_h3408,
  _C_p_initializer_aejr9(___C_h3408_p_descriptor_6iu9sg.get.call(__C_h3408))
);

const ___C_h3408_p_descriptor_i9mclg = Object.getOwnPropertyDescriptor(__C_h3408, "p");

const ___C_h3408_p_result_hdq1p8 = meta(2)({
  get: ___C_h3408_p_descriptor_i9mclg.get,
  set: ___C_h3408_p_descriptor_i9mclg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h3408, "public", "p")
}) || {};

_C_p_initializer_m2mq0g = ___C_h3408_p_result_hdq1p8.initialize || (v => v);

Object.defineProperty(__C_h3408, "p", {
  get: ___C_h3408_p_result_hdq1p8.get || ___C_h3408_p_descriptor_i9mclg.get,
  set: ___C_h3408_p_result_hdq1p8.set || ___C_h3408_p_descriptor_i9mclg.set
});

___C_h3408_p_descriptor_i9mclg.set.call(
  __C_h3408,
  _C_p_initializer_m2mq0g(___C_h3408_p_descriptor_i9mclg.get.call(__C_h3408))
);

const ___C_h3408_f_descriptor_ip0098 = Object.getOwnPropertyDescriptor(__C_h3408, "f");

const ___C_h3408_f_result_soci98 = meta(3)({
  get: ___C_h3408_f_descriptor_ip0098.get,
  set: ___C_h3408_f_descriptor_ip0098.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h3408, "public", "f")
}) || {};

_C_f_initializer_u5np7 = ___C_h3408_f_result_soci98.initialize || (v => v);

Object.defineProperty(__C_h3408, "f", {
  get: ___C_h3408_f_result_soci98.get || ___C_h3408_f_descriptor_ip0098.get,
  set: ___C_h3408_f_result_soci98.set || ___C_h3408_f_descriptor_ip0098.set
});

___C_h3408_f_descriptor_ip0098.set.call(
  __C_h3408,
  _C_f_initializer_u5np7(___C_h3408_f_descriptor_ip0098.get.call(__C_h3408))
);

const ___C_h3408_f_descriptor_9odoe8 = Object.getOwnPropertyDescriptor(__C_h3408, "f");

const ___C_h3408_f_result_p166kg = meta(3)({
  get: ___C_h3408_f_descriptor_9odoe8.get,
  set: ___C_h3408_f_descriptor_9odoe8.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_h3408, "public", "f")
}) || {};

_C_f_initializer_np9qdg = ___C_h3408_f_result_p166kg.initialize || (v => v);

Object.defineProperty(__C_h3408, "f", {
  get: ___C_h3408_f_result_p166kg.get || ___C_h3408_f_descriptor_9odoe8.get,
  set: ___C_h3408_f_result_p166kg.set || ___C_h3408_f_descriptor_9odoe8.set
});

___C_h3408_f_descriptor_9odoe8.set.call(
  __C_h3408,
  _C_f_initializer_np9qdg(___C_h3408_f_descriptor_9odoe8.get.call(__C_h3408))
);

let C = __C_h3408;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);