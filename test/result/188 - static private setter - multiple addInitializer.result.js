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

const _C_static_initializers_k5tcm = [];

const _C_p_symbol_1mihio = Symbol();

class C {
  static _C_p_temp_6d23j(v) {}
  static [_C_p_symbol_1mihio] = addProperty("a", 1)(C._C_p_temp_6d23j, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_1mihio]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_k5tcm.push(initializer)
  }) ?? C._C_p_temp_6d23j;
  static [_C_p_symbol_1mihio] = addProperty("b", 2)(C[_C_p_symbol_1mihio], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_1mihio]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_k5tcm.push(initializer)
  }) ?? C[_C_p_symbol_1mihio];
  static set #p(v) {
    return C[_C_p_symbol_1mihio].bind(this)(v);
  }
  static [_C_p_symbol_1mihio]() {
    return C[_C_p_symbol_1mihio].bind(this);
  }
}

delete C._C_p_temp_6d23j;

_C_static_initializers_k5tcm.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_0ck8r8 = [];

const _D_p_symbol_sf0bbo = Symbol();

class D extends C {
  static _D_p_temp_f3iv(v) {}
  static [_D_p_symbol_sf0bbo] = addProperty("c", 3)(D._D_p_temp_f3iv, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_sf0bbo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_0ck8r8.push(initializer)
  }) ?? D._D_p_temp_f3iv;
  static [_D_p_symbol_sf0bbo] = addProperty("d", 4)(D[_D_p_symbol_sf0bbo], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_sf0bbo]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_0ck8r8.push(initializer)
  }) ?? D[_D_p_symbol_sf0bbo];
  static set #p(v) {
    return D[_D_p_symbol_sf0bbo].bind(this)(v);
  }
  static [_D_p_symbol_sf0bbo]() {
    return D[_D_p_symbol_sf0bbo].bind(this);
  }
}

delete D._D_p_temp_f3iv;

_D_static_initializers_0ck8r8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);