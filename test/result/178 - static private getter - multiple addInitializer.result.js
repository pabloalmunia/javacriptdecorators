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

const _C_static_initializers_vf7svo = [];

const _C_p_symbol_6jia8g = Symbol();

class C {
  static _C_p_temp_59rel() {}
  static [_C_p_symbol_6jia8g] = addProperty("a", 1)(C._C_p_temp_59rel, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_6jia8g]
    },
    ...__PrepareMetadata(C, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_vf7svo.push(initializer)
  }) ?? C._C_p_temp_59rel;
  static [_C_p_symbol_6jia8g] = addProperty("b", 2)(C[_C_p_symbol_6jia8g], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_6jia8g]
    },
    ...__PrepareMetadata(C, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_vf7svo.push(initializer)
  }) ?? C[_C_p_symbol_6jia8g];
  static get #p() {
    return C[_C_p_symbol_6jia8g].bind(this)();
  }
  static [_C_p_symbol_6jia8g]() {
    return C[_C_p_symbol_6jia8g].bind(this);
  }
}

delete C._C_p_temp_59rel;

_C_static_initializers_vf7svo.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_i1v3t8 = [];

const _D_p_symbol_78fne = Symbol();

class D extends C {
  static _D_p_temp_27mrn() {}
  static [_D_p_symbol_78fne] = addProperty("c", 3)(D._D_p_temp_27mrn, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_78fne]
    },
    ...__PrepareMetadata(D, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_i1v3t8.push(initializer)
  }) ?? D._D_p_temp_27mrn;
  static [_D_p_symbol_78fne] = addProperty("d", 4)(D[_D_p_symbol_78fne], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: D[_D_p_symbol_78fne]
    },
    ...__PrepareMetadata(D, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_i1v3t8.push(initializer)
  }) ?? D[_D_p_symbol_78fne];
  static get #p() {
    return D[_D_p_symbol_78fne].bind(this)();
  }
  static [_D_p_symbol_78fne]() {
    return D[_D_p_symbol_78fne].bind(this);
  }
}

delete D._D_p_temp_27mrn;

_D_static_initializers_i1v3t8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);