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

const _C_member_initializers_ch3khg = [];

const _C_m_symbol_5ohleg = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_ch3khg.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_gm9o9g() {}
  static [_C_m_symbol_5ohleg] = addProperty("a", 1)(C.prototype._C_m_temp_gm9o9g, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_5ohleg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_ch3khg.push(initializer)
  }) ?? C.prototype._C_m_temp_gm9o9g;
  static [_C_m_symbol_5ohleg] = addProperty("b", 2)(C[_C_m_symbol_5ohleg], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_5ohleg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_ch3khg.push(initializer)
  }) ?? C[_C_m_symbol_5ohleg];
  #m = C[_C_m_symbol_5ohleg];
  [_C_m_symbol_5ohleg]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_gm9o9g;

const _D_member_initializers_rld838 = [];

const _D_m_symbol_76qq4o = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_rld838.forEach(initialize => initialize.call(this));
  }
  _D_m_temp_443fco() {}
  static [_D_m_symbol_76qq4o] = addProperty("c", 3)(D.prototype._D_m_temp_443fco, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_76qq4o]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_rld838.push(initializer)
  }) ?? D.prototype._D_m_temp_443fco;
  static [_D_m_symbol_76qq4o] = addProperty("d", 4)(D[_D_m_symbol_76qq4o], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_76qq4o]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_rld838.push(initializer)
  }) ?? D[_D_m_symbol_76qq4o];
  #m = D[_D_m_symbol_76qq4o];
  [_D_m_symbol_76qq4o]() {
    return this.#m;
  }
}

delete D.prototype._D_m_temp_443fco;

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