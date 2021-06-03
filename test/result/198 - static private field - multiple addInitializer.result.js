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

const _C_p_get_symbol_n974fg = Symbol();

const _C_p_set_symbol_2aulpg = Symbol();

const _C_static_initializers_l7015o = [];

class C {
  static #p = 1;
  static [_C_p_get_symbol_n974fg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_2aulpg](v) {
    C.#p = v;
  }
}

const _C_p_initializer_hckrq = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_n974fg],
    set: C[_C_p_set_symbol_2aulpg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_l7015o.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_2aulpg](_C_p_initializer_hckrq(C[_C_p_get_symbol_n974fg]()));

const _C_p_initializer_f5vbpg = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_n974fg],
    set: C[_C_p_set_symbol_2aulpg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined),
  addInitializer: initializer => _C_static_initializers_l7015o.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_2aulpg](_C_p_initializer_f5vbpg(C[_C_p_get_symbol_n974fg]()));

_C_static_initializers_l7015o.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_b9vl0g = Symbol();

const _D_p_set_symbol_86ureo = Symbol();

const _D_static_initializers_6knk8o = [];

class D extends C {
  static #p = 2;
  static [_D_p_get_symbol_b9vl0g]() {
    return D.#p;
  }
  static [_D_p_set_symbol_86ureo](v) {
    D.#p = v;
  }
}

const _D_p_initializer_kmtdtg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_b9vl0g],
    set: D[_D_p_set_symbol_86ureo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_6knk8o.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_86ureo](_D_p_initializer_kmtdtg(D[_D_p_get_symbol_b9vl0g]()));

const _D_p_initializer_4ev7u = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D[_D_p_get_symbol_b9vl0g],
    set: D[_D_p_set_symbol_86ureo]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(D, "private", undefined),
  addInitializer: initializer => _D_static_initializers_6knk8o.push(initializer)
}) ?? (v => v);

D[_D_p_set_symbol_86ureo](_D_p_initializer_4ev7u(D[_D_p_get_symbol_b9vl0g]()));

_D_static_initializers_6knk8o.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);