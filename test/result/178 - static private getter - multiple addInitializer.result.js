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

const _C_static_initializers_90d2j = [];

const _C_p_symbol_st61e = Symbol();

class C {
  static _C_p_temp_cbh4l() {}
  static [_C_p_symbol_st61e] = addProperty("a", 1)(C._C_p_temp_cbh4l, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_st61e]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_90d2j.push(initializer)
  }) ?? C._C_p_temp_cbh4l;
  static [_C_p_symbol_st61e] = addProperty("b", 2)(C[_C_p_symbol_st61e], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_st61e]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_90d2j.push(initializer)
  }) ?? C[_C_p_symbol_st61e];
  static get #p() {
    return C[_C_p_symbol_st61e].bind(this)();
  }
  static [_C_p_symbol_st61e]() {
    return C[_C_p_symbol_st61e].bind(this);
  }
}

delete C._C_p_temp_cbh4l;

_C_static_initializers_90d2j.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_gfds2g = [];

const _D_p_symbol_ufatuo = Symbol();

class D extends C {
  static _D_p_temp_dapmqg() {}
  static [_D_p_symbol_ufatuo] = addProperty("c", 3)(D._D_p_temp_dapmqg, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_ufatuo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_gfds2g.push(initializer)
  }) ?? D._D_p_temp_dapmqg;
  static [_D_p_symbol_ufatuo] = addProperty("d", 4)(D[_D_p_symbol_ufatuo], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_ufatuo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_gfds2g.push(initializer)
  }) ?? D[_D_p_symbol_ufatuo];
  static get #p() {
    return D[_D_p_symbol_ufatuo].bind(this)();
  }
  static [_D_p_symbol_ufatuo]() {
    return D[_D_p_symbol_ufatuo].bind(this);
  }
}

delete D._D_p_temp_dapmqg;

_D_static_initializers_gfds2g.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);