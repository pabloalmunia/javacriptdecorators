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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || Object.prototype);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : kind === "private" ? __metadataPrivate.has(base[Symbol.metadata][key]) ? __metadataPrivate.get(base[Symbol.metadata][key])[property] : undefined : base[Symbol.metadata][key][kind];
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
            return Object.values(__metadataPrivate.get(base[Symbol.metadata][key]) || {}).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], {});
        }
        __metadataPrivate.get(base[Symbol.metadata][key])[property] = value;
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_member_initializers_8e99o = [];

const _C_p_symbol_941ado = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_8e99o.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_8jsas() {}
  static [_C_p_symbol_941ado] = addProperty("a", 1)(C.prototype._C_p_temp_8jsas, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_941ado]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_8e99o.push(initializer)
  }) ?? C.prototype._C_p_temp_8jsas;
  static [_C_p_symbol_941ado] = addProperty("b", 2)(C[_C_p_symbol_941ado], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_941ado]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_8e99o.push(initializer)
  }) ?? C[_C_p_symbol_941ado];
  get #p() {
    return C[_C_p_symbol_941ado].bind(this)();
  }
  [_C_p_symbol_941ado]() {
    return C[_C_p_symbol_941ado].bind(this);
  }
}

delete C.prototype._C_p_temp_8jsas;

const _D_member_initializers_1t2brg = [];

const _D_p_symbol_i9datg = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_1t2brg.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_iq0k8() {}
  static [_D_p_symbol_i9datg] = addProperty("c", 3)(D.prototype._D_p_temp_iq0k8, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_i9datg]
    },
    ...__PrepareMetadata(D.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_1t2brg.push(initializer)
  }) ?? D.prototype._D_p_temp_iq0k8;
  static [_D_p_symbol_i9datg] = addProperty("d", 4)(D[_D_p_symbol_i9datg], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_i9datg]
    },
    ...__PrepareMetadata(D.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_1t2brg.push(initializer)
  }) ?? D[_D_p_symbol_i9datg];
  get #p() {
    return D[_D_p_symbol_i9datg].bind(this)();
  }
  [_D_p_symbol_i9datg]() {
    return D[_D_p_symbol_i9datg].bind(this);
  }
}

delete D.prototype._D_p_temp_iq0k8;

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