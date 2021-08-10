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

const _C_p_get_symbol_7aupg8 = Symbol();

const _C_p_set_symbol_05qdk8 = Symbol();

let _C_p_getter_plp6q;

let _C_p_setter_pvtvr;

let _C_p_initializer_pveid;

const _C_member_initializers_s1r12 = [];

class __C_6q9qq8 {
  constructor() {
    _C_member_initializers_s1r12.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_jb7028 = _C_p_initializer_pveid.call(this, 1);
  get #p() {
    return _C_p_getter_plp6q.call(this);
  }
  set #p(v) {
    return _C_p_setter_pvtvr.call(this, v);
  }
  static _C_p_getter_plp6q() {
    return this.#_p_private_property_jb7028;
  }
  static _C_p_setter_pvtvr(v) {
    this.#_p_private_property_jb7028 = v;
  }
  [_C_p_get_symbol_7aupg8]() {
    return this.#p;
  }
  [_C_p_set_symbol_05qdk8](v) {
    this.#p = v;
  }
}

_C_p_getter_plp6q = __C_6q9qq8._C_p_getter_plp6q;

_C_p_setter_pvtvr = __C_6q9qq8._C_p_setter_pvtvr;

delete __C_6q9qq8._C_p_getter_plp6q;

delete __C_6q9qq8._C_p_setter_pvtvr;

const _C_p_result_lcjb4 = decorator({
  get: _C_p_getter_plp6q,
  set: _C_p_setter_pvtvr
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_6q9qq8.prototype[_C_p_get_symbol_7aupg8],
    set: __C_6q9qq8.prototype[_C_p_set_symbol_05qdk8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_6q9qq8.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_s1r12.push(initializer)
}) || {};

_C_p_initializer_pveid = _C_p_result_lcjb4.initialize || (v => v);

_C_p_getter_plp6q = _C_p_result_lcjb4.get || _C_p_getter_plp6q;

_C_p_setter_pvtvr = _C_p_result_lcjb4.set || _C_p_setter_pvtvr;

let C = __C_6q9qq8;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);