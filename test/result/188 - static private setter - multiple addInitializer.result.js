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

const _C_static_initializers_fpb5f8 = [];

const _C_p_symbol_63ibqg = Symbol();

class C {
  static _C_p_temp_0106h(v) {}
  static [_C_p_symbol_63ibqg] = addProperty("a", 1)(C._C_p_temp_0106h, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_63ibqg]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_fpb5f8.push(initializer)
  }) ?? C._C_p_temp_0106h;
  static [_C_p_symbol_63ibqg] = addProperty("b", 2)(C[_C_p_symbol_63ibqg], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_63ibqg]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_fpb5f8.push(initializer)
  }) ?? C[_C_p_symbol_63ibqg];
  static set #p(v) {
    return C[_C_p_symbol_63ibqg].bind(this)(v);
  }
  static [_C_p_symbol_63ibqg]() {
    return C[_C_p_symbol_63ibqg].bind(this);
  }
}

delete C._C_p_temp_0106h;

_C_static_initializers_fpb5f8.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_pnusb = [];

const _D_p_symbol_i6jhmg = Symbol();

class D extends C {
  static _D_p_temp_77g8t(v) {}
  static [_D_p_symbol_i6jhmg] = addProperty("c", 3)(D._D_p_temp_77g8t, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_i6jhmg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_pnusb.push(initializer)
  }) ?? D._D_p_temp_77g8t;
  static [_D_p_symbol_i6jhmg] = addProperty("d", 4)(D[_D_p_symbol_i6jhmg], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_i6jhmg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_pnusb.push(initializer)
  }) ?? D[_D_p_symbol_i6jhmg];
  static set #p(v) {
    return D[_D_p_symbol_i6jhmg].bind(this)(v);
  }
  static [_D_p_symbol_i6jhmg]() {
    return D[_D_p_symbol_i6jhmg].bind(this);
  }
}

delete D._D_p_temp_77g8t;

_D_static_initializers_pnusb.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);