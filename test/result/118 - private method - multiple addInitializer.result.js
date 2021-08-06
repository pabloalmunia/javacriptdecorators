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

const _C_member_initializers_0vb0ro = [];

const _C_m_symbol_8kaol = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_0vb0ro.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_k52io8() {}
  static [_C_m_symbol_8kaol] = addProperty("a", 1)(C.prototype._C_m_temp_k52io8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_8kaol]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_0vb0ro.push(initializer)
  }) ?? C.prototype._C_m_temp_k52io8;
  static [_C_m_symbol_8kaol] = addProperty("b", 2)(C[_C_m_symbol_8kaol], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_8kaol]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_0vb0ro.push(initializer)
  }) ?? C[_C_m_symbol_8kaol];
  #m = C[_C_m_symbol_8kaol];
  [_C_m_symbol_8kaol]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_k52io8;

const _D_member_initializers_s1t9qg = [];

const _D_m_symbol_hmvk18 = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_s1t9qg.forEach(initialize => initialize.call(this));
  }
  _D_m_temp_bg2mno() {}
  static [_D_m_symbol_hmvk18] = addProperty("c", 3)(D.prototype._D_m_temp_bg2mno, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_hmvk18]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_s1t9qg.push(initializer)
  }) ?? D.prototype._D_m_temp_bg2mno;
  static [_D_m_symbol_hmvk18] = addProperty("d", 4)(D[_D_m_symbol_hmvk18], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_hmvk18]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_s1t9qg.push(initializer)
  }) ?? D[_D_m_symbol_hmvk18];
  #m = D[_D_m_symbol_hmvk18];
  [_D_m_symbol_hmvk18]() {
    return this.#m;
  }
}

delete D.prototype._D_m_temp_bg2mno;

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