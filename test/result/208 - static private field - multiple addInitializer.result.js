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

const _C_p_get_symbol_ph1mig = Symbol();

const _C_p_set_symbol_k0jr = Symbol();

let _C_p_getter_hkq8do;

let _C_p_setter_nlh97g;

const _C_static_initializers_9elcro = [];

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_r2q54g = 1;
  static get #p() {
    return _C_p_getter_hkq8do.call(this);
  }
  static set #p(v) {
    return _C_p_setter_nlh97g.call(this, v);
  }
  static _C_p_getter_hkq8do() {
    return this.#_p_private_property_r2q54g;
  }
  static _C_p_setter_nlh97g(v) {
    this.#_p_private_property_r2q54g = v;
  }
  static [_C_p_get_symbol_ph1mig]() {
    return C.#p;
  }
  static [_C_p_set_symbol_k0jr](v) {
    C.#p = v;
  }
}

const _C_p_initializer_d3jci8 = {
  get: C._C_p_getter_hkq8do,
  set: C._C_p_setter_nlh97g
};

_C_p_getter_hkq8do = C._C_p_getter_hkq8do;

_C_p_setter_nlh97g = C._C_p_setter_nlh97g;

delete C._C_p_getter_hkq8do;

delete C._C_p_setter_nlh97g;

const _C_p_result_bkdip8 = addProperty("a", 1)({
  get: _C_p_getter_hkq8do,
  set: _C_p_setter_nlh97g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_ph1mig],
    set: C[_C_p_set_symbol_k0jr]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_9elcro.push(initializer)
}) || {};

_C_p_initializer_d3jci8.set.call(
  C,
  (_C_p_result_bkdip8.initialize || (v => v))(_C_p_initializer_d3jci8.get.call(C))
);

_C_p_getter_hkq8do = _C_p_result_bkdip8.get || _C_p_getter_hkq8do;

_C_p_setter_nlh97g = _C_p_result_bkdip8.set || _C_p_setter_nlh97g;

const _C_p_result_q55dt8 = addProperty("b", 2)({
  get: _C_p_getter_hkq8do,
  set: _C_p_setter_nlh97g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_ph1mig],
    set: C[_C_p_set_symbol_k0jr]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_9elcro.push(initializer)
}) || {};

_C_p_initializer_d3jci8.set.call(
  C,
  (_C_p_result_q55dt8.initialize || (v => v))(_C_p_initializer_d3jci8.get.call(C))
);

_C_p_getter_hkq8do = _C_p_result_q55dt8.get || _C_p_getter_hkq8do;

_C_p_setter_nlh97g = _C_p_result_q55dt8.set || _C_p_setter_nlh97g;

_C_static_initializers_9elcro.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_s50tlg = Symbol();

const _D_p_set_symbol_p5rv5o = Symbol();

let _D_p_getter_2mlpkg;

let _D_p_setter_v3oup;

const _D_static_initializers_bsioao = [];

class D extends C {
  static #_p_private_property_40jelo = 2;
  static get #p() {
    return _D_p_getter_2mlpkg.call(this);
  }
  static set #p(v) {
    return _D_p_setter_v3oup.call(this, v);
  }
  static _D_p_getter_2mlpkg() {
    return this.#_p_private_property_40jelo;
  }
  static _D_p_setter_v3oup(v) {
    this.#_p_private_property_40jelo = v;
  }
  static [_D_p_get_symbol_s50tlg]() {
    return D.#p;
  }
  static [_D_p_set_symbol_p5rv5o](v) {
    D.#p = v;
  }
}

const _D_p_initializer_dp16l = {
  get: D._D_p_getter_2mlpkg,
  set: D._D_p_setter_v3oup
};

_D_p_getter_2mlpkg = D._D_p_getter_2mlpkg;

_D_p_setter_v3oup = D._D_p_setter_v3oup;

delete D._D_p_getter_2mlpkg;

delete D._D_p_setter_v3oup;

const _D_p_result_2r7h4 = addProperty("c", 3)({
  get: _D_p_getter_2mlpkg,
  set: _D_p_setter_v3oup
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_s50tlg],
    set: D[_D_p_set_symbol_p5rv5o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_bsioao.push(initializer)
}) || {};

_D_p_initializer_dp16l.set.call(
  D,
  (_D_p_result_2r7h4.initialize || (v => v))(_D_p_initializer_dp16l.get.call(D))
);

_D_p_getter_2mlpkg = _D_p_result_2r7h4.get || _D_p_getter_2mlpkg;

_D_p_setter_v3oup = _D_p_result_2r7h4.set || _D_p_setter_v3oup;

const _D_p_result_91q1mo = addProperty("d", 4)({
  get: _D_p_getter_2mlpkg,
  set: _D_p_setter_v3oup
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_s50tlg],
    set: D[_D_p_set_symbol_p5rv5o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_bsioao.push(initializer)
}) || {};

_D_p_initializer_dp16l.set.call(
  D,
  (_D_p_result_91q1mo.initialize || (v => v))(_D_p_initializer_dp16l.get.call(D))
);

_D_p_getter_2mlpkg = _D_p_result_91q1mo.get || _D_p_getter_2mlpkg;

_D_p_setter_v3oup = _D_p_result_91q1mo.set || _D_p_setter_v3oup;

_D_static_initializers_bsioao.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);