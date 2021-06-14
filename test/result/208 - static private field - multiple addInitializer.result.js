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

const _C_p_get_symbol_q4mst = Symbol();

const _C_p_set_symbol_mqv46 = Symbol();

let _C_p_getter_gmt708;

let _C_p_setter_ob9as8;

const _C_static_initializers_2odljo = [];

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_f81fro = 1;
  static get #p() {
    return _C_p_getter_gmt708.call(this);
  }
  static set #p(v) {
    return _C_p_setter_ob9as8.call(this, v);
  }
  static _C_p_getter_gmt708() {
    return this.#_p_private_property_f81fro;
  }
  static _C_p_setter_ob9as8(v) {
    this.#_p_private_property_f81fro = v;
  }
  static [_C_p_get_symbol_q4mst]() {
    return C.#p;
  }
  static [_C_p_set_symbol_mqv46](v) {
    C.#p = v;
  }
}

const _C_p_initializer_d25ie8 = {
  get: C._C_p_getter_gmt708,
  set: C._C_p_setter_ob9as8
};

_C_p_getter_gmt708 = C._C_p_getter_gmt708;

_C_p_setter_ob9as8 = C._C_p_setter_ob9as8;

delete C._C_p_getter_gmt708;

delete C._C_p_setter_ob9as8;

const _C_p_result_im3fio = addProperty("a", 1)({
  get: _C_p_getter_gmt708,
  set: _C_p_setter_ob9as8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_q4mst],
    set: C[_C_p_set_symbol_mqv46]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_2odljo.push(initializer)
}) || {};

_C_p_initializer_d25ie8.set.call(
  C,
  (_C_p_result_im3fio.initialize || (v => v))(_C_p_initializer_d25ie8.get.call(C))
);

_C_p_getter_gmt708 = _C_p_result_im3fio.get || _C_p_getter_gmt708;

_C_p_setter_ob9as8 = _C_p_result_im3fio.set || _C_p_setter_ob9as8;

const _C_p_result_f0anoo = addProperty("b", 2)({
  get: _C_p_getter_gmt708,
  set: _C_p_setter_ob9as8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_q4mst],
    set: C[_C_p_set_symbol_mqv46]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_2odljo.push(initializer)
}) || {};

_C_p_initializer_d25ie8.set.call(
  C,
  (_C_p_result_f0anoo.initialize || (v => v))(_C_p_initializer_d25ie8.get.call(C))
);

_C_p_getter_gmt708 = _C_p_result_f0anoo.get || _C_p_getter_gmt708;

_C_p_setter_ob9as8 = _C_p_result_f0anoo.set || _C_p_setter_ob9as8;

_C_static_initializers_2odljo.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_lt0pj = Symbol();

const _D_p_set_symbol_aic0rg = Symbol();

let _D_p_getter_6kfrdo;

let _D_p_setter_el1fbg;

const _D_static_initializers_ippp7o = [];

class D extends C {
  static #_p_private_property_5757po = 2;
  static get #p() {
    return _D_p_getter_6kfrdo.call(this);
  }
  static set #p(v) {
    return _D_p_setter_el1fbg.call(this, v);
  }
  static _D_p_getter_6kfrdo() {
    return this.#_p_private_property_5757po;
  }
  static _D_p_setter_el1fbg(v) {
    this.#_p_private_property_5757po = v;
  }
  static [_D_p_get_symbol_lt0pj]() {
    return D.#p;
  }
  static [_D_p_set_symbol_aic0rg](v) {
    D.#p = v;
  }
}

const _D_p_initializer_j574l8 = {
  get: D._D_p_getter_6kfrdo,
  set: D._D_p_setter_el1fbg
};

_D_p_getter_6kfrdo = D._D_p_getter_6kfrdo;

_D_p_setter_el1fbg = D._D_p_setter_el1fbg;

delete D._D_p_getter_6kfrdo;

delete D._D_p_setter_el1fbg;

const _D_p_result_pg533 = addProperty("c", 3)({
  get: _D_p_getter_6kfrdo,
  set: _D_p_setter_el1fbg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_lt0pj],
    set: D[_D_p_set_symbol_aic0rg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_ippp7o.push(initializer)
}) || {};

_D_p_initializer_j574l8.set.call(
  D,
  (_D_p_result_pg533.initialize || (v => v))(_D_p_initializer_j574l8.get.call(D))
);

_D_p_getter_6kfrdo = _D_p_result_pg533.get || _D_p_getter_6kfrdo;

_D_p_setter_el1fbg = _D_p_result_pg533.set || _D_p_setter_el1fbg;

const _D_p_result_rua7 = addProperty("d", 4)({
  get: _D_p_getter_6kfrdo,
  set: _D_p_setter_el1fbg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_lt0pj],
    set: D[_D_p_set_symbol_aic0rg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_ippp7o.push(initializer)
}) || {};

_D_p_initializer_j574l8.set.call(
  D,
  (_D_p_result_rua7.initialize || (v => v))(_D_p_initializer_j574l8.get.call(D))
);

_D_p_getter_6kfrdo = _D_p_result_rua7.get || _D_p_getter_6kfrdo;

_D_p_setter_el1fbg = _D_p_result_rua7.set || _D_p_setter_el1fbg;

_D_static_initializers_ippp7o.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);