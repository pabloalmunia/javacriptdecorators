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

const _C_member_initializers_icsgoo = [];

const _C_p_symbol_2n9jag = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_icsgoo.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_dtarp8(v) {}
  static [_C_p_symbol_2n9jag] = addProperty("a", 1)(C.prototype._C_p_temp_dtarp8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_2n9jag]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_icsgoo.push(initializer)
  }) ?? C.prototype._C_p_temp_dtarp8;
  static [_C_p_symbol_2n9jag] = addProperty("b", 2)(C[_C_p_symbol_2n9jag], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_2n9jag]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_icsgoo.push(initializer)
  }) ?? C[_C_p_symbol_2n9jag];
  set #p(v) {
    return C[_C_p_symbol_2n9jag].bind(this)(v);
  }
  [_C_p_symbol_2n9jag]() {
    return C[_C_p_symbol_2n9jag].bind(this);
  }
}

delete C.prototype._C_p_temp_dtarp8;

const _D_member_initializers_2c3plo = [];

const _D_p_symbol_m1n7g8 = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_2c3plo.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_b2nla(v) {}
  static [_D_p_symbol_m1n7g8] = addProperty("c", 3)(D.prototype._D_p_temp_b2nla, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_m1n7g8]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_2c3plo.push(initializer)
  }) ?? D.prototype._D_p_temp_b2nla;
  static [_D_p_symbol_m1n7g8] = addProperty("d", 4)(D[_D_p_symbol_m1n7g8], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_m1n7g8]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_2c3plo.push(initializer)
  }) ?? D[_D_p_symbol_m1n7g8];
  set #p(v) {
    return D[_D_p_symbol_m1n7g8].bind(this)(v);
  }
  [_D_p_symbol_m1n7g8]() {
    return D[_D_p_symbol_m1n7g8].bind(this);
  }
}

delete D.prototype._D_p_temp_b2nla;

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