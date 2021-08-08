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

const _C_member_initializers_7eelno = [];

const _C_p_symbol_nlp4do = Symbol();

class C {
  constructor() {
    _C_member_initializers_7eelno.forEach(initialize => initialize.call(this));
  }
  #q = 10;
  get #p() {
    return this.#q;
  }
  _C_p_temp_jkt5o(v) {
    this.#q = v;
  }
  static [_C_p_symbol_nlp4do] = decorator(C.prototype._C_p_temp_jkt5o, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_nlp4do]
    },
    ...__PrepareMetadata(C.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_7eelno.push(initializer)
  }) ?? C.prototype._C_p_temp_jkt5o;
  set #p(v) {
    return C[_C_p_symbol_nlp4do].bind(this)(v);
  }
  [_C_p_symbol_nlp4do]() {
    return C[_C_p_symbol_nlp4do].bind(this);
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

delete C.prototype._C_p_temp_jkt5o;

console.assert(new C().test === 10);

const c = new C();

c.check = 20;

console.assert(c.check === 40);