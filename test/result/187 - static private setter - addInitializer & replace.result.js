function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function(v) {
    value.call(this, v * 2);
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

const _C_static_initializers_8eftcg = [];

const _C_p_symbol_4gkk7 = Symbol();

class C {
  static #q = 10;
  static get #p() {
    return this.#q;
  }
  static _C_p_temp_900t6g(v) {
    this.#q = v;
  }
  static [_C_p_symbol_4gkk7] = decorator(C._C_p_temp_900t6g, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_p_symbol_4gkk7]
    },
    ...__PrepareMetadata(C, "private", undefined),
    addInitializer: initializer => _C_static_initializers_8eftcg.push(initializer)
  }) ?? C._C_p_temp_900t6g;
  static set #p(v) {
    return C[_C_p_symbol_4gkk7].bind(this)(v);
  }
  static [_C_p_symbol_4gkk7]() {
    return C[_C_p_symbol_4gkk7].bind(this);
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

delete C._C_p_temp_900t6g;

_C_static_initializers_8eftcg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

C.check = 20;

console.assert(C.check === 40);