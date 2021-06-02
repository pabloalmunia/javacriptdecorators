function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "auto-accessor" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
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

let _C_p_initializer_soc0o;

const _C_static_initializers_s715l = [];

let _C_p_initializer_hvv1po;

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_4cpjeo = 1;
  static get p() {
    return this.#_p_private_property_4cpjeo;
  }
  static set p(v) {
    this.#_p_private_property_4cpjeo = v;
  }
}

const _C_p_descriptor_e2le7g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_6ka78g = addProperty("a", 1)({
  get: _C_p_descriptor_e2le7g.get,
  set: _C_p_descriptor_e2le7g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_s715l.push(initializer)
}) || {};

_C_p_initializer_hvv1po = _C_p_result_6ka78g.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_6ka78g.get || _C_p_descriptor_e2le7g.get,
  set: _C_p_result_6ka78g.set || _C_p_descriptor_e2le7g.set
});

_C_p_descriptor_e2le7g.set.call(C, _C_p_initializer_hvv1po(_C_p_descriptor_e2le7g.get.call(C)));

const _C_p_descriptor_j4so9g = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_qp8jn = addProperty("b", 2)({
  get: _C_p_descriptor_j4so9g.get,
  set: _C_p_descriptor_j4so9g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_s715l.push(initializer)
}) || {};

_C_p_initializer_soc0o = _C_p_result_qp8jn.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_qp8jn.get || _C_p_descriptor_j4so9g.get,
  set: _C_p_result_qp8jn.set || _C_p_descriptor_j4so9g.set
});

_C_p_descriptor_j4so9g.set.call(C, _C_p_initializer_soc0o(_C_p_descriptor_j4so9g.get.call(C)));

_C_static_initializers_s715l.forEach(initialize => initialize.call(C, C));

let _D_p_initializer_4e0am;

const _D_static_initializers_9fn3b8 = [];

let _D_p_initializer_1lqge8;

class D extends C {
  static #_p_private_property_oi1jr8 = 2;
  static get p() {
    return this.#_p_private_property_oi1jr8;
  }
  static set p(v) {
    this.#_p_private_property_oi1jr8 = v;
  }
}

const _D_p_descriptor_83ai = Object.getOwnPropertyDescriptor(D, "p");

const _D_p_result_njhgs8 = addProperty("c", 3)({
  get: _D_p_descriptor_83ai.get,
  set: _D_p_descriptor_83ai.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_9fn3b8.push(initializer)
}) || {};

_D_p_initializer_1lqge8 = _D_p_result_njhgs8.initialize || (v => v);

Object.defineProperty(D, "p", {
  get: _D_p_result_njhgs8.get || _D_p_descriptor_83ai.get,
  set: _D_p_result_njhgs8.set || _D_p_descriptor_83ai.set
});

_D_p_descriptor_83ai.set.call(D, _D_p_initializer_1lqge8(_D_p_descriptor_83ai.get.call(D)));

const _D_p_descriptor_29kqq = Object.getOwnPropertyDescriptor(D, "p");

const _D_p_result_gbauu8 = addProperty("d", 4)({
  get: _D_p_descriptor_29kqq.get,
  set: _D_p_descriptor_29kqq.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_9fn3b8.push(initializer)
}) || {};

_D_p_initializer_4e0am = _D_p_result_gbauu8.initialize || (v => v);

Object.defineProperty(D, "p", {
  get: _D_p_result_gbauu8.get || _D_p_descriptor_29kqq.get,
  set: _D_p_result_gbauu8.set || _D_p_descriptor_29kqq.set
});

_D_p_descriptor_29kqq.set.call(D, _D_p_initializer_4e0am(_D_p_descriptor_29kqq.get.call(D)));

_D_static_initializers_9fn3b8.forEach(initialize => initialize.call(D, D));

console.assert(C.p === 1);

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.p === 2);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);