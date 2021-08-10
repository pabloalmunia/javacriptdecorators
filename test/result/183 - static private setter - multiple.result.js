function decorator1(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 2);
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 3);
    };
  }
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

const _C_p_symbol_vnifv = Symbol();

class __C_e61s18 {
  static #q = 0;
  static _C_p_temp_la0frg(v) {
    this.#q = v;
  }
  static [_C_p_symbol_vnifv] = decorator1(__C_e61s18._C_p_temp_la0frg, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_e61s18[_C_p_symbol_vnifv]
    },
    ...__PrepareMetadata(__C_e61s18, "private", "#p")
  }) ?? __C_e61s18._C_p_temp_la0frg;
  static [_C_p_symbol_vnifv] = decorator2(__C_e61s18[_C_p_symbol_vnifv], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_e61s18[_C_p_symbol_vnifv]
    },
    ...__PrepareMetadata(__C_e61s18, "private", "#p")
  }) ?? __C_e61s18[_C_p_symbol_vnifv];
  static set #p(v) {
    return __C_e61s18[_C_p_symbol_vnifv].bind(this)(v);
  }
  static [_C_p_symbol_vnifv]() {
    return __C_e61s18[_C_p_symbol_vnifv].bind(this);
  }
  static get #p() {
    return this.#q;
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

delete __C_e61s18._C_p_temp_la0frg;

let C = __C_e61s18;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.check === 0);

C.check = 1;

console.assert(C.check === 6);