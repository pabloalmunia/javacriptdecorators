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

const _C_p_get_symbol_hhegg = Symbol();

const _C_p_set_symbol_ke5br8 = Symbol();

let _C_p_getter_lps9m8;

let _C_p_setter_fhvsl8;

let _C_p_initializer_deihrg;

const _C_member_initializers_9f57n8 = [];

let _C_p_initializer_3opstg;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_9f57n8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_smtr1o = _C_p_initializer_3opstg.call(this, _C_p_initializer_deihrg.call(this, 1));
  get #p() {
    return _C_p_getter_lps9m8.call(this);
  }
  set #p(v) {
    return _C_p_setter_fhvsl8.call(this, v);
  }
  static _C_p_getter_lps9m8() {
    return this.#_p_private_property_smtr1o;
  }
  static _C_p_setter_fhvsl8(v) {
    this.#_p_private_property_smtr1o = v;
  }
  [_C_p_get_symbol_hhegg]() {
    return this.#p;
  }
  [_C_p_set_symbol_ke5br8](v) {
    this.#p = v;
  }
}

_C_p_getter_lps9m8 = C._C_p_getter_lps9m8;

_C_p_setter_fhvsl8 = C._C_p_setter_fhvsl8;

delete C._C_p_getter_lps9m8;

delete C._C_p_setter_fhvsl8;

const _C_p_result_benuj = addProperty("a", 1)({
  get: _C_p_getter_lps9m8,
  set: _C_p_setter_fhvsl8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hhegg],
    set: C.prototype[_C_p_set_symbol_ke5br8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_9f57n8.push(initializer)
}) || {};

_C_p_initializer_3opstg = _C_p_result_benuj.initialize || (v => v);

_C_p_getter_lps9m8 = _C_p_result_benuj.get || _C_p_getter_lps9m8;

_C_p_setter_fhvsl8 = _C_p_result_benuj.set || _C_p_setter_fhvsl8;

const _C_p_result_ofh9i = addProperty("b", 2)({
  get: _C_p_getter_lps9m8,
  set: _C_p_setter_fhvsl8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hhegg],
    set: C.prototype[_C_p_set_symbol_ke5br8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_9f57n8.push(initializer)
}) || {};

_C_p_initializer_deihrg = _C_p_result_ofh9i.initialize || (v => v);

_C_p_getter_lps9m8 = _C_p_result_ofh9i.get || _C_p_getter_lps9m8;

_C_p_setter_fhvsl8 = _C_p_result_ofh9i.set || _C_p_setter_fhvsl8;

const _D_p_get_symbol_u5g1tg = Symbol();

const _D_p_set_symbol_qshi5 = Symbol();

let _D_p_getter_mci48g;

let _D_p_setter_oc7n6g;

let _D_p_initializer_jsoe8;

const _D_member_initializers_ivfnco = [];

let _D_p_initializer_v1p4k8;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_ivfnco.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_hamu9g = _D_p_initializer_v1p4k8.call(this, _D_p_initializer_jsoe8.call(this, 2));
  get #p() {
    return _D_p_getter_mci48g.call(this);
  }
  set #p(v) {
    return _D_p_setter_oc7n6g.call(this, v);
  }
  static _D_p_getter_mci48g() {
    return this.#_p_private_property_hamu9g;
  }
  static _D_p_setter_oc7n6g(v) {
    this.#_p_private_property_hamu9g = v;
  }
  [_D_p_get_symbol_u5g1tg]() {
    return this.#p;
  }
  [_D_p_set_symbol_qshi5](v) {
    this.#p = v;
  }
}

_D_p_getter_mci48g = D._D_p_getter_mci48g;

_D_p_setter_oc7n6g = D._D_p_setter_oc7n6g;

delete D._D_p_getter_mci48g;

delete D._D_p_setter_oc7n6g;

const _D_p_result_87h2vo = addProperty("c", 3)({
  get: _D_p_getter_mci48g,
  set: _D_p_setter_oc7n6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_u5g1tg],
    set: D.prototype[_D_p_set_symbol_qshi5]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_ivfnco.push(initializer)
}) || {};

_D_p_initializer_v1p4k8 = _D_p_result_87h2vo.initialize || (v => v);

_D_p_getter_mci48g = _D_p_result_87h2vo.get || _D_p_getter_mci48g;

_D_p_setter_oc7n6g = _D_p_result_87h2vo.set || _D_p_setter_oc7n6g;

const _D_p_result_34tn58 = addProperty("d", 4)({
  get: _D_p_getter_mci48g,
  set: _D_p_setter_oc7n6g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_u5g1tg],
    set: D.prototype[_D_p_set_symbol_qshi5]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_ivfnco.push(initializer)
}) || {};

_D_p_initializer_jsoe8 = _D_p_result_34tn58.initialize || (v => v);

_D_p_getter_mci48g = _D_p_result_34tn58.get || _D_p_getter_mci48g;

_D_p_setter_oc7n6g = _D_p_result_34tn58.set || _D_p_setter_oc7n6g;

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