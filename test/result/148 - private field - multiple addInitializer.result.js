function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "field" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

const _C_p_get_symbol_c3qel8 = Symbol();

const _C_p_set_symbol_v9fbm = Symbol();

let _C_p_initializer_9qcaqg;

const _C_member_initializers_72qmc8 = [];

let _C_p_initializer_rlvgj;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_72qmc8.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_rlvgj.call(this, _C_p_initializer_9qcaqg.call(this, 1));
  [_C_p_get_symbol_c3qel8]() {
    return this.#p;
  }
  [_C_p_set_symbol_v9fbm](v) {
    this.#p = v;
  }
}

_C_p_initializer_rlvgj = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c3qel8],
    set: C.prototype[_C_p_set_symbol_v9fbm]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_72qmc8.push(initializer)
}) ?? (v => v);

_C_p_initializer_9qcaqg = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c3qel8],
    set: C.prototype[_C_p_set_symbol_v9fbm]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_72qmc8.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_ahq24o = Symbol();

const _D_p_set_symbol_oidia8 = Symbol();

let _D_p_initializer_ir6vpg;

const _D_member_initializers_div408 = [];

let _D_p_initializer_tk0s7;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_div408.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_tk0s7.call(this, _D_p_initializer_ir6vpg.call(this, 2));
  [_D_p_get_symbol_ahq24o]() {
    return this.#p;
  }
  [_D_p_set_symbol_oidia8](v) {
    this.#p = v;
  }
}

_D_p_initializer_tk0s7 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_ahq24o],
    set: D.prototype[_D_p_set_symbol_oidia8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_div408.push(initializer)
}) ?? (v => v);

_D_p_initializer_ir6vpg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_ahq24o],
    set: D.prototype[_D_p_set_symbol_oidia8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_div408.push(initializer)
}) ?? (v => v);

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);