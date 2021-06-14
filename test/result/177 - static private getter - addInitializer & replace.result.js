function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function() {
    return value.call(this) * 2;
  };
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

const _C_static_initializers_no1tso = [];

const _C_p_symbol_4mgfuo = Symbol();

class C {
  static #q = 10;
  static _C_p_temp_49l65o() {
    return this.#q;
  }
  static [_C_p_symbol_4mgfuo] = decorator(C._C_p_temp_49l65o, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_4mgfuo]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_no1tso.push(initializer)
  }) ?? C._C_p_temp_49l65o;
  static get #p() {
    return C[_C_p_symbol_4mgfuo].bind(this)();
  }
  static [_C_p_symbol_4mgfuo]() {
    return C[_C_p_symbol_4mgfuo].bind(this);
  }
  static get check() {
    return this.#p;
  }
}

delete C._C_p_temp_49l65o;

_C_static_initializers_no1tso.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);