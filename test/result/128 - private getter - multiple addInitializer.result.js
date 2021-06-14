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

const _C_member_initializers_qabgjg = [];

const _C_p_symbol_3iuttg = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_qabgjg.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_l4c66() {}
  static [_C_p_symbol_3iuttg] = addProperty("a", 1)(C.prototype._C_p_temp_l4c66, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_3iuttg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_qabgjg.push(initializer)
  }) ?? C.prototype._C_p_temp_l4c66;
  static [_C_p_symbol_3iuttg] = addProperty("b", 2)(C[_C_p_symbol_3iuttg], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_3iuttg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_qabgjg.push(initializer)
  }) ?? C[_C_p_symbol_3iuttg];
  get #p() {
    return C[_C_p_symbol_3iuttg].bind(this)();
  }
  [_C_p_symbol_3iuttg]() {
    return C[_C_p_symbol_3iuttg].bind(this);
  }
}

delete C.prototype._C_p_temp_l4c66;

const _D_member_initializers_1q9lt = [];

const _D_p_symbol_9cmri = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_1q9lt.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_ohn528() {}
  static [_D_p_symbol_9cmri] = addProperty("c", 3)(D.prototype._D_p_temp_ohn528, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_9cmri]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_1q9lt.push(initializer)
  }) ?? D.prototype._D_p_temp_ohn528;
  static [_D_p_symbol_9cmri] = addProperty("d", 4)(D[_D_p_symbol_9cmri], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_9cmri]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_1q9lt.push(initializer)
  }) ?? D[_D_p_symbol_9cmri];
  get #p() {
    return D[_D_p_symbol_9cmri].bind(this)();
  }
  [_D_p_symbol_9cmri]() {
    return D[_D_p_symbol_9cmri].bind(this);
  }
}

delete D.prototype._D_p_temp_ohn528;

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