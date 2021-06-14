function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_p_get_symbol_fg27n8 = Symbol();

const _C_p_set_symbol_1spekg = Symbol();

let _C_p_getter_orjevo;

let _C_p_setter_m9e6ng;

const _C_static_initializers_s2d9gg = [];

class C {
  static #_p_private_property_dr72m = 1;
  static get #p() {
    return _C_p_getter_orjevo.call(this);
  }
  static set #p(v) {
    return _C_p_setter_m9e6ng.call(this, v);
  }
  static _C_p_getter_orjevo() {
    return this.#_p_private_property_dr72m;
  }
  static _C_p_setter_m9e6ng(v) {
    this.#_p_private_property_dr72m = v;
  }
  static [_C_p_get_symbol_fg27n8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_1spekg](v) {
    C.#p = v;
  }
}

const _C_p_initializer_utte9o = {
  get: C._C_p_getter_orjevo,
  set: C._C_p_setter_m9e6ng
};

_C_p_getter_orjevo = C._C_p_getter_orjevo;

_C_p_setter_m9e6ng = C._C_p_setter_m9e6ng;

delete C._C_p_getter_orjevo;

delete C._C_p_setter_m9e6ng;

const _C_p_result_140tng = decorator({
  get: _C_p_getter_orjevo,
  set: _C_p_setter_m9e6ng
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_fg27n8],
    set: C[_C_p_set_symbol_1spekg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_s2d9gg.push(initializer)
}) || {};

_C_p_initializer_utte9o.set.call(
  C,
  (_C_p_result_140tng.initialize || (v => v))(_C_p_initializer_utte9o.get.call(C))
);

_C_p_getter_orjevo = _C_p_result_140tng.get || _C_p_getter_orjevo;

_C_p_setter_m9e6ng = _C_p_result_140tng.set || _C_p_setter_m9e6ng;

_C_static_initializers_s2d9gg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);