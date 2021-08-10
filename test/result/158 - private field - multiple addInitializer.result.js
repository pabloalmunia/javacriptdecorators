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

const _C_p_get_symbol_skka08 = Symbol();

const _C_p_set_symbol_0b0sm8 = Symbol();

let _C_p_getter_o5uc38;

let _C_p_setter_b385ko;

let _C_p_initializer_ntsn8g;

const _C_member_initializers_d54kr8 = [];

let _C_p_initializer_6n1v18;

class __C_5331b8 {
  constructor() {
    this.z = 100;
    _C_member_initializers_d54kr8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_pn6pc8 = _C_p_initializer_6n1v18.call(this, _C_p_initializer_ntsn8g.call(this, 1));
  get #p() {
    return _C_p_getter_o5uc38.call(this);
  }
  set #p(v) {
    return _C_p_setter_b385ko.call(this, v);
  }
  static _C_p_getter_o5uc38() {
    return this.#_p_private_property_pn6pc8;
  }
  static _C_p_setter_b385ko(v) {
    this.#_p_private_property_pn6pc8 = v;
  }
  [_C_p_get_symbol_skka08]() {
    return this.#p;
  }
  [_C_p_set_symbol_0b0sm8](v) {
    this.#p = v;
  }
}

_C_p_getter_o5uc38 = __C_5331b8._C_p_getter_o5uc38;

_C_p_setter_b385ko = __C_5331b8._C_p_setter_b385ko;

delete __C_5331b8._C_p_getter_o5uc38;

delete __C_5331b8._C_p_setter_b385ko;

const _C_p_result_8f6e88 = addProperty("a", 1)({
  get: _C_p_getter_o5uc38,
  set: _C_p_setter_b385ko
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_5331b8.prototype[_C_p_get_symbol_skka08],
    set: __C_5331b8.prototype[_C_p_set_symbol_0b0sm8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_5331b8.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_d54kr8.push(initializer)
}) || {};

_C_p_initializer_6n1v18 = _C_p_result_8f6e88.initialize || (v => v);

_C_p_getter_o5uc38 = _C_p_result_8f6e88.get || _C_p_getter_o5uc38;

_C_p_setter_b385ko = _C_p_result_8f6e88.set || _C_p_setter_b385ko;

const _C_p_result_3evoj8 = addProperty("b", 2)({
  get: _C_p_getter_o5uc38,
  set: _C_p_setter_b385ko
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_5331b8.prototype[_C_p_get_symbol_skka08],
    set: __C_5331b8.prototype[_C_p_set_symbol_0b0sm8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_5331b8.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_d54kr8.push(initializer)
}) || {};

_C_p_initializer_ntsn8g = _C_p_result_3evoj8.initialize || (v => v);

_C_p_getter_o5uc38 = _C_p_result_3evoj8.get || _C_p_getter_o5uc38;

_C_p_setter_b385ko = _C_p_result_3evoj8.set || _C_p_setter_b385ko;

let C = __C_5331b8;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_p_get_symbol_5i5lig = Symbol();

const _D_p_set_symbol_9f09f = Symbol();

let _D_p_getter_mtugbo;

let _D_p_setter_8pf8bg;

let _D_p_initializer_053tsg;

const _D_member_initializers_dhimg = [];

let _D_p_initializer_bbcvb;

class __D_3fd85o extends C {
  constructor() {
    super();
    _D_member_initializers_dhimg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_1menio = _D_p_initializer_bbcvb.call(this, _D_p_initializer_053tsg.call(this, 2));
  get #p() {
    return _D_p_getter_mtugbo.call(this);
  }
  set #p(v) {
    return _D_p_setter_8pf8bg.call(this, v);
  }
  static _D_p_getter_mtugbo() {
    return this.#_p_private_property_1menio;
  }
  static _D_p_setter_8pf8bg(v) {
    this.#_p_private_property_1menio = v;
  }
  [_D_p_get_symbol_5i5lig]() {
    return this.#p;
  }
  [_D_p_set_symbol_9f09f](v) {
    this.#p = v;
  }
}

_D_p_getter_mtugbo = __D_3fd85o._D_p_getter_mtugbo;

_D_p_setter_8pf8bg = __D_3fd85o._D_p_setter_8pf8bg;

delete __D_3fd85o._D_p_getter_mtugbo;

delete __D_3fd85o._D_p_setter_8pf8bg;

const _D_p_result_7c0sd = addProperty("c", 3)({
  get: _D_p_getter_mtugbo,
  set: _D_p_setter_8pf8bg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __D_3fd85o.prototype[_D_p_get_symbol_5i5lig],
    set: __D_3fd85o.prototype[_D_p_set_symbol_9f09f]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__D_3fd85o.prototype, "private", "#p"),
  addInitializer: initializer => _D_member_initializers_dhimg.push(initializer)
}) || {};

_D_p_initializer_bbcvb = _D_p_result_7c0sd.initialize || (v => v);

_D_p_getter_mtugbo = _D_p_result_7c0sd.get || _D_p_getter_mtugbo;

_D_p_setter_8pf8bg = _D_p_result_7c0sd.set || _D_p_setter_8pf8bg;

const _D_p_result_uvuoo = addProperty("d", 4)({
  get: _D_p_getter_mtugbo,
  set: _D_p_setter_8pf8bg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __D_3fd85o.prototype[_D_p_get_symbol_5i5lig],
    set: __D_3fd85o.prototype[_D_p_set_symbol_9f09f]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__D_3fd85o.prototype, "private", "#p"),
  addInitializer: initializer => _D_member_initializers_dhimg.push(initializer)
}) || {};

_D_p_initializer_053tsg = _D_p_result_uvuoo.initialize || (v => v);

_D_p_getter_mtugbo = _D_p_result_uvuoo.get || _D_p_getter_mtugbo;

_D_p_setter_8pf8bg = _D_p_result_uvuoo.set || _D_p_setter_8pf8bg;

let D = __D_3fd85o;

Object.defineProperty(D, "name", {
  value: "D"
});

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);