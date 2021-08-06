function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
    };
  }
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

const _C_p_get_symbol_g2o5og = Symbol();

const _C_p_set_symbol_3kb53g = Symbol();

let _C_p_initializer_i9j9gg;

let _C_p_initializer_l25qk;

class C {
  #p = _C_p_initializer_l25qk.call(this, _C_p_initializer_i9j9gg.call(this, 1));
  [_C_p_get_symbol_g2o5og]() {
    return this.#p;
  }
  [_C_p_set_symbol_3kb53g](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_initializer_l25qk = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_g2o5og],
    set: C.prototype[_C_p_set_symbol_3kb53g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_p_initializer_i9j9gg = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_g2o5og],
    set: C.prototype[_C_p_set_symbol_3kb53g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

const c = new C();

console.assert(c.check === 6);