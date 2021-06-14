const META = Symbol();

function meta(value) {
  return function(element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata(META, a[a.length - 1] + value);
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

const _C_f_get_symbol_ud7l78 = Symbol();

const _C_f_set_symbol_uru6to = Symbol();

let _C_f_getter_kevhco;

let _C_f_setter_aalap;

let _C_f_initializer_kscv9;

let _C_f_initializer_9k8rb;

const _C_p_get_symbol_4osao = Symbol();

const _C_p_set_symbol_9buv1g = Symbol();

let _C_p_getter_1t5aeo;

let _C_p_setter_2asfbo;

let _C_p_initializer_ar9mv8;

let _C_p_initializer_qji9hg;

class C {
  #_p_private_property_4fv8g8 = _C_p_initializer_qji9hg.call(this, _C_p_initializer_ar9mv8.call(this, 10));
  get #p() {
    return _C_p_getter_1t5aeo.call(this);
  }
  set #p(v) {
    return _C_p_setter_2asfbo.call(this, v);
  }
  static _C_p_getter_1t5aeo() {
    return this.#_p_private_property_4fv8g8;
  }
  static _C_p_setter_2asfbo(v) {
    this.#_p_private_property_4fv8g8 = v;
  }
  [_C_p_get_symbol_4osao]() {
    return this.#p;
  }
  [_C_p_set_symbol_9buv1g](v) {
    this.#p = v;
  }
  #_f_private_property_75qd1g = _C_f_initializer_9k8rb.call(this, _C_f_initializer_kscv9.call(this, 20));
  get #f() {
    return _C_f_getter_kevhco.call(this);
  }
  set #f(v) {
    return _C_f_setter_aalap.call(this, v);
  }
  static _C_f_getter_kevhco() {
    return this.#_f_private_property_75qd1g;
  }
  static _C_f_setter_aalap(v) {
    this.#_f_private_property_75qd1g = v;
  }
  [_C_f_get_symbol_ud7l78]() {
    return this.#f;
  }
  [_C_f_set_symbol_uru6to](v) {
    this.#f = v;
  }
}

_C_p_getter_1t5aeo = C._C_p_getter_1t5aeo;

_C_p_setter_2asfbo = C._C_p_setter_2asfbo;

delete C._C_p_getter_1t5aeo;

delete C._C_p_setter_2asfbo;

const _C_p_result_0o5vo8 = meta(1)({
  get: _C_p_getter_1t5aeo,
  set: _C_p_setter_2asfbo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_4osao],
    set: C.prototype[_C_p_set_symbol_9buv1g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_qji9hg = _C_p_result_0o5vo8.initialize || (v => v);

_C_p_getter_1t5aeo = _C_p_result_0o5vo8.get || _C_p_getter_1t5aeo;

_C_p_setter_2asfbo = _C_p_result_0o5vo8.set || _C_p_setter_2asfbo;

const _C_p_result_kbb84o = meta(2)({
  get: _C_p_getter_1t5aeo,
  set: _C_p_setter_2asfbo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_4osao],
    set: C.prototype[_C_p_set_symbol_9buv1g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_ar9mv8 = _C_p_result_kbb84o.initialize || (v => v);

_C_p_getter_1t5aeo = _C_p_result_kbb84o.get || _C_p_getter_1t5aeo;

_C_p_setter_2asfbo = _C_p_result_kbb84o.set || _C_p_setter_2asfbo;

_C_f_getter_kevhco = C._C_f_getter_kevhco;

_C_f_setter_aalap = C._C_f_setter_aalap;

delete C._C_f_getter_kevhco;

delete C._C_f_setter_aalap;

const _C_f_result_k2nm8o = meta(3)({
  get: _C_f_getter_kevhco,
  set: _C_f_setter_aalap
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_ud7l78],
    set: C.prototype[_C_f_set_symbol_uru6to]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_9k8rb = _C_f_result_k2nm8o.initialize || (v => v);

_C_f_getter_kevhco = _C_f_result_k2nm8o.get || _C_f_getter_kevhco;

_C_f_setter_aalap = _C_f_result_k2nm8o.set || _C_f_setter_aalap;

const _C_f_result_ehu7u = meta(3)({
  get: _C_f_getter_kevhco,
  set: _C_f_setter_aalap
}, {
  kind: "auto-accessor",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_ud7l78],
    set: C.prototype[_C_f_set_symbol_uru6to]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_f_initializer_kscv9 = _C_f_result_ehu7u.initialize || (v => v);

_C_f_getter_kevhco = _C_f_result_ehu7u.get || _C_f_getter_kevhco;

_C_f_setter_aalap = _C_f_result_ehu7u.set || _C_f_setter_aalap;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);