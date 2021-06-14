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

const _C_p_get_symbol_2on8d8 = Symbol();

const _C_p_set_symbol_kjvmtg = Symbol();

let _C_p_getter_ipit8g;

let _C_p_setter_3m0pbo;

let _C_p_initializer_abcfb8;

const _C_member_initializers_pdkqig = [];

let _C_p_initializer_moc4g8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_pdkqig.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_o1u0f = _C_p_initializer_moc4g8.call(this, _C_p_initializer_abcfb8.call(this, 1));
  get #p() {
    return _C_p_getter_ipit8g.call(this);
  }
  set #p(v) {
    return _C_p_setter_3m0pbo.call(this, v);
  }
  static _C_p_getter_ipit8g() {
    return this.#_p_private_property_o1u0f;
  }
  static _C_p_setter_3m0pbo(v) {
    this.#_p_private_property_o1u0f = v;
  }
  [_C_p_get_symbol_2on8d8]() {
    return this.#p;
  }
  [_C_p_set_symbol_kjvmtg](v) {
    this.#p = v;
  }
}

_C_p_getter_ipit8g = C._C_p_getter_ipit8g;

_C_p_setter_3m0pbo = C._C_p_setter_3m0pbo;

delete C._C_p_getter_ipit8g;

delete C._C_p_setter_3m0pbo;

const _C_p_result_pc21 = addProperty("a", 1)({
  get: _C_p_getter_ipit8g,
  set: _C_p_setter_3m0pbo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_2on8d8],
    set: C.prototype[_C_p_set_symbol_kjvmtg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_pdkqig.push(initializer)
}) || {};

_C_p_initializer_moc4g8 = _C_p_result_pc21.initialize || (v => v);

_C_p_getter_ipit8g = _C_p_result_pc21.get || _C_p_getter_ipit8g;

_C_p_setter_3m0pbo = _C_p_result_pc21.set || _C_p_setter_3m0pbo;

const _C_p_result_j1gov = addProperty("b", 2)({
  get: _C_p_getter_ipit8g,
  set: _C_p_setter_3m0pbo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_2on8d8],
    set: C.prototype[_C_p_set_symbol_kjvmtg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_pdkqig.push(initializer)
}) || {};

_C_p_initializer_abcfb8 = _C_p_result_j1gov.initialize || (v => v);

_C_p_getter_ipit8g = _C_p_result_j1gov.get || _C_p_getter_ipit8g;

_C_p_setter_3m0pbo = _C_p_result_j1gov.set || _C_p_setter_3m0pbo;

const _D_p_get_symbol_qlhq7o = Symbol();

const _D_p_set_symbol_ldcrpo = Symbol();

let _D_p_getter_51tnf;

let _D_p_setter_62kv6g;

let _D_p_initializer_ivpju;

const _D_member_initializers_e095d8 = [];

let _D_p_initializer_3p45b;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_e095d8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_4i2v7o = _D_p_initializer_3p45b.call(this, _D_p_initializer_ivpju.call(this, 2));
  get #p() {
    return _D_p_getter_51tnf.call(this);
  }
  set #p(v) {
    return _D_p_setter_62kv6g.call(this, v);
  }
  static _D_p_getter_51tnf() {
    return this.#_p_private_property_4i2v7o;
  }
  static _D_p_setter_62kv6g(v) {
    this.#_p_private_property_4i2v7o = v;
  }
  [_D_p_get_symbol_qlhq7o]() {
    return this.#p;
  }
  [_D_p_set_symbol_ldcrpo](v) {
    this.#p = v;
  }
}

_D_p_getter_51tnf = D._D_p_getter_51tnf;

_D_p_setter_62kv6g = D._D_p_setter_62kv6g;

delete D._D_p_getter_51tnf;

delete D._D_p_setter_62kv6g;

const _D_p_result_gg27gg = addProperty("c", 3)({
  get: _D_p_getter_51tnf,
  set: _D_p_setter_62kv6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_qlhq7o],
    set: D.prototype[_D_p_set_symbol_ldcrpo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_e095d8.push(initializer)
}) || {};

_D_p_initializer_3p45b = _D_p_result_gg27gg.initialize || (v => v);

_D_p_getter_51tnf = _D_p_result_gg27gg.get || _D_p_getter_51tnf;

_D_p_setter_62kv6g = _D_p_result_gg27gg.set || _D_p_setter_62kv6g;

const _D_p_result_5i7ko = addProperty("d", 4)({
  get: _D_p_getter_51tnf,
  set: _D_p_setter_62kv6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_qlhq7o],
    set: D.prototype[_D_p_set_symbol_ldcrpo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_e095d8.push(initializer)
}) || {};

_D_p_initializer_ivpju = _D_p_result_5i7ko.initialize || (v => v);

_D_p_getter_51tnf = _D_p_result_5i7ko.get || _D_p_getter_51tnf;

_D_p_setter_62kv6g = _D_p_result_5i7ko.set || _D_p_setter_62kv6g;

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