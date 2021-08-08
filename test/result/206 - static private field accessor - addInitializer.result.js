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

const _C_p_get_symbol_bqobp = Symbol();

const _C_p_set_symbol_u00gs = Symbol();

let _C_p_getter_aahl68;

let _C_p_setter_7sollo;

const _C_static_initializers_52de2 = [];

class C {
  static #_p_private_property_7vtba = 1;
  static get #p() {
    return _C_p_getter_aahl68.call(this);
  }
  static set #p(v) {
    return _C_p_setter_7sollo.call(this, v);
  }
  static _C_p_getter_aahl68() {
    return this.#_p_private_property_7vtba;
  }
  static _C_p_setter_7sollo(v) {
    this.#_p_private_property_7vtba = v;
  }
  static [_C_p_get_symbol_bqobp]() {
    return C.#p;
  }
  static [_C_p_set_symbol_u00gs](v) {
    C.#p = v;
  }
}

const _C_p_initializer_458ik = {
  get: C._C_p_getter_aahl68,
  set: C._C_p_setter_7sollo
};

_C_p_getter_aahl68 = C._C_p_getter_aahl68;

_C_p_setter_7sollo = C._C_p_setter_7sollo;

delete C._C_p_getter_aahl68;

delete C._C_p_setter_7sollo;

const _C_p_result_2h89a = decorator({
  get: _C_p_getter_aahl68,
  set: _C_p_setter_7sollo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_bqobp],
    set: C[_C_p_set_symbol_u00gs]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "#p"),
  addInitializer: initializer => _C_static_initializers_52de2.push(initializer)
}) || {};

_C_p_initializer_458ik.set.call(
  C,
  (_C_p_result_2h89a.initialize || (v => v))(_C_p_initializer_458ik.get.call(C))
);

_C_p_getter_aahl68 = _C_p_result_2h89a.get || _C_p_getter_aahl68;

_C_p_setter_7sollo = _C_p_result_2h89a.set || _C_p_setter_7sollo;

_C_static_initializers_52de2.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);