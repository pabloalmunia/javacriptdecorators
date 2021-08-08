function decorator(value, context) {
  return function(v) {
    value.call(this, v * 2);
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

const _C_p_symbol_qmoi4g = Symbol();

class C {
  static #q = 0;
  static _C_p_temp_6hg0k(v) {
    this.#q = v;
  }
  static [_C_p_symbol_qmoi4g] = decorator(C._C_p_temp_6hg0k, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_qmoi4g]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C._C_p_temp_6hg0k;
  static set #p(v) {
    return C[_C_p_symbol_qmoi4g].bind(this)(v);
  }
  static [_C_p_symbol_qmoi4g]() {
    return C[_C_p_symbol_qmoi4g].bind(this);
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

delete C._C_p_temp_6hg0k;

C.check = 10;

console.assert(C.check === 20);