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

const _A_a_symbol_tadbng = Symbol();

class __A_jgo3h {
  _A_a_temp_bf5iu() {}
  static [_A_a_symbol_tadbng] = metadata(10)(__A_jgo3h.prototype._A_a_temp_bf5iu, {
    kind: "method",
    name: "#a",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __A_jgo3h.prototype[_A_a_symbol_tadbng]
    },
    ...__PrepareMetadata(__A_jgo3h.prototype, "private", "#a")
  }) ?? __A_jgo3h.prototype._A_a_temp_bf5iu;
  #a = __A_jgo3h[_A_a_symbol_tadbng];
  [_A_a_symbol_tadbng]() {
    return this.#a;
  }
}

delete __A_jgo3h.prototype._A_a_temp_bf5iu;

let A = __A_jgo3h;

Object.defineProperty(A, "name", {
  value: "A"
});

const _B_b_symbol_5js53 = Symbol();

class __B_ch50po extends A {
  _B_b_temp_fh0b6o() {}
  static [_B_b_symbol_5js53] = metadata(20)(__B_ch50po.prototype._B_b_temp_fh0b6o, {
    kind: "method",
    name: "#b",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __B_ch50po.prototype[_B_b_symbol_5js53]
    },
    ...__PrepareMetadata(__B_ch50po.prototype, "private", "#b")
  }) ?? __B_ch50po.prototype._B_b_temp_fh0b6o;
  #b = __B_ch50po[_B_b_symbol_5js53];
  [_B_b_symbol_5js53]() {
    return this.#b;
  }
}

delete __B_ch50po.prototype._B_b_temp_fh0b6o;

let B = __B_ch50po;

Object.defineProperty(B, "name", {
  value: "B"
});

const _C_c_symbol_8npi = Symbol();

class __C_5peb9o extends B {
  _C_c_temp_p5tiho() {}
  static [_C_c_symbol_8npi] = metadata(30)(__C_5peb9o.prototype._C_c_temp_p5tiho, {
    kind: "method",
    name: "#c",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_5peb9o.prototype[_C_c_symbol_8npi]
    },
    ...__PrepareMetadata(__C_5peb9o.prototype, "private", "#c")
  }) ?? __C_5peb9o.prototype._C_c_temp_p5tiho;
  #c = __C_5peb9o[_C_c_symbol_8npi];
  [_C_c_symbol_8npi]() {
    return this.#c;
  }
}

delete __C_5peb9o.prototype._C_c_temp_p5tiho;

let C = __C_5peb9o;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);

console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 20);

console.assert(C.prototype[Symbol.metadata][KEY].private[2] === 10);

class __Z_ninnn {
  z() {}
}

__Z_ninnn.prototype.z = metadata(40)(__Z_ninnn.prototype.z, {
  kind: "method",
  name: "z",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__Z_ninnn.prototype, "public", "z")
}) ?? __Z_ninnn.prototype.z;

let Z = __Z_ninnn;

Object.defineProperty(Z, "name", {
  value: "Z"
});

Object.setPrototypeOf(C.prototype, Z.prototype);

console.assert(C.prototype[Symbol.metadata][KEY].private[0] === 30);

console.assert(C.prototype[Symbol.metadata][KEY].private[1] === 20);

console.assert(C.prototype[Symbol.metadata][KEY].private[2] === 10);