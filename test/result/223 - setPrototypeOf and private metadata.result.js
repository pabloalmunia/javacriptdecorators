const KEY = Symbol();

function metadata(data) {
  return function(value, context) {
    context.setMetadata(KEY, data);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

const _A_a_symbol_0dgm3g = Symbol();

class A {
  _A_a_temp_43lm0o() {}
  static [_A_a_symbol_0dgm3g] = metadata(10)(A.prototype._A_a_temp_43lm0o, {
    kind: "method",
    name: "#a",
    isStatic: false,
    isPrivate: true,
    access: {
      get: A.prototype[_A_a_symbol_0dgm3g]
    },
    ...__PrepareMetadata(A.prototype, "private", undefined)
  }) ?? A.prototype._A_a_temp_43lm0o;
  #a = A[_A_a_symbol_0dgm3g];
  [_A_a_symbol_0dgm3g]() {
    return this.#a;
  }
}

delete A.prototype._A_a_temp_43lm0o;

const _B_b_symbol_gt06n = Symbol();

class B extends A {
  _B_b_temp_v9cabg() {}
  static [_B_b_symbol_gt06n] = metadata(20)(B.prototype._B_b_temp_v9cabg, {
    kind: "method",
    name: "#b",
    isStatic: false,
    isPrivate: true,
    access: {
      get: B.prototype[_B_b_symbol_gt06n]
    },
    ...__PrepareMetadata(B.prototype, "private", undefined)
  }) ?? B.prototype._B_b_temp_v9cabg;
  #b = B[_B_b_symbol_gt06n];
  [_B_b_symbol_gt06n]() {
    return this.#b;
  }
}

delete B.prototype._B_b_temp_v9cabg;

const _C_c_symbol_ilce18 = Symbol();

class C extends B {
  _C_c_temp_iaogfo() {}
  static [_C_c_symbol_ilce18] = metadata(30)(C.prototype._C_c_temp_iaogfo, {
    kind: "method",
    name: "#c",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_c_symbol_ilce18]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C.prototype._C_c_temp_iaogfo;
  #c = C[_C_c_symbol_ilce18];
  [_C_c_symbol_ilce18]() {
    return this.#c;
  }
}

delete C.prototype._C_c_temp_iaogfo;

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);

console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 20);

console.assert(C.prototype[Symbol.metadata][KEY].private[2] === 10);

class Z {
  z() {}
}

Z.prototype.z = metadata(40)(Z.prototype.z, {
  kind: "method",
  name: "z",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(Z.prototype, "public", "z")
}) ?? Z.prototype.z;

Object.setPrototypeOf(C.prototype, Z.prototype);

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);

console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 20);

console.assert(C.prototype[Symbol.metadata][KEY].private[2] === 10);