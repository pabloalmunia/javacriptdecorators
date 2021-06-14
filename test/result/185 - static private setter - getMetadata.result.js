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

const _C_p_symbol_ub97h = Symbol();

const _C_p_symbol_3ivm3o = Symbol();

class C {
  static _C_p_temp_l45j9(v) {}
  static [_C_p_symbol_ub97h] = meta(1)(C._C_p_temp_l45j9, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_ub97h]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_l45j9;
  static [_C_p_symbol_ub97h] = meta(2)(C[_C_p_symbol_ub97h], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_ub97h]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_ub97h];
  static set #p(v) {
    return C[_C_p_symbol_ub97h].bind(this)(v);
  }
  static [_C_p_symbol_ub97h]() {
    return C[_C_p_symbol_ub97h].bind(this);
  }
  static _C_p_temp_pkqg8o() {}
  static [_C_p_symbol_3ivm3o] = meta(3)(C._C_p_temp_pkqg8o, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_3ivm3o]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_pkqg8o;
  static [_C_p_symbol_3ivm3o] = meta(4)(C[_C_p_symbol_3ivm3o], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_3ivm3o]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_3ivm3o];
  static get #p() {
    return C[_C_p_symbol_3ivm3o].bind(this)();
  }
  static [_C_p_symbol_3ivm3o]() {
    return C[_C_p_symbol_3ivm3o].bind(this);
  }
}

delete C._C_p_temp_pkqg8o;

delete C._C_p_temp_l45j9;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 10);