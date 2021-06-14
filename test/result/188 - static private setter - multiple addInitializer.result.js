function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

const _C_static_initializers_4cgrrg = [];

const _C_p_symbol_rkutv = Symbol();

class C {
  static _C_p_temp_l7q7u8(v) {}
  static [_C_p_symbol_rkutv] = addProperty("a", 1)(C._C_p_temp_l7q7u8, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_rkutv]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_4cgrrg.push(initializer)
  }) ?? C._C_p_temp_l7q7u8;
  static [_C_p_symbol_rkutv] = addProperty("b", 2)(C[_C_p_symbol_rkutv], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_rkutv]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_4cgrrg.push(initializer)
  }) ?? C[_C_p_symbol_rkutv];
  static set #p(v) {
    return C[_C_p_symbol_rkutv].bind(this)(v);
  }
  static [_C_p_symbol_rkutv]() {
    return C[_C_p_symbol_rkutv].bind(this);
  }
}

delete C._C_p_temp_l7q7u8;

_C_static_initializers_4cgrrg.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_tvlf6o = [];

const _D_p_symbol_2aut1o = Symbol();

class D extends C {
  static _D_p_temp_d5l758(v) {}
  static [_D_p_symbol_2aut1o] = addProperty("c", 3)(D._D_p_temp_d5l758, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_2aut1o]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_tvlf6o.push(initializer)
  }) ?? D._D_p_temp_d5l758;
  static [_D_p_symbol_2aut1o] = addProperty("d", 4)(D[_D_p_symbol_2aut1o], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_2aut1o]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_tvlf6o.push(initializer)
  }) ?? D[_D_p_symbol_2aut1o];
  static set #p(v) {
    return D[_D_p_symbol_2aut1o].bind(this)(v);
  }
  static [_D_p_symbol_2aut1o]() {
    return D[_D_p_symbol_2aut1o].bind(this);
  }
}

delete D._D_p_temp_d5l758;

_D_static_initializers_tvlf6o.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);