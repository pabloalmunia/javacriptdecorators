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
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

const _C_p_get_symbol_u185rg = Symbol();

const _C_p_set_symbol_fl5tao = Symbol();

const _C_static_initializers_991vi8 = [];

class C {
  static #p = 1;
  static [_C_p_get_symbol_u185rg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_fl5tao](v) {
    C.#p = v;
  }
}

const _C_p_initializer_no09n = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_u185rg],
    set: C[_C_p_set_symbol_fl5tao]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_991vi8.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_fl5tao](_C_p_initializer_no09n(C[_C_p_get_symbol_u185rg]()));

const _C_p_initializer_im5e68 = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_u185rg],
    set: C[_C_p_set_symbol_fl5tao]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_991vi8.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_fl5tao](_C_p_initializer_im5e68(C[_C_p_get_symbol_u185rg]()));

_C_static_initializers_991vi8.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_5vp8b = Symbol();

const _D_p_set_symbol_or22ng = Symbol();

const _D_static_initializers_qg025 = [];

class D extends C {
  static #p = 2;
  static [_D_p_get_symbol_5vp8b]() {
    return D.#p;
  }
  static [_D_p_set_symbol_or22ng](v) {
    D.#p = v;
  }
}

const _D_p_initializer_11rcno = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_5vp8b],
    set: D[_D_p_set_symbol_or22ng]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_qg025.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_or22ng](_D_p_initializer_11rcno(D[_D_p_get_symbol_5vp8b]()));

const _D_p_initializer_0s09po = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_5vp8b],
    set: D[_D_p_set_symbol_or22ng]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_qg025.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_or22ng](_D_p_initializer_0s09po(D[_D_p_get_symbol_5vp8b]()));

_D_static_initializers_qg025.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);