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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_g3427o = Symbol();

const _C_p_set_symbol_7salto = Symbol();

const _C_static_initializers_lir9tg = [];

class C {
  static #p = 1;
  static [_C_p_get_symbol_g3427o]() {
    return C.#p;
  }
  static [_C_p_set_symbol_7salto](v) {
    C.#p = v;
  }
}

const _C_p_initializer_65gkd = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_g3427o],
    set: C[_C_p_set_symbol_7salto]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_lir9tg.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_7salto](_C_p_initializer_65gkd(C[_C_p_get_symbol_g3427o]()));

const _C_p_initializer_pgrfl = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_g3427o],
    set: C[_C_p_set_symbol_7salto]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_lir9tg.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_7salto](_C_p_initializer_pgrfl(C[_C_p_get_symbol_g3427o]()));

_C_static_initializers_lir9tg.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_o5kquo = Symbol();

const _D_p_set_symbol_r2e828 = Symbol();

const _D_static_initializers_8gp3vo = [];

class D extends C {
  static #p = 2;
  static [_D_p_get_symbol_o5kquo]() {
    return D.#p;
  }
  static [_D_p_set_symbol_r2e828](v) {
    D.#p = v;
  }
}

const _D_p_initializer_l9gl08 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_o5kquo],
    set: D[_D_p_set_symbol_r2e828]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_8gp3vo.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_r2e828](_D_p_initializer_l9gl08(D[_D_p_get_symbol_o5kquo]()));

const _D_p_initializer_14r8ao = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_o5kquo],
    set: D[_D_p_set_symbol_r2e828]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_8gp3vo.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_r2e828](_D_p_initializer_14r8ao(D[_D_p_get_symbol_o5kquo]()));

_D_static_initializers_8gp3vo.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);