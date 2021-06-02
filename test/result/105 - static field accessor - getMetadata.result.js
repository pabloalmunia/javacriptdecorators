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

let _C_p_initializer_5dt978;

let _C_p_initializer_pp6on;

let _C_f_initializer_l830h8;

let _C_f_initializer_4hvh9o;

class C {
  static #_p_private_property_79j2fg = 10;
  static get p() {
    return this.#_p_private_property_79j2fg;
  }
  static set p(v) {
    this.#_p_private_property_79j2fg = v;
  }
  static #_f_private_property_hk924g = 20;
  static get f() {
    return this.#_f_private_property_hk924g;
  }
  static set f(v) {
    this.#_f_private_property_hk924g = v;
  }
}

const _C_f_descriptor_vqac1o = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_lh7n2 = meta(3)({
  get: _C_f_descriptor_vqac1o.get,
  set: _C_f_descriptor_vqac1o.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_4hvh9o = _C_f_result_lh7n2.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_lh7n2.get || _C_f_descriptor_vqac1o.get,
  set: _C_f_result_lh7n2.set || _C_f_descriptor_vqac1o.set
});

_C_f_descriptor_vqac1o.set.call(C, _C_f_initializer_4hvh9o(_C_f_descriptor_vqac1o.get.call(C)));

const _C_f_descriptor_o8p14g = Object.getOwnPropertyDescriptor(C, "f");

const _C_f_result_kr4i4o = meta(3)({
  get: _C_f_descriptor_o8p14g.get,
  set: _C_f_descriptor_o8p14g.set
}, {
  kind: "auto-accessor",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "f")
}) || {};

_C_f_initializer_l830h8 = _C_f_result_kr4i4o.initialize || (v => v);

Object.defineProperty(C, "f", {
  get: _C_f_result_kr4i4o.get || _C_f_descriptor_o8p14g.get,
  set: _C_f_result_kr4i4o.set || _C_f_descriptor_o8p14g.set
});

_C_f_descriptor_o8p14g.set.call(C, _C_f_initializer_l830h8(_C_f_descriptor_o8p14g.get.call(C)));

const _C_p_descriptor_0bskd = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_4c9e18 = meta(1)({
  get: _C_p_descriptor_0bskd.get,
  set: _C_p_descriptor_0bskd.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_pp6on = _C_p_result_4c9e18.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_4c9e18.get || _C_p_descriptor_0bskd.get,
  set: _C_p_result_4c9e18.set || _C_p_descriptor_0bskd.set
});

_C_p_descriptor_0bskd.set.call(C, _C_p_initializer_pp6on(_C_p_descriptor_0bskd.get.call(C)));

const _C_p_descriptor_72d5gg = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_d01cg = meta(2)({
  get: _C_p_descriptor_72d5gg.get,
  set: _C_p_descriptor_72d5gg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p")
}) || {};

_C_p_initializer_5dt978 = _C_p_result_d01cg.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_d01cg.get || _C_p_descriptor_72d5gg.get,
  set: _C_p_result_d01cg.set || _C_p_descriptor_72d5gg.set
});

_C_p_descriptor_72d5gg.set.call(C, _C_p_initializer_5dt978(_C_p_descriptor_72d5gg.get.call(C)));

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);