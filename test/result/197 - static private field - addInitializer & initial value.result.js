function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function(v) {
    return v * 2;
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
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

const _C_p_get_symbol_3n6b4g = Symbol();

const _C_p_set_symbol_pdmad = Symbol();

const _C_static_initializers_0mguk = [];

class C {
  static #p = 10;
  static [_C_p_get_symbol_3n6b4g]() {
    return C.#p;
  }
  static [_C_p_set_symbol_pdmad](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

const _C_p_initializer_b03vv = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_3n6b4g],
    set: C[_C_p_set_symbol_pdmad]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_0mguk.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_pdmad](_C_p_initializer_b03vv(C[_C_p_get_symbol_3n6b4g]()));

_C_static_initializers_0mguk.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);