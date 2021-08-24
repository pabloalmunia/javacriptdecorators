function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "field" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
  };
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

const _C_p_get_symbol_g7mcpg = Symbol();

const _C_p_set_symbol_p69jr8 = Symbol();

const _C_static_initializers_p8op5o = [];

class C {
  static #p = 1;
  static [_C_p_get_symbol_g7mcpg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_p69jr8](v) {
    C.#p = v;
  }
}

const _C_p_initializer_c0tic8 = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_g7mcpg],
    set: C[_C_p_set_symbol_p69jr8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "p"),
  addInitializer: initializer => _C_static_initializers_p8op5o.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_p69jr8](_C_p_initializer_c0tic8(C[_C_p_get_symbol_g7mcpg]()));

const _C_p_initializer_ogaoro = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_g7mcpg],
    set: C[_C_p_set_symbol_p69jr8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", "p"),
  addInitializer: initializer => _C_static_initializers_p8op5o.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_p69jr8](_C_p_initializer_ogaoro(C[_C_p_get_symbol_g7mcpg]()));

_C_static_initializers_p8op5o.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_nqd1l = Symbol();

const _D_p_set_symbol_1dbeio = Symbol();

const _D_static_initializers_g4ikcg = [];

class D extends C {
  static #p = 2;
  static [_D_p_get_symbol_nqd1l]() {
    return D.#p;
  }
  static [_D_p_set_symbol_1dbeio](v) {
    D.#p = v;
  }
}

const _D_p_initializer_dvop28 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_nqd1l],
    set: D[_D_p_set_symbol_1dbeio]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", "p"),
  addInitializer: initializer => _D_static_initializers_g4ikcg.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_1dbeio](_D_p_initializer_dvop28(D[_D_p_get_symbol_nqd1l]()));

const _D_p_initializer_em4hp8 = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_nqd1l],
    set: D[_D_p_set_symbol_1dbeio]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", "p"),
  addInitializer: initializer => _D_static_initializers_g4ikcg.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_1dbeio](_D_p_initializer_em4hp8(D[_D_p_get_symbol_nqd1l]()));

_D_static_initializers_g4ikcg.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);