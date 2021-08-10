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

const _C_static_initializers_enkgfo = [];

const _C_p_symbol_2diu28 = Symbol();

class __C_0gh02o {
  static _C_p_temp_ivm5k(v) {}
  static [_C_p_symbol_2diu28] = addProperty("a", 1)(__C_0gh02o._C_p_temp_ivm5k, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_0gh02o[_C_p_symbol_2diu28]
    },
    ...__PrepareMetadata(__C_0gh02o, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_enkgfo.push(initializer)
  }) ?? __C_0gh02o._C_p_temp_ivm5k;
  static [_C_p_symbol_2diu28] = addProperty("b", 2)(__C_0gh02o[_C_p_symbol_2diu28], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_0gh02o[_C_p_symbol_2diu28]
    },
    ...__PrepareMetadata(__C_0gh02o, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_enkgfo.push(initializer)
  }) ?? __C_0gh02o[_C_p_symbol_2diu28];
  static set #p(v) {
    return __C_0gh02o[_C_p_symbol_2diu28].bind(this)(v);
  }
  static [_C_p_symbol_2diu28]() {
    return __C_0gh02o[_C_p_symbol_2diu28].bind(this);
  }
}

delete __C_0gh02o._C_p_temp_ivm5k;

let C = __C_0gh02o;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_enkgfo.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_6tudmo = [];

const _D_p_symbol_aeflcg = Symbol();

class __D_6msiq extends C {
  static _D_p_temp_87tjug(v) {}
  static [_D_p_symbol_aeflcg] = addProperty("c", 3)(__D_6msiq._D_p_temp_87tjug, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_6msiq[_D_p_symbol_aeflcg]
    },
    ...__PrepareMetadata(__D_6msiq, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_6tudmo.push(initializer)
  }) ?? __D_6msiq._D_p_temp_87tjug;
  static [_D_p_symbol_aeflcg] = addProperty("d", 4)(__D_6msiq[_D_p_symbol_aeflcg], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_6msiq[_D_p_symbol_aeflcg]
    },
    ...__PrepareMetadata(__D_6msiq, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_6tudmo.push(initializer)
  }) ?? __D_6msiq[_D_p_symbol_aeflcg];
  static set #p(v) {
    return __D_6msiq[_D_p_symbol_aeflcg].bind(this)(v);
  }
  static [_D_p_symbol_aeflcg]() {
    return __D_6msiq[_D_p_symbol_aeflcg].bind(this);
  }
}

delete __D_6msiq._D_p_temp_87tjug;

let D = __D_6msiq;

Object.defineProperty(D, "name", {
  value: "D"
});

_D_static_initializers_6tudmo.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);