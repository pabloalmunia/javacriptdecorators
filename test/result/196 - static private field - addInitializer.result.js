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

const _C_p_get_symbol_q2jr6 = Symbol();

const _C_p_set_symbol_2m6gsg = Symbol();

const _C_static_initializers_c5ln68 = [];

class __C_pv7ho8 {
  static #p = 1;
  static [_C_p_get_symbol_q2jr6]() {
    return __C_pv7ho8.#p;
  }
  static [_C_p_set_symbol_2m6gsg](v) {
    __C_pv7ho8.#p = v;
  }
}

const _C_p_initializer_3bit6g = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_pv7ho8[_C_p_get_symbol_q2jr6],
    set: __C_pv7ho8[_C_p_set_symbol_2m6gsg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_pv7ho8, "private", "p"),
  addInitializer: initializer => _C_static_initializers_c5ln68.push(initializer)
}) ?? (v => v);

__C_pv7ho8[_C_p_set_symbol_2m6gsg](_C_p_initializer_3bit6g(__C_pv7ho8[_C_p_get_symbol_q2jr6]()));

let C = __C_pv7ho8;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_c5ln68.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);