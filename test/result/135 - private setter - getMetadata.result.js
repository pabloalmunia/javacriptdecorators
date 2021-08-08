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

const _C_p_symbol_ojrne = Symbol();

const _C_p_symbol_bkh9d8 = Symbol();

class C {
  _C_p_temp_0tf19g(v) {}
  static [_C_p_symbol_ojrne] = meta(1)(C.prototype._C_p_temp_0tf19g, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_ojrne]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p")
  }) ?? C.prototype._C_p_temp_0tf19g;
  static [_C_p_symbol_ojrne] = meta(2)(C[_C_p_symbol_ojrne], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_ojrne]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p")
  }) ?? C[_C_p_symbol_ojrne];
  set #p(v) {
    return C[_C_p_symbol_ojrne].bind(this)(v);
  }
  [_C_p_symbol_ojrne]() {
    return C[_C_p_symbol_ojrne].bind(this);
  }
  _C_p_temp_dhl1eo() {}
  static [_C_p_symbol_bkh9d8] = meta(3)(C.prototype._C_p_temp_dhl1eo, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_bkh9d8]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p")
  }) ?? C.prototype._C_p_temp_dhl1eo;
  static [_C_p_symbol_bkh9d8] = meta(4)(C[_C_p_symbol_bkh9d8], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_bkh9d8]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p")
  }) ?? C[_C_p_symbol_bkh9d8];
  get #p() {
    return C[_C_p_symbol_bkh9d8].bind(this)();
  }
  [_C_p_symbol_bkh9d8]() {
    return C[_C_p_symbol_bkh9d8].bind(this);
  }
}

delete C.prototype._C_p_temp_dhl1eo;

delete C.prototype._C_p_temp_0tf19g;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 10);