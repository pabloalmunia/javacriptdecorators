function decorator(value, context) {
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

const _C_p_symbol_6s6ldo = Symbol();

class __C_i4k118 {
  #q = 0;
  _C_p_temp_o2080g(v) {
    this.#q = v;
  }
  static [_C_p_symbol_6s6ldo] = decorator(__C_i4k118.prototype._C_p_temp_o2080g, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_i4k118.prototype[_C_p_symbol_6s6ldo]
    },
    ...__PrepareMetadata(__C_i4k118.prototype, "private", "#p")
  }) ?? __C_i4k118.prototype._C_p_temp_o2080g;
  set #p(v) {
    return __C_i4k118[_C_p_symbol_6s6ldo].bind(this)(v);
  }
  [_C_p_symbol_6s6ldo]() {
    return __C_i4k118[_C_p_symbol_6s6ldo].bind(this);
  }
  get #p() {
    return this.#q;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

delete __C_i4k118.prototype._C_p_temp_o2080g;

let C = __C_i4k118;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

c.check = 10;

console.assert(c.check === 20);