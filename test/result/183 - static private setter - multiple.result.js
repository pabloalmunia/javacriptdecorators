function decorator1(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 2);
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 3);
    };
  }
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

const _C_p_symbol_mifcag = Symbol();

class C {
  static #q = 0;
  static _C_p_temp_2t1aio(v) {
    this.#q = v;
  }
  static [_C_p_symbol_mifcag] = decorator1(C._C_p_temp_2t1aio, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_mifcag]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C._C_p_temp_2t1aio;
  static [_C_p_symbol_mifcag] = decorator2(C[_C_p_symbol_mifcag], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_mifcag]
    },
    ...__PrepareMetadata(C, "private", undefined)
  }) ?? C[_C_p_symbol_mifcag];
  static set #p(v) {
    return C[_C_p_symbol_mifcag].bind(this)(v);
  }
  static [_C_p_symbol_mifcag]() {
    return C[_C_p_symbol_mifcag].bind(this);
  }
  static get #p() {
    return this.#q;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

delete C._C_p_temp_2t1aio;

console.assert(C.check === 0);

C.check = 1;

console.assert(C.check === 6);