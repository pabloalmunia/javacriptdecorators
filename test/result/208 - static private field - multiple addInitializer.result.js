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

const _C_p_get_symbol_6qagj8 = Symbol();

const _C_p_set_symbol_u3fjag = Symbol();

let _C_p_getter_pqcb2g;

let _C_p_setter_67jd5;

const _C_static_initializers_ik3bbg = [];

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_m2e62 = 1;
  static get #p() {
    return _C_p_getter_pqcb2g.call(this);
  }
  static set #p(v) {
    return _C_p_setter_67jd5.call(this, v);
  }
  static _C_p_getter_pqcb2g() {
    return this.#_p_private_property_m2e62;
  }
  static _C_p_setter_67jd5(v) {
    this.#_p_private_property_m2e62 = v;
  }
  static [_C_p_get_symbol_6qagj8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_u3fjag](v) {
    C.#p = v;
  }
}

const _C_p_initializer_q6l7bo = {
  get: C._C_p_getter_pqcb2g,
  set: C._C_p_setter_67jd5
};

_C_p_getter_pqcb2g = C._C_p_getter_pqcb2g;

_C_p_setter_67jd5 = C._C_p_setter_67jd5;

delete C._C_p_getter_pqcb2g;

delete C._C_p_setter_67jd5;

const _C_p_result_80l9tg = addProperty("a", 1)({
  get: _C_p_getter_pqcb2g,
  set: _C_p_setter_67jd5
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_6qagj8],
    set: C[_C_p_set_symbol_u3fjag]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_ik3bbg.push(initializer)
}) || {};

_C_p_initializer_q6l7bo.set.call(
  C,
  (_C_p_result_80l9tg.initialize || (v => v))(_C_p_initializer_q6l7bo.get.call(C))
);

_C_p_getter_pqcb2g = _C_p_result_80l9tg.get || _C_p_getter_pqcb2g;

_C_p_setter_67jd5 = _C_p_result_80l9tg.set || _C_p_setter_67jd5;

const _C_p_result_lbhq68 = addProperty("b", 2)({
  get: _C_p_getter_pqcb2g,
  set: _C_p_setter_67jd5
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_6qagj8],
    set: C[_C_p_set_symbol_u3fjag]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_ik3bbg.push(initializer)
}) || {};

_C_p_initializer_q6l7bo.set.call(
  C,
  (_C_p_result_lbhq68.initialize || (v => v))(_C_p_initializer_q6l7bo.get.call(C))
);

_C_p_getter_pqcb2g = _C_p_result_lbhq68.get || _C_p_getter_pqcb2g;

_C_p_setter_67jd5 = _C_p_result_lbhq68.set || _C_p_setter_67jd5;

_C_static_initializers_ik3bbg.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_57d4t8 = Symbol();

const _D_p_set_symbol_ipnm6g = Symbol();

let _D_p_getter_gmb94o;

let _D_p_setter_a7lo7o;

const _D_static_initializers_3jrma8 = [];

class D extends C {
  static #_p_private_property_mkqld8 = 2;
  static get #p() {
    return _D_p_getter_gmb94o.call(this);
  }
  static set #p(v) {
    return _D_p_setter_a7lo7o.call(this, v);
  }
  static _D_p_getter_gmb94o() {
    return this.#_p_private_property_mkqld8;
  }
  static _D_p_setter_a7lo7o(v) {
    this.#_p_private_property_mkqld8 = v;
  }
  static [_D_p_get_symbol_57d4t8]() {
    return D.#p;
  }
  static [_D_p_set_symbol_ipnm6g](v) {
    D.#p = v;
  }
}

const _D_p_initializer_hnmm5 = {
  get: D._D_p_getter_gmb94o,
  set: D._D_p_setter_a7lo7o
};

_D_p_getter_gmb94o = D._D_p_getter_gmb94o;

_D_p_setter_a7lo7o = D._D_p_setter_a7lo7o;

delete D._D_p_getter_gmb94o;

delete D._D_p_setter_a7lo7o;

const _D_p_result_de0hoo = addProperty("c", 3)({
  get: _D_p_getter_gmb94o,
  set: _D_p_setter_a7lo7o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_57d4t8],
    set: D[_D_p_set_symbol_ipnm6g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_3jrma8.push(initializer)
}) || {};

_D_p_initializer_hnmm5.set.call(
  D,
  (_D_p_result_de0hoo.initialize || (v => v))(_D_p_initializer_hnmm5.get.call(D))
);

_D_p_getter_gmb94o = _D_p_result_de0hoo.get || _D_p_getter_gmb94o;

_D_p_setter_a7lo7o = _D_p_result_de0hoo.set || _D_p_setter_a7lo7o;

const _D_p_result_1p1n08 = addProperty("d", 4)({
  get: _D_p_getter_gmb94o,
  set: _D_p_setter_a7lo7o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_57d4t8],
    set: D[_D_p_set_symbol_ipnm6g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_3jrma8.push(initializer)
}) || {};

_D_p_initializer_hnmm5.set.call(
  D,
  (_D_p_result_1p1n08.initialize || (v => v))(_D_p_initializer_hnmm5.get.call(D))
);

_D_p_getter_gmb94o = _D_p_result_1p1n08.get || _D_p_getter_gmb94o;

_D_p_setter_a7lo7o = _D_p_result_1p1n08.set || _D_p_setter_a7lo7o;

_D_static_initializers_3jrma8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);