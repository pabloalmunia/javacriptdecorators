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

const _C_member_initializers_6tjhj8 = [];

const _C_p_symbol_cgbar8 = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_6tjhj8.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_r56qdg(v) {}
  static [_C_p_symbol_cgbar8] = addProperty("a", 1)(C.prototype._C_p_temp_r56qdg, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_cgbar8]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_6tjhj8.push(initializer)
  }) ?? C.prototype._C_p_temp_r56qdg;
  static [_C_p_symbol_cgbar8] = addProperty("b", 2)(C[_C_p_symbol_cgbar8], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_cgbar8]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_6tjhj8.push(initializer)
  }) ?? C[_C_p_symbol_cgbar8];
  set #p(v) {
    return C[_C_p_symbol_cgbar8].bind(this)(v);
  }
  [_C_p_symbol_cgbar8]() {
    return C[_C_p_symbol_cgbar8].bind(this);
  }
}

delete C.prototype._C_p_temp_r56qdg;

const _D_member_initializers_aiugco = [];

const _D_p_symbol_1rneoo = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_aiugco.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_he0g(v) {}
  static [_D_p_symbol_1rneoo] = addProperty("c", 3)(D.prototype._D_p_temp_he0g, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_1rneoo]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_aiugco.push(initializer)
  }) ?? D.prototype._D_p_temp_he0g;
  static [_D_p_symbol_1rneoo] = addProperty("d", 4)(D[_D_p_symbol_1rneoo], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_1rneoo]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_aiugco.push(initializer)
  }) ?? D[_D_p_symbol_1rneoo];
  set #p(v) {
    return D[_D_p_symbol_1rneoo].bind(this)(v);
  }
  [_D_p_symbol_1rneoo]() {
    return D[_D_p_symbol_1rneoo].bind(this);
  }
}

delete D.prototype._D_p_temp_he0g;

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