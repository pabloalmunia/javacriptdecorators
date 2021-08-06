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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

const _C_p_get_symbol_ndrv78 = Symbol();

const _C_p_set_symbol_9lp59o = Symbol();

let _C_p_initializer_qukn6g;

const _C_member_initializers_t466ag = [];

let _C_p_initializer_bqv6ig;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_t466ag.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_bqv6ig.call(this, _C_p_initializer_qukn6g.call(this, 1));
  [_C_p_get_symbol_ndrv78]() {
    return this.#p;
  }
  [_C_p_set_symbol_9lp59o](v) {
    this.#p = v;
  }
}

_C_p_initializer_bqv6ig = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_ndrv78],
    set: C.prototype[_C_p_set_symbol_9lp59o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_t466ag.push(initializer)
}) ?? (v => v);

_C_p_initializer_qukn6g = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_ndrv78],
    set: C.prototype[_C_p_set_symbol_9lp59o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_t466ag.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_8rcl5g = Symbol();

const _D_p_set_symbol_5e1v4 = Symbol();

let _D_p_initializer_2mc07o;

const _D_member_initializers_vq2lvg = [];

let _D_p_initializer_9e6nko;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_vq2lvg.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_9e6nko.call(this, _D_p_initializer_2mc07o.call(this, 2));
  [_D_p_get_symbol_8rcl5g]() {
    return this.#p;
  }
  [_D_p_set_symbol_5e1v4](v) {
    this.#p = v;
  }
}

_D_p_initializer_9e6nko = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_8rcl5g],
    set: D.prototype[_D_p_set_symbol_5e1v4]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_vq2lvg.push(initializer)
}) ?? (v => v);

_D_p_initializer_2mc07o = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_8rcl5g],
    set: D.prototype[_D_p_set_symbol_5e1v4]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_vq2lvg.push(initializer)
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