const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    context.setMetadata(META, n + value);
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

const _C_p_symbol_uh5c6 = Symbol();

const _C_p_symbol_h07e4g = Symbol();

class C {
  static _C_p_temp_blfe9o(v) {}
  static [_C_p_symbol_uh5c6] = meta(1)(C._C_p_temp_blfe9o, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_uh5c6]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C._C_p_temp_blfe9o;
  static [_C_p_symbol_uh5c6] = meta(2)(C[_C_p_symbol_uh5c6], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_uh5c6]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C[_C_p_symbol_uh5c6];
  static set #p(v) {
    return C[_C_p_symbol_uh5c6].bind(this)(v);
  }
  static [_C_p_symbol_uh5c6]() {
    return C[_C_p_symbol_uh5c6].bind(this);
  }
  static _C_p_temp_k40gq() {}
  static [_C_p_symbol_h07e4g] = meta(3)(C._C_p_temp_k40gq, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_h07e4g]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C._C_p_temp_k40gq;
  static [_C_p_symbol_h07e4g] = meta(4)(C[_C_p_symbol_h07e4g], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_h07e4g]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C[_C_p_symbol_h07e4g];
  static get #p() {
    return C[_C_p_symbol_h07e4g].bind(this)();
  }
  static [_C_p_symbol_h07e4g]() {
    return C[_C_p_symbol_h07e4g].bind(this);
  }
}

delete C._C_p_temp_k40gq;

delete C._C_p_temp_blfe9o;

console.assert(C[Symbol.metadata][META].private[0] === 10);