function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
    };
  }
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

const _C_p_get_symbol_vmtvd8 = Symbol();

const _C_p_set_symbol_fjprh8 = Symbol();

class __C_dkjl9 {
  static #p = 1;
  static [_C_p_get_symbol_vmtvd8]() {
    return __C_dkjl9.#p;
  }
  static [_C_p_set_symbol_fjprh8](v) {
    __C_dkjl9.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_22kra8 = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_dkjl9[_C_p_get_symbol_vmtvd8],
    set: __C_dkjl9[_C_p_set_symbol_fjprh8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_dkjl9, "private", "p")
}) ?? (v => v);

__C_dkjl9[_C_p_set_symbol_fjprh8](_C_p_initializer_22kra8(__C_dkjl9[_C_p_get_symbol_vmtvd8]()));

const _C_p_initializer_1lc24 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_dkjl9[_C_p_get_symbol_vmtvd8],
    set: __C_dkjl9[_C_p_set_symbol_fjprh8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_dkjl9, "private", "p")
}) ?? (v => v);

__C_dkjl9[_C_p_set_symbol_fjprh8](_C_p_initializer_1lc24(__C_dkjl9[_C_p_get_symbol_vmtvd8]()));

let C = __C_dkjl9;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.check === 6);