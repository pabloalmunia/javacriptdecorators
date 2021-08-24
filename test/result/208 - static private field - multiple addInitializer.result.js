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

const _C_p_get_symbol_5su2g8 = Symbol();

const _C_p_set_symbol_urtvsg = Symbol();

let _C_p_getter_1plqs8;

let _C_p_setter_qbki4;

const _C_static_initializers_60njug = [];

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_3u7fj = 1;
  static get #p() {
    return _C_p_getter_1plqs8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_qbki4.call(this, v);
  }
  static _C_p_getter_1plqs8() {
    return this.#_p_private_property_3u7fj;
  }
  static _C_p_setter_qbki4(v) {
    this.#_p_private_property_3u7fj = v;
  }
  static [_C_p_get_symbol_5su2g8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_urtvsg](v) {
    C.#p = v;
  }
}

const _C_p_initializer_tu6tgo = {
  get: C._C_p_getter_1plqs8,
  set: C._C_p_setter_qbki4
};

_C_p_getter_1plqs8 = C._C_p_getter_1plqs8;

_C_p_setter_qbki4 = C._C_p_setter_qbki4;

delete C._C_p_getter_1plqs8;

delete C._C_p_setter_qbki4;

const _C_p_result_gtq1dg = addProperty("a", 1)({
  get: _C_p_getter_1plqs8,
  set: _C_p_setter_qbki4
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_5su2g8],
    set: C[_C_p_set_symbol_urtvsg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_60njug.push(initializer)
}) || {};

_C_p_initializer_tu6tgo.set.call(
  C,
  (_C_p_result_gtq1dg.initialize || (v => v))(_C_p_initializer_tu6tgo.get.call(C))
);

_C_p_getter_1plqs8 = _C_p_result_gtq1dg.get || _C_p_getter_1plqs8;

_C_p_setter_qbki4 = _C_p_result_gtq1dg.set || _C_p_setter_qbki4;

const _C_p_result_qa9be8 = addProperty("b", 2)({
  get: _C_p_getter_1plqs8,
  set: _C_p_setter_qbki4
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_5su2g8],
    set: C[_C_p_set_symbol_urtvsg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_60njug.push(initializer)
}) || {};

_C_p_initializer_tu6tgo.set.call(
  C,
  (_C_p_result_qa9be8.initialize || (v => v))(_C_p_initializer_tu6tgo.get.call(C))
);

_C_p_getter_1plqs8 = _C_p_result_qa9be8.get || _C_p_getter_1plqs8;

_C_p_setter_qbki4 = _C_p_result_qa9be8.set || _C_p_setter_qbki4;

_C_static_initializers_60njug.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_9b4spg = Symbol();

const _D_p_set_symbol_itjk0g = Symbol();

let _D_p_getter_hgtln8;

let _D_p_setter_gccn6g;

const _D_static_initializers_r5o8lg = [];

class D extends C {
  static #_p_private_property_4r15to = 2;
  static get #p() {
    return _D_p_getter_hgtln8.call(this);
  }
  static set #p(v) {
    return _D_p_setter_gccn6g.call(this, v);
  }
  static _D_p_getter_hgtln8() {
    return this.#_p_private_property_4r15to;
  }
  static _D_p_setter_gccn6g(v) {
    this.#_p_private_property_4r15to = v;
  }
  static [_D_p_get_symbol_9b4spg]() {
    return D.#p;
  }
  static [_D_p_set_symbol_itjk0g](v) {
    D.#p = v;
  }
}

const _D_p_initializer_h2e688 = {
  get: D._D_p_getter_hgtln8,
  set: D._D_p_setter_gccn6g
};

_D_p_getter_hgtln8 = D._D_p_getter_hgtln8;

_D_p_setter_gccn6g = D._D_p_setter_gccn6g;

delete D._D_p_getter_hgtln8;

delete D._D_p_setter_gccn6g;

const _D_p_result_u9h788 = addProperty("c", 3)({
  get: _D_p_getter_hgtln8,
  set: _D_p_setter_gccn6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_9b4spg],
    set: D[_D_p_set_symbol_itjk0g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", "#p"),
  addInitializer: initializer => _D_static_initializers_r5o8lg.push(initializer)
}) || {};

_D_p_initializer_h2e688.set.call(
  D,
  (_D_p_result_u9h788.initialize || (v => v))(_D_p_initializer_h2e688.get.call(D))
);

_D_p_getter_hgtln8 = _D_p_result_u9h788.get || _D_p_getter_hgtln8;

_D_p_setter_gccn6g = _D_p_result_u9h788.set || _D_p_setter_gccn6g;

const _D_p_result_0jacd8 = addProperty("d", 4)({
  get: _D_p_getter_hgtln8,
  set: _D_p_setter_gccn6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_9b4spg],
    set: D[_D_p_set_symbol_itjk0g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", "#p"),
  addInitializer: initializer => _D_static_initializers_r5o8lg.push(initializer)
}) || {};

_D_p_initializer_h2e688.set.call(
  D,
  (_D_p_result_0jacd8.initialize || (v => v))(_D_p_initializer_h2e688.get.call(D))
);

_D_p_getter_hgtln8 = _D_p_result_0jacd8.get || _D_p_getter_hgtln8;

_D_p_setter_gccn6g = _D_p_result_0jacd8.set || _D_p_setter_gccn6g;

_D_static_initializers_r5o8lg.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);