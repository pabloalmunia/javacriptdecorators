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

const _C_p_get_symbol_qeneso = Symbol();

const _C_p_set_symbol_3j1rcg = Symbol();

let _C_p_getter_hunqc;

let _C_p_setter_ln4n38;

let _C_p_initializer_88k6o8;

const _C_member_initializers_3skda = [];

let _C_p_initializer_3vr1do;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_3skda.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_q5li3o = _C_p_initializer_3vr1do.call(this, _C_p_initializer_88k6o8.call(this, 1));
  get #p() {
    return _C_p_getter_hunqc.call(this);
  }
  set #p(v) {
    return _C_p_setter_ln4n38.call(this, v);
  }
  static _C_p_getter_hunqc() {
    return this.#_p_private_property_q5li3o;
  }
  static _C_p_setter_ln4n38(v) {
    this.#_p_private_property_q5li3o = v;
  }
  [_C_p_get_symbol_qeneso]() {
    return this.#p;
  }
  [_C_p_set_symbol_3j1rcg](v) {
    this.#p = v;
  }
}

_C_p_getter_hunqc = C._C_p_getter_hunqc;

_C_p_setter_ln4n38 = C._C_p_setter_ln4n38;

delete C._C_p_getter_hunqc;

delete C._C_p_setter_ln4n38;

const _C_p_result_np4kg8 = addProperty("a", 1)({
  get: _C_p_getter_hunqc,
  set: _C_p_setter_ln4n38
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_qeneso],
    set: C.prototype[_C_p_set_symbol_3j1rcg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_3skda.push(initializer)
}) || {};

_C_p_initializer_3vr1do = _C_p_result_np4kg8.initialize || (v => v);

_C_p_getter_hunqc = _C_p_result_np4kg8.get || _C_p_getter_hunqc;

_C_p_setter_ln4n38 = _C_p_result_np4kg8.set || _C_p_setter_ln4n38;

const _C_p_result_ro2eeg = addProperty("b", 2)({
  get: _C_p_getter_hunqc,
  set: _C_p_setter_ln4n38
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_qeneso],
    set: C.prototype[_C_p_set_symbol_3j1rcg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_3skda.push(initializer)
}) || {};

_C_p_initializer_88k6o8 = _C_p_result_ro2eeg.initialize || (v => v);

_C_p_getter_hunqc = _C_p_result_ro2eeg.get || _C_p_getter_hunqc;

_C_p_setter_ln4n38 = _C_p_result_ro2eeg.set || _C_p_setter_ln4n38;

const _D_p_get_symbol_1tm1u = Symbol();

const _D_p_set_symbol_tolro8 = Symbol();

let _D_p_getter_u7l4r;

let _D_p_setter_3rdid;

let _D_p_initializer_auoc58;

const _D_member_initializers_mdrbu = [];

let _D_p_initializer_mn3ve;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_mdrbu.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_2b2v88 = _D_p_initializer_mn3ve.call(this, _D_p_initializer_auoc58.call(this, 2));
  get #p() {
    return _D_p_getter_u7l4r.call(this);
  }
  set #p(v) {
    return _D_p_setter_3rdid.call(this, v);
  }
  static _D_p_getter_u7l4r() {
    return this.#_p_private_property_2b2v88;
  }
  static _D_p_setter_3rdid(v) {
    this.#_p_private_property_2b2v88 = v;
  }
  [_D_p_get_symbol_1tm1u]() {
    return this.#p;
  }
  [_D_p_set_symbol_tolro8](v) {
    this.#p = v;
  }
}

_D_p_getter_u7l4r = D._D_p_getter_u7l4r;

_D_p_setter_3rdid = D._D_p_setter_3rdid;

delete D._D_p_getter_u7l4r;

delete D._D_p_setter_3rdid;

const _D_p_result_sirpro = addProperty("c", 3)({
  get: _D_p_getter_u7l4r,
  set: _D_p_setter_3rdid
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_1tm1u],
    set: D.prototype[_D_p_set_symbol_tolro8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", "#p"),
  addInitializer: initializer => _D_member_initializers_mdrbu.push(initializer)
}) || {};

_D_p_initializer_mn3ve = _D_p_result_sirpro.initialize || (v => v);

_D_p_getter_u7l4r = _D_p_result_sirpro.get || _D_p_getter_u7l4r;

_D_p_setter_3rdid = _D_p_result_sirpro.set || _D_p_setter_3rdid;

const _D_p_result_80917 = addProperty("d", 4)({
  get: _D_p_getter_u7l4r,
  set: _D_p_setter_3rdid
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_1tm1u],
    set: D.prototype[_D_p_set_symbol_tolro8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", "#p"),
  addInitializer: initializer => _D_member_initializers_mdrbu.push(initializer)
}) || {};

_D_p_initializer_auoc58 = _D_p_result_80917.initialize || (v => v);

_D_p_getter_u7l4r = _D_p_result_80917.get || _D_p_getter_u7l4r;

_D_p_setter_3rdid = _D_p_result_80917.set || _D_p_setter_3rdid;

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