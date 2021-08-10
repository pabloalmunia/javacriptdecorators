function decorator(value, context) {
  return function() {
    return "b";
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

const _C_p_symbol_93tcmg = Symbol();

class __C_6c5rkg {
  _C_p_temp_r2hsbo() {
    return "a";
  }
  static [_C_p_symbol_93tcmg] = decorator(__C_6c5rkg.prototype._C_p_temp_r2hsbo, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_6c5rkg.prototype[_C_p_symbol_93tcmg]
    },
    ...__PrepareMetadata(__C_6c5rkg.prototype, "private", "#p")
  }) ?? __C_6c5rkg.prototype._C_p_temp_r2hsbo;
  get #p() {
    return __C_6c5rkg[_C_p_symbol_93tcmg].bind(this)();
  }
  [_C_p_symbol_93tcmg]() {
    return __C_6c5rkg[_C_p_symbol_93tcmg].bind(this);
  }
  get check() {
    return this.#p;
  }
}

delete __C_6c5rkg.prototype._C_p_temp_r2hsbo;

let C = __C_6c5rkg;

Object.defineProperty(C, "name", {
  value: "C"
});

const a = new C();

console.assert(a.check === "b");