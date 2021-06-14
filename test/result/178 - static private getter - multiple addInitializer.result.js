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

const _C_static_initializers_83vki = [];

const _C_p_symbol_o4g5h8 = Symbol();

class C {
  static _C_p_temp_2gdql() {}
  static [_C_p_symbol_o4g5h8] = addProperty("a", 1)(C._C_p_temp_2gdql, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_o4g5h8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_83vki.push(initializer)
  }) ?? C._C_p_temp_2gdql;
  static [_C_p_symbol_o4g5h8] = addProperty("b", 2)(C[_C_p_symbol_o4g5h8], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_o4g5h8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_83vki.push(initializer)
  }) ?? C[_C_p_symbol_o4g5h8];
  static get #p() {
    return C[_C_p_symbol_o4g5h8].bind(this)();
  }
  static [_C_p_symbol_o4g5h8]() {
    return C[_C_p_symbol_o4g5h8].bind(this);
  }
}

delete C._C_p_temp_2gdql;

_C_static_initializers_83vki.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_d1kmdg = [];

const _D_p_symbol_259efg = Symbol();

class D extends C {
  static _D_p_temp_s7p088() {}
  static [_D_p_symbol_259efg] = addProperty("c", 3)(D._D_p_temp_s7p088, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_259efg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_d1kmdg.push(initializer)
  }) ?? D._D_p_temp_s7p088;
  static [_D_p_symbol_259efg] = addProperty("d", 4)(D[_D_p_symbol_259efg], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_259efg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_d1kmdg.push(initializer)
  }) ?? D[_D_p_symbol_259efg];
  static get #p() {
    return D[_D_p_symbol_259efg].bind(this)();
  }
  static [_D_p_symbol_259efg]() {
    return D[_D_p_symbol_259efg].bind(this);
  }
}

delete D._D_p_temp_s7p088;

_D_static_initializers_d1kmdg.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);