function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function(v) {
    return v * 2;
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
    }
  }
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      createObjectWithPrototype(base, Symbol.metadata);
      createObjectWithPrototype(base[Symbol.metadata], key);
      createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return (__metadataPrivate.get(base[Symbol.metadata][key]) || []).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], []);
        }
        __metadataPrivate.get(base[Symbol.metadata][key]).push(value);
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_p_get_symbol_la12f8 = Symbol();

const _C_p_set_symbol_9ltsm = Symbol();

let _C_p_initializer_7ucupg;

const _C_member_initializers_3bks08 = [];

class C {
  constructor() {
    _C_member_initializers_3bks08.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_7ucupg.call(this, 10);
  [_C_p_get_symbol_la12f8]() {
    return this.#p;
  }
  [_C_p_set_symbol_9ltsm](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_initializer_7ucupg = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_la12f8],
    set: C.prototype[_C_p_set_symbol_9ltsm]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_3bks08.push(initializer)
}) ?? (v => v);

console.assert(new C().test === 10);

console.assert(new C().check === 20);