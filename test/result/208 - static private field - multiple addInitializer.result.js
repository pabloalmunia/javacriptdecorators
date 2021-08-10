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

const _C_p_get_symbol_f7bglo = Symbol();

const _C_p_set_symbol_tvrrn = Symbol();

let _C_p_getter_r9g7no;

let _C_p_setter_scrbu;

const _C_static_initializers_72btno = [];

class __C_ms07so {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_nqldoo = 1;
  static get #p() {
    return _C_p_getter_r9g7no.call(this);
  }
  static set #p(v) {
    return _C_p_setter_scrbu.call(this, v);
  }
  static _C_p_getter_r9g7no() {
    return this.#_p_private_property_nqldoo;
  }
  static _C_p_setter_scrbu(v) {
    this.#_p_private_property_nqldoo = v;
  }
  static [_C_p_get_symbol_f7bglo]() {
    return __C_ms07so.#p;
  }
  static [_C_p_set_symbol_tvrrn](v) {
    __C_ms07so.#p = v;
  }
}

const _C_p_initializer_v8jj7o = {
  get: __C_ms07so._C_p_getter_r9g7no,
  set: __C_ms07so._C_p_setter_scrbu
};

_C_p_getter_r9g7no = __C_ms07so._C_p_getter_r9g7no;

_C_p_setter_scrbu = __C_ms07so._C_p_setter_scrbu;

delete __C_ms07so._C_p_getter_r9g7no;

delete __C_ms07so._C_p_setter_scrbu;

const _C_p_result_lpdlbg = addProperty("a", 1)({
  get: _C_p_getter_r9g7no,
  set: _C_p_setter_scrbu
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_ms07so[_C_p_get_symbol_f7bglo],
    set: __C_ms07so[_C_p_set_symbol_tvrrn]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_ms07so, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_72btno.push(initializer)
}) || {};

_C_p_initializer_v8jj7o.set.call(
  __C_ms07so,
  (_C_p_result_lpdlbg.initialize || (v => v))(_C_p_initializer_v8jj7o.get.call(__C_ms07so))
);

_C_p_getter_r9g7no = _C_p_result_lpdlbg.get || _C_p_getter_r9g7no;

_C_p_setter_scrbu = _C_p_result_lpdlbg.set || _C_p_setter_scrbu;

const _C_p_result_l0hug8 = addProperty("b", 2)({
  get: _C_p_getter_r9g7no,
  set: _C_p_setter_scrbu
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_ms07so[_C_p_get_symbol_f7bglo],
    set: __C_ms07so[_C_p_set_symbol_tvrrn]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_ms07so, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_72btno.push(initializer)
}) || {};

_C_p_initializer_v8jj7o.set.call(
  __C_ms07so,
  (_C_p_result_l0hug8.initialize || (v => v))(_C_p_initializer_v8jj7o.get.call(__C_ms07so))
);

_C_p_getter_r9g7no = _C_p_result_l0hug8.get || _C_p_getter_r9g7no;

_C_p_setter_scrbu = _C_p_result_l0hug8.set || _C_p_setter_scrbu;

let C = __C_ms07so;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_72btno.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_89e9p8 = Symbol();

const _D_p_set_symbol_vr65vg = Symbol();

let _D_p_getter_k6q3so;

let _D_p_setter_c12h1g;

const _D_static_initializers_mar2a = [];

class __D_nuhjpo extends C {
  static #_p_private_property_niadbo = 2;
  static get #p() {
    return _D_p_getter_k6q3so.call(this);
  }
  static set #p(v) {
    return _D_p_setter_c12h1g.call(this, v);
  }
  static _D_p_getter_k6q3so() {
    return this.#_p_private_property_niadbo;
  }
  static _D_p_setter_c12h1g(v) {
    this.#_p_private_property_niadbo = v;
  }
  static [_D_p_get_symbol_89e9p8]() {
    return __D_nuhjpo.#p;
  }
  static [_D_p_set_symbol_vr65vg](v) {
    __D_nuhjpo.#p = v;
  }
}

const _D_p_initializer_lru1qo = {
  get: __D_nuhjpo._D_p_getter_k6q3so,
  set: __D_nuhjpo._D_p_setter_c12h1g
};

_D_p_getter_k6q3so = __D_nuhjpo._D_p_getter_k6q3so;

_D_p_setter_c12h1g = __D_nuhjpo._D_p_setter_c12h1g;

delete __D_nuhjpo._D_p_getter_k6q3so;

delete __D_nuhjpo._D_p_setter_c12h1g;

const _D_p_result_l30ih8 = addProperty("c", 3)({
  get: _D_p_getter_k6q3so,
  set: _D_p_setter_c12h1g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __D_nuhjpo[_D_p_get_symbol_89e9p8],
    set: __D_nuhjpo[_D_p_set_symbol_vr65vg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__D_nuhjpo, "private", "#p"),
  addInitializer: initializer => _D_static_initializers_mar2a.push(initializer)
}) || {};

_D_p_initializer_lru1qo.set.call(
  __D_nuhjpo,
  (_D_p_result_l30ih8.initialize || (v => v))(_D_p_initializer_lru1qo.get.call(__D_nuhjpo))
);

_D_p_getter_k6q3so = _D_p_result_l30ih8.get || _D_p_getter_k6q3so;

_D_p_setter_c12h1g = _D_p_result_l30ih8.set || _D_p_setter_c12h1g;

const _D_p_result_frvip = addProperty("d", 4)({
  get: _D_p_getter_k6q3so,
  set: _D_p_setter_c12h1g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __D_nuhjpo[_D_p_get_symbol_89e9p8],
    set: __D_nuhjpo[_D_p_set_symbol_vr65vg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__D_nuhjpo, "private", "#p"),
  addInitializer: initializer => _D_static_initializers_mar2a.push(initializer)
}) || {};

_D_p_initializer_lru1qo.set.call(
  __D_nuhjpo,
  (_D_p_result_frvip.initialize || (v => v))(_D_p_initializer_lru1qo.get.call(__D_nuhjpo))
);

_D_p_getter_k6q3so = _D_p_result_frvip.get || _D_p_getter_k6q3so;

_D_p_setter_c12h1g = _D_p_result_frvip.set || _D_p_setter_c12h1g;

let D = __D_nuhjpo;

Object.defineProperty(D, "name", {
  value: "D"
});

_D_static_initializers_mar2a.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);