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

const _C_p_get_symbol_5ob938 = Symbol();

const _C_p_set_symbol_od5tig = Symbol();

let _C_p_initializer_7813cg;

const _C_member_initializers_djdr1g = [];

let _C_p_initializer_nc0o7g;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_djdr1g.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_nc0o7g.call(this, _C_p_initializer_7813cg.call(this, 1));
  [_C_p_get_symbol_5ob938]() {
    return this.#p;
  }
  [_C_p_set_symbol_od5tig](v) {
    this.#p = v;
  }
}

_C_p_initializer_nc0o7g = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_5ob938],
    set: C.prototype[_C_p_set_symbol_od5tig]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_djdr1g.push(initializer)
}) ?? (v => v);

_C_p_initializer_7813cg = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_5ob938],
    set: C.prototype[_C_p_set_symbol_od5tig]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_djdr1g.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_2fmt4o = Symbol();

const _D_p_set_symbol_u20c68 = Symbol();

let _D_p_initializer_2nedgo;

const _D_member_initializers_a7camo = [];

let _D_p_initializer_m42s4o;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_a7camo.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_m42s4o.call(this, _D_p_initializer_2nedgo.call(this, 2));
  [_D_p_get_symbol_2fmt4o]() {
    return this.#p;
  }
  [_D_p_set_symbol_u20c68](v) {
    this.#p = v;
  }
}

_D_p_initializer_m42s4o = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_2fmt4o],
    set: D.prototype[_D_p_set_symbol_u20c68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_a7camo.push(initializer)
}) ?? (v => v);

_D_p_initializer_2nedgo = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_2fmt4o],
    set: D.prototype[_D_p_set_symbol_u20c68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_a7camo.push(initializer)
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