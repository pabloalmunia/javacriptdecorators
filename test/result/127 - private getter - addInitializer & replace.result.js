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

const _C_member_initializers_joffbo = [];

const _C_p_symbol_ed5sso = Symbol();

class C {
  constructor() {
    _C_member_initializers_joffbo.forEach(initialize => initialize.call(this));
  }
  #q = 10;
  _C_p_temp_656i2g() {
    return this.#q;
  }
  static [_C_p_symbol_ed5sso] = decorator(C.prototype._C_p_temp_656i2g, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_ed5sso]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_joffbo.push(initializer)
  }) ?? C.prototype._C_p_temp_656i2g;
  get #p() {
    return C[_C_p_symbol_ed5sso].bind(this)();
  }
  [_C_p_symbol_ed5sso]() {
    return C[_C_p_symbol_ed5sso].bind(this);
  }
  get check() {
    return this.#p;
  }
}

delete C.prototype._C_p_temp_656i2g;

console.assert(new C().test === 10);

console.assert(new C().check === 20);