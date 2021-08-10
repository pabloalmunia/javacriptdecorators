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

const _C_p_symbol_817npo = Symbol();

class __C_7eihf8 {
  #q = 0;
  _C_p_temp_r79ik8(v) {
    this.#q = v;
  }
  static [_C_p_symbol_817npo] = decorator1(__C_7eihf8.prototype._C_p_temp_r79ik8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_7eihf8.prototype[_C_p_symbol_817npo]
    },
    ...__PrepareMetadata(__C_7eihf8.prototype, "private", "#p")
  }) ?? __C_7eihf8.prototype._C_p_temp_r79ik8;
  static [_C_p_symbol_817npo] = decorator2(__C_7eihf8[_C_p_symbol_817npo], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_7eihf8.prototype[_C_p_symbol_817npo]
    },
    ...__PrepareMetadata(__C_7eihf8.prototype, "private", "#p")
  }) ?? __C_7eihf8[_C_p_symbol_817npo];
  set #p(v) {
    return __C_7eihf8[_C_p_symbol_817npo].bind(this)(v);
  }
  [_C_p_symbol_817npo]() {
    return __C_7eihf8[_C_p_symbol_817npo].bind(this);
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

delete __C_7eihf8.prototype._C_p_temp_r79ik8;

let C = __C_7eihf8;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(c.check === 0);

c.check = 1;

console.assert(c.check === 6);