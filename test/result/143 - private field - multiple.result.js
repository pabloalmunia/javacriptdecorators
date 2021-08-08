function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
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

const _C_p_get_symbol_hprqkg = Symbol();

const _C_p_set_symbol_8sntgo = Symbol();

let _C_p_initializer_42l4t8;

let _C_p_initializer_qiqaag;

class C {
  #p = _C_p_initializer_qiqaag.call(this, _C_p_initializer_42l4t8.call(this, 1));
  [_C_p_get_symbol_hprqkg]() {
    return this.#p;
  }
  [_C_p_set_symbol_8sntgo](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_initializer_qiqaag = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hprqkg],
    set: C.prototype[_C_p_set_symbol_8sntgo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p")
}) ?? (v => v);

_C_p_initializer_42l4t8 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hprqkg],
    set: C.prototype[_C_p_set_symbol_8sntgo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p")
}) ?? (v => v);

const c = new C();

console.assert(c.check === 6);