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

const _C_static_initializers_i77dr = [];

const _C_p_symbol_58vju = Symbol();

class __C_7p3fh8 {
  static #q = 10;
  static get #p() {
    return this.#q;
  }
  static _C_p_temp_gl8vhg(v) {
    this.#q = v;
  }
  static [_C_p_symbol_58vju] = decorator(__C_7p3fh8._C_p_temp_gl8vhg, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: __C_7p3fh8[_C_p_symbol_58vju]
    },
    ...__PrepareMetadata(__C_7p3fh8, "private", "#p"),
    addInitializer: initializer => _C_static_initializers_i77dr.push(initializer)
  }) ?? __C_7p3fh8._C_p_temp_gl8vhg;
  static set #p(v) {
    return __C_7p3fh8[_C_p_symbol_58vju].bind(this)(v);
  }
  static [_C_p_symbol_58vju]() {
    return __C_7p3fh8[_C_p_symbol_58vju].bind(this);
  }
  static get check() {
    return this.#p;
  }
  static set check(v) {
    this.#p = v;
  }
}

delete __C_7p3fh8._C_p_temp_gl8vhg;

let C = __C_7p3fh8;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_i77dr.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

C.check = 20;

console.assert(C.check === 40);