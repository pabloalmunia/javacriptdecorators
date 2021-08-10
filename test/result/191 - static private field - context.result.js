function decorator(value, context) {
  console.assert(context.kind === "field");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
  console.assert(context.isStatic);
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

const _A_p_get_symbol_tpo1tg = Symbol();

const _A_p_set_symbol_7r9ak = Symbol();

class __A_u8v1qg {
  static #p = 1;
  static [_A_p_get_symbol_tpo1tg]() {
    return __A_u8v1qg.#p;
  }
  static [_A_p_set_symbol_7r9ak](v) {
    __A_u8v1qg.#p = v;
  }
}

const _A_p_initializer_18j8jg = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __A_u8v1qg[_A_p_get_symbol_tpo1tg],
    set: __A_u8v1qg[_A_p_set_symbol_7r9ak]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__A_u8v1qg, "private", "p")
}) ?? (v => v);

__A_u8v1qg[_A_p_set_symbol_7r9ak](_A_p_initializer_18j8jg(__A_u8v1qg[_A_p_get_symbol_tpo1tg]()));

let A = __A_u8v1qg;

Object.defineProperty(A, "name", {
  value: "A"
});