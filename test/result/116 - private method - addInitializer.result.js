function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_member_initializers_be8tn = [];

const _C_m_symbol_bju2do = Symbol();

class __C_inum3g {
  constructor() {
    _C_member_initializers_be8tn.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_ovkiq8() {}
  static [_C_m_symbol_bju2do] = decorator(__C_inum3g.prototype._C_m_temp_ovkiq8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_inum3g.prototype[_C_m_symbol_bju2do]
    },
    ...__PrepareMetadata(__C_inum3g.prototype, "private", "#m"),
    addInitializer: initializer => _C_member_initializers_be8tn.push(initializer)
  }) ?? __C_inum3g.prototype._C_m_temp_ovkiq8;
  #m = __C_inum3g[_C_m_symbol_bju2do];
  [_C_m_symbol_bju2do]() {
    return this.#m;
  }
}

delete __C_inum3g.prototype._C_m_temp_ovkiq8;

let C = __C_inum3g;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);