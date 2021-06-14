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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

const _C_p_symbol_s1rrr = Symbol();

const _C_p_symbol_10l2i = Symbol();

class C {
  static _C_p_temp_k8um4g(v) {}
  static [_C_p_symbol_s1rrr] = meta(1)(C._C_p_temp_k8um4g, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_s1rrr]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_k8um4g;
  static [_C_p_symbol_s1rrr] = meta(2)(C[_C_p_symbol_s1rrr], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_s1rrr]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_s1rrr];
  static set #p(v) {
    return C[_C_p_symbol_s1rrr].bind(this)(v);
  }
  static [_C_p_symbol_s1rrr]() {
    return C[_C_p_symbol_s1rrr].bind(this);
  }
  static _C_p_temp_2ivsfg() {}
  static [_C_p_symbol_10l2i] = meta(3)(C._C_p_temp_2ivsfg, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_10l2i]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_2ivsfg;
  static [_C_p_symbol_10l2i] = meta(4)(C[_C_p_symbol_10l2i], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_10l2i]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_10l2i];
  static get #p() {
    return C[_C_p_symbol_10l2i].bind(this)();
  }
  static [_C_p_symbol_10l2i]() {
    return C[_C_p_symbol_10l2i].bind(this);
  }
}

delete C._C_p_temp_2ivsfg;

delete C._C_p_temp_k8um4g;

console.assert(C[Symbol.metadata][META].private[0] === 1);

console.assert(C[Symbol.metadata][META].private[1] === 3);

console.assert(C[Symbol.metadata][META].private[2] === 6);

console.assert(C[Symbol.metadata][META].private[3] === 10);