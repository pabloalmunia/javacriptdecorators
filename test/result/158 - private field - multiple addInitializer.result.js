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

const _C_p_get_symbol_bkvirg = Symbol();

const _C_p_set_symbol_cccjho = Symbol();

let _C_p_getter_i4664g;

let _C_p_setter_n41cf8;

let _C_p_initializer_dgucj;

const _C_member_initializers_qin6ig = [];

let _C_p_initializer_jit9m;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_qin6ig.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_8pp6n8 = _C_p_initializer_jit9m.call(this, _C_p_initializer_dgucj.call(this, 1));
  get #p() {
    return _C_p_getter_i4664g.call(this);
  }
  set #p(v) {
    return _C_p_setter_n41cf8.call(this, v);
  }
  static _C_p_getter_i4664g() {
    return this.#_p_private_property_8pp6n8;
  }
  static _C_p_setter_n41cf8(v) {
    this.#_p_private_property_8pp6n8 = v;
  }
  [_C_p_get_symbol_bkvirg]() {
    return this.#p;
  }
  [_C_p_set_symbol_cccjho](v) {
    this.#p = v;
  }
}

_C_p_getter_i4664g = C._C_p_getter_i4664g;

_C_p_setter_n41cf8 = C._C_p_setter_n41cf8;

delete C._C_p_getter_i4664g;

delete C._C_p_setter_n41cf8;

const _C_p_result_k5moh8 = addProperty("a", 1)({
  get: _C_p_getter_i4664g,
  set: _C_p_setter_n41cf8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bkvirg],
    set: C.prototype[_C_p_set_symbol_cccjho]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_qin6ig.push(initializer)
}) || {};

_C_p_initializer_jit9m = _C_p_result_k5moh8.initialize || (v => v);

_C_p_getter_i4664g = _C_p_result_k5moh8.get || _C_p_getter_i4664g;

_C_p_setter_n41cf8 = _C_p_result_k5moh8.set || _C_p_setter_n41cf8;

const _C_p_result_j8t7bo = addProperty("b", 2)({
  get: _C_p_getter_i4664g,
  set: _C_p_setter_n41cf8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bkvirg],
    set: C.prototype[_C_p_set_symbol_cccjho]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_qin6ig.push(initializer)
}) || {};

_C_p_initializer_dgucj = _C_p_result_j8t7bo.initialize || (v => v);

_C_p_getter_i4664g = _C_p_result_j8t7bo.get || _C_p_getter_i4664g;

_C_p_setter_n41cf8 = _C_p_result_j8t7bo.set || _C_p_setter_n41cf8;

const _D_p_get_symbol_ontc3g = Symbol();

const _D_p_set_symbol_so4qmo = Symbol();

let _D_p_getter_0679i;

let _D_p_setter_emved;

let _D_p_initializer_qfj778;

const _D_member_initializers_ctqfm = [];

let _D_p_initializer_nu2hh;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_ctqfm.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_qmibjg = _D_p_initializer_nu2hh.call(this, _D_p_initializer_qfj778.call(this, 2));
  get #p() {
    return _D_p_getter_0679i.call(this);
  }
  set #p(v) {
    return _D_p_setter_emved.call(this, v);
  }
  static _D_p_getter_0679i() {
    return this.#_p_private_property_qmibjg;
  }
  static _D_p_setter_emved(v) {
    this.#_p_private_property_qmibjg = v;
  }
  [_D_p_get_symbol_ontc3g]() {
    return this.#p;
  }
  [_D_p_set_symbol_so4qmo](v) {
    this.#p = v;
  }
}

_D_p_getter_0679i = D._D_p_getter_0679i;

_D_p_setter_emved = D._D_p_setter_emved;

delete D._D_p_getter_0679i;

delete D._D_p_setter_emved;

const _D_p_result_c5u6e = addProperty("c", 3)({
  get: _D_p_getter_0679i,
  set: _D_p_setter_emved
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_ontc3g],
    set: D.prototype[_D_p_set_symbol_so4qmo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_ctqfm.push(initializer)
}) || {};

_D_p_initializer_nu2hh = _D_p_result_c5u6e.initialize || (v => v);

_D_p_getter_0679i = _D_p_result_c5u6e.get || _D_p_getter_0679i;

_D_p_setter_emved = _D_p_result_c5u6e.set || _D_p_setter_emved;

const _D_p_result_7s6abo = addProperty("d", 4)({
  get: _D_p_getter_0679i,
  set: _D_p_setter_emved
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_ontc3g],
    set: D.prototype[_D_p_set_symbol_so4qmo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_ctqfm.push(initializer)
}) || {};

_D_p_initializer_qfj778 = _D_p_result_7s6abo.initialize || (v => v);

_D_p_getter_0679i = _D_p_result_7s6abo.get || _D_p_getter_0679i;

_D_p_setter_emved = _D_p_result_7s6abo.set || _D_p_setter_emved;

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