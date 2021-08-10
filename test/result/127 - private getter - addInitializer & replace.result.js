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

const _C_member_initializers_bsn5q8 = [];

const _C_p_symbol_vednl8 = Symbol();

class __C_2aangg {
  constructor() {
    _C_member_initializers_bsn5q8.forEach(initialize => initialize.call(this));
  }
  #q = 10;
  _C_p_temp_jndru() {
    return this.#q;
  }
  static [_C_p_symbol_vednl8] = decorator(__C_2aangg.prototype._C_p_temp_jndru, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_2aangg.prototype[_C_p_symbol_vednl8]
    },
    ...__PrepareMetadata(__C_2aangg.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_bsn5q8.push(initializer)
  }) ?? __C_2aangg.prototype._C_p_temp_jndru;
  get #p() {
    return __C_2aangg[_C_p_symbol_vednl8].bind(this)();
  }
  [_C_p_symbol_vednl8]() {
    return __C_2aangg[_C_p_symbol_vednl8].bind(this);
  }
  get check() {
    return this.#p;
  }
}

delete __C_2aangg.prototype._C_p_temp_jndru;

let C = __C_2aangg;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);

console.assert(new C().check === 20);