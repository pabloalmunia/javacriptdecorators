const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

const _C_p_symbol_9m8u7 = Symbol();

class C {
  static _C_p_temp_fgq08o() {
    return "a";
  }
  static [_C_p_symbol_9m8u7] = decorator1(C._C_p_temp_fgq08o, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_9m8u7]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C._C_p_temp_fgq08o;
  static [_C_p_symbol_9m8u7] = decorator2(C[_C_p_symbol_9m8u7], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_9m8u7]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C[_C_p_symbol_9m8u7];
  static [_C_p_symbol_9m8u7] = decorator2(C[_C_p_symbol_9m8u7], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_9m8u7]
    },
    ...__PrepareMetadata(C, "private", "#p")
  }) ?? C[_C_p_symbol_9m8u7];
  static get #p() {
    return C[_C_p_symbol_9m8u7].bind(this)();
  }
  static [_C_p_symbol_9m8u7]() {
    return C[_C_p_symbol_9m8u7].bind(this);
  }
  static get check() {
    return this.#p;
  }
}

delete C._C_p_temp_fgq08o;

console.assert(C.check === "a");

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);

console.assert(C[Symbol.metadata][TWO].private.length === 1);