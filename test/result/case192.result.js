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

const _A_a_symbol_rldilo = Symbol();

class A {
  _A_a_temp_dc1qg() {}
  static [_A_a_symbol_rldilo] = metadata(10)(A.prototype._A_a_temp_dc1qg, {
    kind: "method",
    name: "#a",
    isStatic: false,
    isPrivate: true,
    access: {
      get: A.prototype[_A_a_symbol_rldilo]
    },
    ...__PrepareMetadata(A.prototype, "private", undefined)
  }) ?? A.prototype._A_a_temp_dc1qg;
  #a = A[_A_a_symbol_rldilo];
  [_A_a_symbol_rldilo]() {
    return this.#a;
  }
}

delete A.prototype._A_a_temp_dc1qg;

console.assert(A.prototype[Symbol.metadata][KEY].private[0] === 10);

class B extends A {
  b() {}
}

console.assert(B.prototype[Symbol.metadata][KEY].private[0] === 10);

const _C_c_symbol_sskprg = Symbol();

class C extends B {
  _C_c_temp_dbfb3g() {}
  static [_C_c_symbol_sskprg] = metadata(30)(C.prototype._C_c_temp_dbfb3g, {
    kind: "method",
    name: "#c",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_c_symbol_sskprg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C.prototype._C_c_temp_dbfb3g;
  #c = C[_C_c_symbol_sskprg];
  [_C_c_symbol_sskprg]() {
    return this.#c;
  }
}

delete C.prototype._C_c_temp_dbfb3g;

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);

console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 10);

const _D_d_symbol_db1pho = Symbol();

class D extends C {
  _D_d_temp_v0c83() {}
  static [_D_d_symbol_db1pho] = metadata(40)(D.prototype._D_d_temp_v0c83, {
    kind: "method",
    name: "#d",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_d_symbol_db1pho]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined)
  }) ?? D.prototype._D_d_temp_v0c83;
  #d = D[_D_d_symbol_db1pho];
  [_D_d_symbol_db1pho]() {
    return this.#d;
  }
}

delete D.prototype._D_d_temp_v0c83;

console.assert(D.prototype[Symbol.metadata][KEY].private[0] === 40);

console.assert(D.prototype[Symbol.metadata][KEY].private[1] === 30);

console.assert(D.prototype[Symbol.metadata][KEY].private[2] === 10);