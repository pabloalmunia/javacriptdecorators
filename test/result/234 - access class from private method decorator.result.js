function getClass(klass) {
  console.log(klass.name);
  return function(value, context) {};
}

try {
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
  const _A_a_symbol_h0i7kg = Symbol();
  class A {
    _A_a_temp_8hga1o() {}
    static [_A_a_symbol_h0i7kg] = (() => {
      throw new ReferenceError("Cannot access 'A' before initialization");
      return getClass(A)(A.prototype._A_a_temp_8hga1o, {
        kind: "method",
        name: "#a",
        isStatic: false,
        isPrivate: true,
        access: {
          get: A.prototype[_A_a_symbol_h0i7kg]
        },
        ...__PrepareMetadata(A.prototype, "private", "#a")
      });
    })() ?? A.prototype._A_a_temp_8hga1o;
    #a = A[_A_a_symbol_h0i7kg];
    [_A_a_symbol_h0i7kg]() {
      return this.#a;
    }
  }
  delete A.prototype._A_a_temp_8hga1o;
  console.assert(false);
} catch (e) {
  console.assert(e.message === "Cannot access 'A' before initialization");
}