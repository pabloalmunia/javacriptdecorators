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

const _C_static_initializers_fu4glg = [];

const _C_p_symbol_v269k = Symbol();

class __C_kf6hfo {
  static _C_p_temp_d7prp() {}
  static [_C_p_symbol_v269k] = addProperty("a", 1)(__C_kf6hfo._C_p_temp_d7prp, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_kf6hfo[_C_p_symbol_v269k]
    },
    ...__PrepareMetadata(__C_kf6hfo, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_fu4glg.push(initializer)
  }) ?? __C_kf6hfo._C_p_temp_d7prp;
  static [_C_p_symbol_v269k] = addProperty("b", 2)(__C_kf6hfo[_C_p_symbol_v269k], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_kf6hfo[_C_p_symbol_v269k]
    },
    ...__PrepareMetadata(__C_kf6hfo, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_fu4glg.push(initializer)
  }) ?? __C_kf6hfo[_C_p_symbol_v269k];
  static get #p() {
    return __C_kf6hfo[_C_p_symbol_v269k].bind(this)();
  }
  static [_C_p_symbol_v269k]() {
    return __C_kf6hfo[_C_p_symbol_v269k].bind(this);
  }
}

delete __C_kf6hfo._C_p_temp_d7prp;

let C = __C_kf6hfo;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_fu4glg.forEach(initialize => initialize.call(C, C));

const _D_static_initializers_flpdb8 = [];

const _D_p_symbol_2e3vvo = Symbol();

class __D_qqvvjg extends C {
  static _D_p_temp_s37bhg() {}
  static [_D_p_symbol_2e3vvo] = addProperty("c", 3)(__D_qqvvjg._D_p_temp_s37bhg, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_qqvvjg[_D_p_symbol_2e3vvo]
    },
    ...__PrepareMetadata(__D_qqvvjg, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_flpdb8.push(initializer)
  }) ?? __D_qqvvjg._D_p_temp_s37bhg;
  static [_D_p_symbol_2e3vvo] = addProperty("d", 4)(__D_qqvvjg[_D_p_symbol_2e3vvo], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __D_qqvvjg[_D_p_symbol_2e3vvo]
    },
    ...__PrepareMetadata(__D_qqvvjg, "private", "#p"),
    addInitializer: initializer => _D_static_initializers_flpdb8.push(initializer)
  }) ?? __D_qqvvjg[_D_p_symbol_2e3vvo];
  static get #p() {
    return __D_qqvvjg[_D_p_symbol_2e3vvo].bind(this)();
  }
  static [_D_p_symbol_2e3vvo]() {
    return __D_qqvvjg[_D_p_symbol_2e3vvo].bind(this);
  }
}

delete __D_qqvvjg._D_p_temp_s37bhg;

let D = __D_qqvvjg;

Object.defineProperty(D, "name", {
  value: "D"
});

_D_static_initializers_flpdb8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);