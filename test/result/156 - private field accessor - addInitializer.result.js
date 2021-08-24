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

const _C_p_get_symbol_3tss68 = Symbol();

const _C_p_set_symbol_1dehog = Symbol();

let _C_p_getter_ddhldo;

let _C_p_setter_sj7tn8;

let _C_p_initializer_2rihvg;

const _C_member_initializers_d946q = [];

class C {
  constructor() {
    _C_member_initializers_d946q.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_dgp8q = _C_p_initializer_2rihvg.call(this, 1);
  get #p() {
    return _C_p_getter_ddhldo.call(this);
  }
  set #p(v) {
    return _C_p_setter_sj7tn8.call(this, v);
  }
  static _C_p_getter_ddhldo() {
    return this.#_p_private_property_dgp8q;
  }
  static _C_p_setter_sj7tn8(v) {
    this.#_p_private_property_dgp8q = v;
  }
  [_C_p_get_symbol_3tss68]() {
    return this.#p;
  }
  [_C_p_set_symbol_1dehog](v) {
    this.#p = v;
  }
}

_C_p_getter_ddhldo = C._C_p_getter_ddhldo;

_C_p_setter_sj7tn8 = C._C_p_setter_sj7tn8;

delete C._C_p_getter_ddhldo;

delete C._C_p_setter_sj7tn8;

const _C_p_result_5qg188 = decorator({
  get: _C_p_getter_ddhldo,
  set: _C_p_setter_sj7tn8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_3tss68],
    set: C.prototype[_C_p_set_symbol_1dehog]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p"),
  addInitializer: initializer => _C_member_initializers_d946q.push(initializer)
}) || {};

_C_p_initializer_2rihvg = _C_p_result_5qg188.initialize || (v => v);

_C_p_getter_ddhldo = _C_p_result_5qg188.get || _C_p_getter_ddhldo;

_C_p_setter_sj7tn8 = _C_p_result_5qg188.set || _C_p_setter_sj7tn8;

console.assert(new C().test === 10);