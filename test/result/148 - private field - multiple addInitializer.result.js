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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_l2melo = Symbol();

const _C_p_set_symbol_0curqo = Symbol();

let _C_p_initializer_un887g;

const _C_member_initializers_j7amj = [];

let _C_p_initializer_vs36jg;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_j7amj.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_vs36jg.call(this, _C_p_initializer_un887g.call(this, 1));
  [_C_p_get_symbol_l2melo]() {
    return this.#p;
  }
  [_C_p_set_symbol_0curqo](v) {
    this.#p = v;
  }
}

_C_p_initializer_vs36jg = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_l2melo],
    set: C.prototype[_C_p_set_symbol_0curqo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_j7amj.push(initializer)
}) ?? (v => v);

_C_p_initializer_un887g = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_l2melo],
    set: C.prototype[_C_p_set_symbol_0curqo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_j7amj.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_j5a1b = Symbol();

const _D_p_set_symbol_6bn5i8 = Symbol();

let _D_p_initializer_iv29u;

const _D_member_initializers_221128 = [];

let _D_p_initializer_santg8;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_221128.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_santg8.call(this, _D_p_initializer_iv29u.call(this, 2));
  [_D_p_get_symbol_j5a1b]() {
    return this.#p;
  }
  [_D_p_set_symbol_6bn5i8](v) {
    this.#p = v;
  }
}

_D_p_initializer_santg8 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_j5a1b],
    set: D.prototype[_D_p_set_symbol_6bn5i8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_221128.push(initializer)
}) ?? (v => v);

_D_p_initializer_iv29u = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_j5a1b],
    set: D.prototype[_D_p_set_symbol_6bn5i8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_221128.push(initializer)
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