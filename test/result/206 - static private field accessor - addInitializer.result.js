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

const _C_p_get_symbol_89lt5g = Symbol();

const _C_p_set_symbol_a2pjgo = Symbol();

let _C_p_getter_mo8708;

let _C_p_setter_k1ne2;

const _C_static_initializers_e270vo = [];

class C {
  static #_p_private_property_sq7qgg = 1;
  static get #p() {
    return _C_p_getter_mo8708.call(this);
  }
  static set #p(v) {
    return _C_p_setter_k1ne2.call(this, v);
  }
  static _C_p_getter_mo8708() {
    return this.#_p_private_property_sq7qgg;
  }
  static _C_p_setter_k1ne2(v) {
    this.#_p_private_property_sq7qgg = v;
  }
  static [_C_p_get_symbol_89lt5g]() {
    return C.#p;
  }
  static [_C_p_set_symbol_a2pjgo](v) {
    C.#p = v;
  }
}

const _C_p_initializer_ona538 = {
  get: C._C_p_getter_mo8708,
  set: C._C_p_setter_k1ne2
};

_C_p_getter_mo8708 = C._C_p_getter_mo8708;

_C_p_setter_k1ne2 = C._C_p_setter_k1ne2;

delete C._C_p_getter_mo8708;

delete C._C_p_setter_k1ne2;

const _C_p_result_qi5nmg = decorator({
  get: _C_p_getter_mo8708,
  set: _C_p_setter_k1ne2
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_89lt5g],
    set: C[_C_p_set_symbol_a2pjgo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_e270vo.push(initializer)
}) || {};

_C_p_initializer_ona538.set.call(
  C,
  (_C_p_result_qi5nmg.initialize || (v => v))(_C_p_initializer_ona538.get.call(C))
);

_C_p_getter_mo8708 = _C_p_result_qi5nmg.get || _C_p_getter_mo8708;

_C_p_setter_k1ne2 = _C_p_result_qi5nmg.set || _C_p_setter_k1ne2;

_C_static_initializers_e270vo.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);