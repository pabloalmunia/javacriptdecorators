function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize(v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
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

const _C_p_get_symbol_3ct6vo = Symbol();

const _C_p_set_symbol_ie3ip8 = Symbol();

let _C_p_getter_su0l2o;

let _C_p_setter_10kbfg;

const _C_static_initializers_klv348 = [];

class C {
  static #_p_private_property_06fkmo = 10;
  static get #p() {
    return _C_p_getter_su0l2o.call(this);
  }
  static set #p(v) {
    return _C_p_setter_10kbfg.call(this, v);
  }
  static _C_p_getter_su0l2o() {
    return this.#_p_private_property_06fkmo;
  }
  static _C_p_setter_10kbfg(v) {
    this.#_p_private_property_06fkmo = v;
  }
  static [_C_p_get_symbol_3ct6vo]() {
    return C.#p;
  }
  static [_C_p_set_symbol_ie3ip8](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_uc4m0o = {
  get: C._C_p_getter_su0l2o,
  set: C._C_p_setter_10kbfg
};

_C_p_getter_su0l2o = C._C_p_getter_su0l2o;

_C_p_setter_10kbfg = C._C_p_setter_10kbfg;

delete C._C_p_getter_su0l2o;

delete C._C_p_setter_10kbfg;

const _C_p_result_dl6vg8 = decorator({
  get: _C_p_getter_su0l2o,
  set: _C_p_setter_10kbfg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_3ct6vo],
    set: C[_C_p_set_symbol_ie3ip8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_klv348.push(initializer)
}) || {};

_C_p_initializer_uc4m0o.set.call(
  C,
  (_C_p_result_dl6vg8.initialize || (v => v))(_C_p_initializer_uc4m0o.get.call(C))
);

_C_p_getter_su0l2o = _C_p_result_dl6vg8.get || _C_p_getter_su0l2o;

_C_p_setter_10kbfg = _C_p_result_dl6vg8.set || _C_p_setter_10kbfg;

_C_static_initializers_klv348.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);

C.check = 20;

console.assert(C.check === 40);