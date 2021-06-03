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

const _C_static_initializers_qe4eog = [];

const _C_p_symbol_bmskf8 = Symbol();

class C {
  static _C_p_temp_mb81jo() {}
  static [_C_p_symbol_bmskf8] = addProperty("a", 1)(C._C_p_temp_mb81jo, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_bmskf8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_qe4eog.push(initializer)
  }) ?? C._C_p_temp_mb81jo;
  static [_C_p_symbol_bmskf8] = addProperty("b", 2)(C[_C_p_symbol_bmskf8], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_bmskf8]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_qe4eog.push(initializer)
  }) ?? C[_C_p_symbol_bmskf8];
  static get #p() {
    return C[_C_p_symbol_bmskf8].bind(this)();
  }
  static [_C_p_symbol_bmskf8]() {
    return C[_C_p_symbol_bmskf8].bind(this);
  }
}

delete C._C_p_temp_mb81jo;

_C_static_initializers_qe4eog.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_in9tq = [];

const _D_p_symbol_0fv4tg = Symbol();

class D extends C {
  static _D_p_temp_4hoov8() {}
  static [_D_p_symbol_0fv4tg] = addProperty("c", 3)(D._D_p_temp_4hoov8, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_0fv4tg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_in9tq.push(initializer)
  }) ?? D._D_p_temp_4hoov8;
  static [_D_p_symbol_0fv4tg] = addProperty("d", 4)(D[_D_p_symbol_0fv4tg], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_0fv4tg]
    },
    ...__PrepareMetadata(D, "private", undefined),
    addInitializer: initializer => _D_static_initializers_in9tq.push(initializer)
  }) ?? D[_D_p_symbol_0fv4tg];
  static get #p() {
    return D[_D_p_symbol_0fv4tg].bind(this)();
  }
  static [_D_p_symbol_0fv4tg]() {
    return D[_D_p_symbol_0fv4tg].bind(this);
  }
}

delete D._D_p_temp_4hoov8;

_D_static_initializers_in9tq.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);