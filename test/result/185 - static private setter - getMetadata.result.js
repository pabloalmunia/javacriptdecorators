const META = Symbol();

function meta(value) {
  return function(element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata(META, a[a.length - 1] + value);
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

const _C_p_symbol_e30kuo = Symbol();

const _C_p_symbol_ro2kro = Symbol();

class C {
  static _C_p_temp_qk7ii(v) {}
  static [_C_p_symbol_e30kuo] = meta(1)(C._C_p_temp_qk7ii, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_e30kuo]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_qk7ii;
  static [_C_p_symbol_e30kuo] = meta(2)(C[_C_p_symbol_e30kuo], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_e30kuo]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_e30kuo];
  static set #p(v) {
    return C[_C_p_symbol_e30kuo].bind(this)(v);
  }
  static [_C_p_symbol_e30kuo]() {
    return C[_C_p_symbol_e30kuo].bind(this);
  }
  static _C_p_temp_12hcog() {}
  static [_C_p_symbol_ro2kro] = meta(3)(C._C_p_temp_12hcog, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_ro2kro]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_12hcog;
  static [_C_p_symbol_ro2kro] = meta(4)(C[_C_p_symbol_ro2kro], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_ro2kro]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_ro2kro];
  static get #p() {
    return C[_C_p_symbol_ro2kro].bind(this)();
  }
  static [_C_p_symbol_ro2kro]() {
    return C[_C_p_symbol_ro2kro].bind(this);
  }
}

delete C._C_p_temp_12hcog;

delete C._C_p_temp_qk7ii;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 10);