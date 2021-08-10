function decorator1(value, context) {
  if (context.kind === "getter") {
    return function() {
      return value.call(this) * 2;
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "getter") {
    return function() {
      return value.call(this) * 3;
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

const _C_p_symbol_p7vb9o = Symbol();

class __C_1gpimg {
  _C_p_temp_vgpjf() {
    return 2;
  }
  static [_C_p_symbol_p7vb9o] = decorator1(__C_1gpimg.prototype._C_p_temp_vgpjf, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_1gpimg.prototype[_C_p_symbol_p7vb9o]
    },
    ...__PrepareMetadata(__C_1gpimg.prototype, "private", "#p")
  }) ?? __C_1gpimg.prototype._C_p_temp_vgpjf;
  static [_C_p_symbol_p7vb9o] = decorator2(__C_1gpimg[_C_p_symbol_p7vb9o], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_1gpimg.prototype[_C_p_symbol_p7vb9o]
    },
    ...__PrepareMetadata(__C_1gpimg.prototype, "private", "#p")
  }) ?? __C_1gpimg[_C_p_symbol_p7vb9o];
  get #p() {
    return __C_1gpimg[_C_p_symbol_p7vb9o].bind(this)();
  }
  [_C_p_symbol_p7vb9o]() {
    return __C_1gpimg[_C_p_symbol_p7vb9o].bind(this);
  }
  get check() {
    return this.#p;
  }
}

delete __C_1gpimg.prototype._C_p_temp_vgpjf;

let C = __C_1gpimg;

Object.defineProperty(C, "name", {
  value: "C"
});

const a = new C();

console.assert(a.check === 12);