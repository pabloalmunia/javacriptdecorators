const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  console.log(context.getMetadata());
  context.setMetadata(TWO, 2);
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

const _C_p_get_symbol_o387so = Symbol();

const _C_p_set_symbol_k0t46g = Symbol();

class __C_nh537g {
  static #p = 10;
  static [_C_p_get_symbol_o387so]() {
    return __C_nh537g.#p;
  }
  static [_C_p_set_symbol_k0t46g](v) {
    __C_nh537g.#p = v;
  }
}

const _C_p_initializer_8rtfj8 = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_nh537g[_C_p_get_symbol_o387so],
    set: __C_nh537g[_C_p_set_symbol_k0t46g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_nh537g, "private", "p")
}) ?? (v => v);

__C_nh537g[_C_p_set_symbol_k0t46g](_C_p_initializer_8rtfj8(__C_nh537g[_C_p_get_symbol_o387so]()));

const _C_p_initializer_cu5svo = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_nh537g[_C_p_get_symbol_o387so],
    set: __C_nh537g[_C_p_set_symbol_k0t46g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_nh537g, "private", "p")
}) ?? (v => v);

__C_nh537g[_C_p_set_symbol_k0t46g](_C_p_initializer_cu5svo(__C_nh537g[_C_p_get_symbol_o387so]()));

const _C_p_initializer_ihju7 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_nh537g[_C_p_get_symbol_o387so],
    set: __C_nh537g[_C_p_set_symbol_k0t46g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_nh537g, "private", "p")
}) ?? (v => v);

__C_nh537g[_C_p_set_symbol_k0t46g](_C_p_initializer_ihju7(__C_nh537g[_C_p_get_symbol_o387so]()));

let C = __C_nh537g;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);

console.assert(C[Symbol.metadata][TWO].private.length === 1);

console.assert(C[Symbol.metadata][TWO].private[1] === undefined);