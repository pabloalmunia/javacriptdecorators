function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}

function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
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

const _C_double_symbol_mfpokg = Symbol();

class C {
  #multi = 2;
  _C_double_temp_k0g1e8(v) {
    return v * this.#multi;
  }
  static [_C_double_symbol_mfpokg] = decorator1(C.prototype._C_double_temp_k0g1e8, {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_double_symbol_mfpokg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C.prototype._C_double_temp_k0g1e8;
  static [_C_double_symbol_mfpokg] = decorator2(C[_C_double_symbol_mfpokg], {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_double_symbol_mfpokg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C[_C_double_symbol_mfpokg];
  #double = C[_C_double_symbol_mfpokg];
  [_C_double_symbol_mfpokg]() {
    return this.#double;
  }
  checker(v) {
    return this.#double;
  }
}

delete C.prototype._C_double_temp_k0g1e8;

console.assert(new C().checker().one === 1);

console.assert(new C().checker().two === 2);