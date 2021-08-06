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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

const _C_p_get_symbol_8b6m7g = Symbol();

const _C_p_set_symbol_7amono = Symbol();

let _C_p_getter_7ump4;

let _C_p_setter_o3t0i;

let _C_p_initializer_0gt958;

const _C_member_initializers_ke5aug = [];

let _C_p_initializer_0bcfj8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_ke5aug.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_vmpho8 = _C_p_initializer_0bcfj8.call(this, _C_p_initializer_0gt958.call(this, 1));
  get #p() {
    return _C_p_getter_7ump4.call(this);
  }
  set #p(v) {
    return _C_p_setter_o3t0i.call(this, v);
  }
  static _C_p_getter_7ump4() {
    return this.#_p_private_property_vmpho8;
  }
  static _C_p_setter_o3t0i(v) {
    this.#_p_private_property_vmpho8 = v;
  }
  [_C_p_get_symbol_8b6m7g]() {
    return this.#p;
  }
  [_C_p_set_symbol_7amono](v) {
    this.#p = v;
  }
}

_C_p_getter_7ump4 = C._C_p_getter_7ump4;

_C_p_setter_o3t0i = C._C_p_setter_o3t0i;

delete C._C_p_getter_7ump4;

delete C._C_p_setter_o3t0i;

const _C_p_result_ner2a = addProperty("a", 1)({
  get: _C_p_getter_7ump4,
  set: _C_p_setter_o3t0i
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_8b6m7g],
    set: C.prototype[_C_p_set_symbol_7amono]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_ke5aug.push(initializer)
}) || {};

_C_p_initializer_0bcfj8 = _C_p_result_ner2a.initialize || (v => v);

_C_p_getter_7ump4 = _C_p_result_ner2a.get || _C_p_getter_7ump4;

_C_p_setter_o3t0i = _C_p_result_ner2a.set || _C_p_setter_o3t0i;

const _C_p_result_j9uofg = addProperty("b", 2)({
  get: _C_p_getter_7ump4,
  set: _C_p_setter_o3t0i
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_8b6m7g],
    set: C.prototype[_C_p_set_symbol_7amono]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_ke5aug.push(initializer)
}) || {};

_C_p_initializer_0gt958 = _C_p_result_j9uofg.initialize || (v => v);

_C_p_getter_7ump4 = _C_p_result_j9uofg.get || _C_p_getter_7ump4;

_C_p_setter_o3t0i = _C_p_result_j9uofg.set || _C_p_setter_o3t0i;

const _D_p_get_symbol_i0aivg = Symbol();

const _D_p_set_symbol_vnsv2o = Symbol();

let _D_p_getter_uu24r;

let _D_p_setter_garlv;

let _D_p_initializer_559n0g;

const _D_member_initializers_8jqcio = [];

let _D_p_initializer_oj19j;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_8jqcio.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_rmu1h8 = _D_p_initializer_oj19j.call(this, _D_p_initializer_559n0g.call(this, 2));
  get #p() {
    return _D_p_getter_uu24r.call(this);
  }
  set #p(v) {
    return _D_p_setter_garlv.call(this, v);
  }
  static _D_p_getter_uu24r() {
    return this.#_p_private_property_rmu1h8;
  }
  static _D_p_setter_garlv(v) {
    this.#_p_private_property_rmu1h8 = v;
  }
  [_D_p_get_symbol_i0aivg]() {
    return this.#p;
  }
  [_D_p_set_symbol_vnsv2o](v) {
    this.#p = v;
  }
}

_D_p_getter_uu24r = D._D_p_getter_uu24r;

_D_p_setter_garlv = D._D_p_setter_garlv;

delete D._D_p_getter_uu24r;

delete D._D_p_setter_garlv;

const _D_p_result_7492qg = addProperty("c", 3)({
  get: _D_p_getter_uu24r,
  set: _D_p_setter_garlv
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_i0aivg],
    set: D.prototype[_D_p_set_symbol_vnsv2o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_8jqcio.push(initializer)
}) || {};

_D_p_initializer_oj19j = _D_p_result_7492qg.initialize || (v => v);

_D_p_getter_uu24r = _D_p_result_7492qg.get || _D_p_getter_uu24r;

_D_p_setter_garlv = _D_p_result_7492qg.set || _D_p_setter_garlv;

const _D_p_result_la1r1 = addProperty("d", 4)({
  get: _D_p_getter_uu24r,
  set: _D_p_setter_garlv
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_i0aivg],
    set: D.prototype[_D_p_set_symbol_vnsv2o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_8jqcio.push(initializer)
}) || {};

_D_p_initializer_559n0g = _D_p_result_la1r1.initialize || (v => v);

_D_p_getter_uu24r = _D_p_result_la1r1.get || _D_p_getter_uu24r;

_D_p_setter_garlv = _D_p_result_la1r1.set || _D_p_setter_garlv;

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