const log = [];

function decorator(value, context) {
  if (context.kind === "method" && context.addInitializer) {
    context.addInitializer(function() {
      log.push(`initializing ${context.name}`);
    });
    return function(...args) {
      log.push(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      log.push(`ending ${context.name}`);
      return ret;
    };
  }
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

const _C_member_initializers_sjjmj = [];

const _C_m_symbol_e53obg = Symbol();

class C {
  constructor() {
    _C_member_initializers_sjjmj.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_n6g5e(v) {
    return v * 2;
  }
  static [_C_m_symbol_e53obg] = decorator(C.prototype._C_m_temp_n6g5e, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_e53obg]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_sjjmj.push(initializer)
  }) ?? C.prototype._C_m_temp_n6g5e;
  #m = C[_C_m_symbol_e53obg];
  [_C_m_symbol_e53obg]() {
    return this.#m;
  }
  check(v) {
    return this.#m(v);
  }
}

delete C.prototype._C_m_temp_n6g5e;

console.assert(new C().check(2) === 4);

console.assert(log[0] === "initializing #m");

console.assert(log[1] === "starting #m with arguments 2");

console.assert(log[2] === "ending #m");