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

const _C_p_get_symbol_ce40u = Symbol();

const _C_p_set_symbol_qgi18g = Symbol();

let _C_p_initializer_da81v;

const _C_member_initializers_imh4q8 = [];

class __C_au0opo {
  constructor() {
    _C_member_initializers_imh4q8.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_da81v.call(this, 1);
  [_C_p_get_symbol_ce40u]() {
    return this.#p;
  }
  [_C_p_set_symbol_qgi18g](v) {
    this.#p = v;
  }
}

_C_p_initializer_da81v = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_au0opo.prototype[_C_p_get_symbol_ce40u],
    set: __C_au0opo.prototype[_C_p_set_symbol_qgi18g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_au0opo.prototype, "private", "p"),
  addInitializer: initializer => _C_member_initializers_imh4q8.push(initializer)
}) ?? (v => v);

let C = __C_au0opo;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);