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

const _A_a_symbol_6o2ado = Symbol();

class A {
  _A_a_temp_u53gd8() {}
  static [_A_a_symbol_6o2ado] = metadata(10)(A.prototype._A_a_temp_u53gd8, {
    kind: "method",
    name: "#a",
    isStatic: false,
    isPrivate: true,
    access: {
      get: A.prototype[_A_a_symbol_6o2ado]
    },
    ...__PrepareMetadata(A.prototype, "private", "#a")
  }) ?? A.prototype._A_a_temp_u53gd8;
  #a = A[_A_a_symbol_6o2ado];
  [_A_a_symbol_6o2ado]() {
    return this.#a;
  }
}

delete A.prototype._A_a_temp_u53gd8;

const _B_b_symbol_h5e6uo = Symbol();

class B extends A {
  _B_b_temp_nbh34() {}
  static [_B_b_symbol_h5e6uo] = metadata(20)(B.prototype._B_b_temp_nbh34, {
    kind: "method",
    name: "#b",
    isStatic: false,
    isPrivate: true,
    access: {
      get: B.prototype[_B_b_symbol_h5e6uo]
    },
    ...__PrepareMetadata(B.prototype, "private", "#b")
  }) ?? B.prototype._B_b_temp_nbh34;
  #b = B[_B_b_symbol_h5e6uo];
  [_B_b_symbol_h5e6uo]() {
    return this.#b;
  }
}

delete B.prototype._B_b_temp_nbh34;

const _C_c_symbol_75n928 = Symbol();

class C extends B {
  _C_c_temp_arensg() {}
  static [_C_c_symbol_75n928] = metadata(30)(C.prototype._C_c_temp_arensg, {
    kind: "method",
    name: "#c",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_c_symbol_75n928]
    },
    ...__PrepareMetadata(C.prototype, "private", "#c")
  }) ?? C.prototype._C_c_temp_arensg;
  #c = C[_C_c_symbol_75n928];
  [_C_c_symbol_75n928]() {
    return this.#c;
  }
}

delete C.prototype._C_c_temp_arensg;

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