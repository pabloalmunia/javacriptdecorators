function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
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

const _C_member_initializers_dmdemo = [];

const _C_m_symbol_8dbrro = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_dmdemo.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_t5f6() {}
  static [_C_m_symbol_8dbrro] = addProperty("a", 1)(C.prototype._C_m_temp_t5f6, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_8dbrro]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_dmdemo.push(initializer)
  }) ?? C.prototype._C_m_temp_t5f6;
  static [_C_m_symbol_8dbrro] = addProperty("b", 2)(C[_C_m_symbol_8dbrro], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_8dbrro]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_dmdemo.push(initializer)
  }) ?? C[_C_m_symbol_8dbrro];
  #m = C[_C_m_symbol_8dbrro];
  [_C_m_symbol_8dbrro]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_t5f6;

const _D_member_initializers_543hjg = [];

const _D_m_symbol_8r3hko = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_543hjg.forEach(initialize => initialize.call(this));
  }
  _D_m_temp_8ouql8() {}
  static [_D_m_symbol_8r3hko] = addProperty("c", 3)(D.prototype._D_m_temp_8ouql8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_8r3hko]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_543hjg.push(initializer)
  }) ?? D.prototype._D_m_temp_8ouql8;
  static [_D_m_symbol_8r3hko] = addProperty("d", 4)(D[_D_m_symbol_8r3hko], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_8r3hko]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_543hjg.push(initializer)
  }) ?? D[_D_m_symbol_8r3hko];
  #m = D[_D_m_symbol_8r3hko];
  [_D_m_symbol_8r3hko]() {
    return this.#m;
  }
}

delete D.prototype._D_m_temp_8ouql8;

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);