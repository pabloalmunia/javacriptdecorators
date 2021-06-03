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

const _C_p_get_symbol_225da = Symbol();

const _C_p_set_symbol_l609ko = Symbol();

const _C_static_initializers_o4mrg = [];

class C {
  static #p = 1;
  static [_C_p_get_symbol_225da]() {
    return C.#p;
  }
  static [_C_p_set_symbol_l609ko](v) {
    C.#p = v;
  }
}

const _C_p_initializer_a41dug = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_225da],
    set: C[_C_p_set_symbol_l609ko]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_o4mrg.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_l609ko](_C_p_initializer_a41dug(C[_C_p_get_symbol_225da]()));

const _C_p_initializer_ussr5o = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_225da],
    set: C[_C_p_set_symbol_l609ko]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_o4mrg.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_l609ko](_C_p_initializer_ussr5o(C[_C_p_get_symbol_225da]()));

_C_static_initializers_o4mrg.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_iin4t = Symbol();

const _D_p_set_symbol_ta1u3o = Symbol();

const _D_static_initializers_ogd3s = [];

class D extends C {
  static #p = 2;
  static [_D_p_get_symbol_iin4t]() {
    return D.#p;
  }
  static [_D_p_set_symbol_ta1u3o](v) {
    D.#p = v;
  }
}

const _D_p_initializer_irsbb8 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_iin4t],
    set: D[_D_p_set_symbol_ta1u3o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_ogd3s.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_ta1u3o](_D_p_initializer_irsbb8(D[_D_p_get_symbol_iin4t]()));

const _D_p_initializer_rs1i7 = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_iin4t],
    set: D[_D_p_set_symbol_ta1u3o]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_ogd3s.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_ta1u3o](_D_p_initializer_rs1i7(D[_D_p_get_symbol_iin4t]()));

_D_static_initializers_ogd3s.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);