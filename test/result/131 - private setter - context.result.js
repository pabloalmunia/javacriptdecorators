function decorator(value, context) {
  console.assert(context.kind === "setter");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
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

const _A_p_symbol_t84sl8 = Symbol();

class A {
  _A_p_temp_p1jddo(v) {}
  static [_A_p_symbol_t84sl8] = decorator(A.prototype._A_p_temp_p1jddo, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: A.prototype[_A_p_symbol_t84sl8]
    },
    ...__PrepareMetadata(A.prototype, "private", "#p")
  }) ?? A.prototype._A_p_temp_p1jddo;
  set #p(v) {
    return A[_A_p_symbol_t84sl8].bind(this)(v);
  }
  [_A_p_symbol_t84sl8]() {
    return A[_A_p_symbol_t84sl8].bind(this);
  }
}

delete A.prototype._A_p_temp_p1jddo;