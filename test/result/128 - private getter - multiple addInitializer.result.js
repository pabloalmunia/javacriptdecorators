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

const _C_member_initializers_4c82so = [];

const _C_p_symbol_rnvr2 = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_4c82so.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_u6crkg() {}
  static [_C_p_symbol_rnvr2] = addProperty("a", 1)(C.prototype._C_p_temp_u6crkg, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_rnvr2]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_4c82so.push(initializer)
  }) ?? C.prototype._C_p_temp_u6crkg;
  static [_C_p_symbol_rnvr2] = addProperty("b", 2)(C[_C_p_symbol_rnvr2], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_rnvr2]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_4c82so.push(initializer)
  }) ?? C[_C_p_symbol_rnvr2];
  get #p() {
    return C[_C_p_symbol_rnvr2].bind(this)();
  }
  [_C_p_symbol_rnvr2]() {
    return C[_C_p_symbol_rnvr2].bind(this);
  }
}

delete C.prototype._C_p_temp_u6crkg;

const _D_member_initializers_tf4rtg = [];

const _D_p_symbol_kjl4ig = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_tf4rtg.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_njhfn8() {}
  static [_D_p_symbol_kjl4ig] = addProperty("c", 3)(D.prototype._D_p_temp_njhfn8, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_kjl4ig]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_tf4rtg.push(initializer)
  }) ?? D.prototype._D_p_temp_njhfn8;
  static [_D_p_symbol_kjl4ig] = addProperty("d", 4)(D[_D_p_symbol_kjl4ig], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_kjl4ig]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_tf4rtg.push(initializer)
  }) ?? D[_D_p_symbol_kjl4ig];
  get #p() {
    return D[_D_p_symbol_kjl4ig].bind(this)();
  }
  [_D_p_symbol_kjl4ig]() {
    return D[_D_p_symbol_kjl4ig].bind(this);
  }
}

delete D.prototype._D_p_temp_njhfn8;

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