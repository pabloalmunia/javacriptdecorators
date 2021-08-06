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

const _C_p_get_symbol_p4dkk8 = Symbol();

const _C_p_set_symbol_l1mk98 = Symbol();

let _C_p_getter_33eas;

let _C_p_setter_r0fhr8;

const _C_static_initializers_ua3mv = [];

class C {
  constructor() {
    this.z = 100;
  }
  static #_p_private_property_p1e1tg = 1;
  static get #p() {
    return _C_p_getter_33eas.call(this);
  }
  static set #p(v) {
    return _C_p_setter_r0fhr8.call(this, v);
  }
  static _C_p_getter_33eas() {
    return this.#_p_private_property_p1e1tg;
  }
  static _C_p_setter_r0fhr8(v) {
    this.#_p_private_property_p1e1tg = v;
  }
  static [_C_p_get_symbol_p4dkk8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_l1mk98](v) {
    C.#p = v;
  }
}

const _C_p_initializer_r1d9q8 = {
  get: C._C_p_getter_33eas,
  set: C._C_p_setter_r0fhr8
};

_C_p_getter_33eas = C._C_p_getter_33eas;

_C_p_setter_r0fhr8 = C._C_p_setter_r0fhr8;

delete C._C_p_getter_33eas;

delete C._C_p_setter_r0fhr8;

const _C_p_result_u8449 = addProperty("a", 1)({
  get: _C_p_getter_33eas,
  set: _C_p_setter_r0fhr8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_p4dkk8],
    set: C[_C_p_set_symbol_l1mk98]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_ua3mv.push(initializer)
}) || {};

_C_p_initializer_r1d9q8.set.call(
  C,
  (_C_p_result_u8449.initialize || (v => v))(_C_p_initializer_r1d9q8.get.call(C))
);

_C_p_getter_33eas = _C_p_result_u8449.get || _C_p_getter_33eas;

_C_p_setter_r0fhr8 = _C_p_result_u8449.set || _C_p_setter_r0fhr8;

const _C_p_result_tedl28 = addProperty("b", 2)({
  get: _C_p_getter_33eas,
  set: _C_p_setter_r0fhr8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_p4dkk8],
    set: C[_C_p_set_symbol_l1mk98]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_ua3mv.push(initializer)
}) || {};

_C_p_initializer_r1d9q8.set.call(
  C,
  (_C_p_result_tedl28.initialize || (v => v))(_C_p_initializer_r1d9q8.get.call(C))
);

_C_p_getter_33eas = _C_p_result_tedl28.get || _C_p_getter_33eas;

_C_p_setter_r0fhr8 = _C_p_result_tedl28.set || _C_p_setter_r0fhr8;

_C_static_initializers_ua3mv.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_gop1oo = Symbol();

const _D_p_set_symbol_sp2moo = Symbol();

let _D_p_getter_b1clig;

let _D_p_setter_38odkg;

const _D_static_initializers_inrr3o = [];

class D extends C {
  static #_p_private_property_8kiitg = 2;
  static get #p() {
    return _D_p_getter_b1clig.call(this);
  }
  static set #p(v) {
    return _D_p_setter_38odkg.call(this, v);
  }
  static _D_p_getter_b1clig() {
    return this.#_p_private_property_8kiitg;
  }
  static _D_p_setter_38odkg(v) {
    this.#_p_private_property_8kiitg = v;
  }
  static [_D_p_get_symbol_gop1oo]() {
    return D.#p;
  }
  static [_D_p_set_symbol_sp2moo](v) {
    D.#p = v;
  }
}

const _D_p_initializer_gsphlg = {
  get: D._D_p_getter_b1clig,
  set: D._D_p_setter_38odkg
};

_D_p_getter_b1clig = D._D_p_getter_b1clig;

_D_p_setter_38odkg = D._D_p_setter_38odkg;

delete D._D_p_getter_b1clig;

delete D._D_p_setter_38odkg;

const _D_p_result_evn97g = addProperty("c", 3)({
  get: _D_p_getter_b1clig,
  set: _D_p_setter_38odkg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_gop1oo],
    set: D[_D_p_set_symbol_sp2moo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_inrr3o.push(initializer)
}) || {};

_D_p_initializer_gsphlg.set.call(
  D,
  (_D_p_result_evn97g.initialize || (v => v))(_D_p_initializer_gsphlg.get.call(D))
);

_D_p_getter_b1clig = _D_p_result_evn97g.get || _D_p_getter_b1clig;

_D_p_setter_38odkg = _D_p_result_evn97g.set || _D_p_setter_38odkg;

const _D_p_result_1ahvmo = addProperty("d", 4)({
  get: _D_p_getter_b1clig,
  set: _D_p_setter_38odkg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_gop1oo],
    set: D[_D_p_set_symbol_sp2moo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_inrr3o.push(initializer)
}) || {};

_D_p_initializer_gsphlg.set.call(
  D,
  (_D_p_result_1ahvmo.initialize || (v => v))(_D_p_initializer_gsphlg.get.call(D))
);

_D_p_getter_b1clig = _D_p_result_1ahvmo.get || _D_p_getter_b1clig;

_D_p_setter_38odkg = _D_p_result_1ahvmo.set || _D_p_setter_38odkg;

_D_static_initializers_inrr3o.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);