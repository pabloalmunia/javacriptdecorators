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

const _C_member_initializers_dan5bo = [];

const _C_p_symbol_6u2pa8 = Symbol();

class __C_d75pi {
  constructor() {
    _C_member_initializers_dan5bo.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_hq929() {}
  static [_C_p_symbol_6u2pa8] = decorator(__C_d75pi.prototype._C_p_temp_hq929, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_d75pi.prototype[_C_p_symbol_6u2pa8]
    },
    ...__PrepareMetadata(__C_d75pi.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_dan5bo.push(initializer)
  }) ?? __C_d75pi.prototype._C_p_temp_hq929;
  get #p() {
    return __C_d75pi[_C_p_symbol_6u2pa8].bind(this)();
  }
  [_C_p_symbol_6u2pa8]() {
    return __C_d75pi[_C_p_symbol_6u2pa8].bind(this);
  }
}

delete __C_d75pi.prototype._C_p_temp_hq929;

let C = __C_d75pi;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);