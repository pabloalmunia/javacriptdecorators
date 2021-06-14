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

const _C_p_get_symbol_e17veg = Symbol();

const _C_p_set_symbol_rcqsl = Symbol();

let _C_p_getter_0h44lo;

let _C_p_setter_b9vet8;

const _C_static_initializers_21pc9g = [];

class C {
  static #_p_private_property_1p7sa = 1;
  static get #p() {
    return _C_p_getter_0h44lo.call(this);
  }
  static set #p(v) {
    return _C_p_setter_b9vet8.call(this, v);
  }
  static _C_p_getter_0h44lo() {
    return this.#_p_private_property_1p7sa;
  }
  static _C_p_setter_b9vet8(v) {
    this.#_p_private_property_1p7sa = v;
  }
  static [_C_p_get_symbol_e17veg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_rcqsl](v) {
    C.#p = v;
  }
}

const _C_p_initializer_i4acqg = {
  get: C._C_p_getter_0h44lo,
  set: C._C_p_setter_b9vet8
};

_C_p_getter_0h44lo = C._C_p_getter_0h44lo;

_C_p_setter_b9vet8 = C._C_p_setter_b9vet8;

delete C._C_p_getter_0h44lo;

delete C._C_p_setter_b9vet8;

const _C_p_result_6ctnmo = decorator({
  get: _C_p_getter_0h44lo,
  set: _C_p_setter_b9vet8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_e17veg],
    set: C[_C_p_set_symbol_rcqsl]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_21pc9g.push(initializer)
}) || {};

_C_p_initializer_i4acqg.set.call(
  C,
  (_C_p_result_6ctnmo.initialize || (v => v))(_C_p_initializer_i4acqg.get.call(C))
);

_C_p_getter_0h44lo = _C_p_result_6ctnmo.get || _C_p_getter_0h44lo;

_C_p_setter_b9vet8 = _C_p_result_6ctnmo.set || _C_p_setter_b9vet8;

_C_static_initializers_21pc9g.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);