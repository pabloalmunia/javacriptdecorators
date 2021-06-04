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

const _C_p_get_symbol_vcss88 = Symbol();

const _C_p_set_symbol_jqrmb8 = Symbol();

let _C_p_initializer_ct5l3;

const _C_member_initializers_h90fa = [];

let _C_p_initializer_dhestg;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_h90fa.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_dhestg.call(this, _C_p_initializer_ct5l3.call(this, 1));
  [_C_p_get_symbol_vcss88]() {
    return this.#p;
  }
  [_C_p_set_symbol_jqrmb8](v) {
    this.#p = v;
  }
}

_C_p_initializer_dhestg = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vcss88],
    set: C.prototype[_C_p_set_symbol_jqrmb8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_h90fa.push(initializer)
}) ?? (v => v);

_C_p_initializer_ct5l3 = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vcss88],
    set: C.prototype[_C_p_set_symbol_jqrmb8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined),
  addInitializer: initializer => _C_member_initializers_h90fa.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_hmflmg = Symbol();

const _D_p_set_symbol_qqgc7 = Symbol();

let _D_p_initializer_d6jbtg;

const _D_member_initializers_6julog = [];

let _D_p_initializer_gr0na;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_6julog.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_gr0na.call(this, _D_p_initializer_d6jbtg.call(this, 2));
  [_D_p_get_symbol_hmflmg]() {
    return this.#p;
  }
  [_D_p_set_symbol_qqgc7](v) {
    this.#p = v;
  }
}

_D_p_initializer_gr0na = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_hmflmg],
    set: D.prototype[_D_p_set_symbol_qqgc7]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_6julog.push(initializer)
}) ?? (v => v);

_D_p_initializer_d6jbtg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_hmflmg],
    set: D.prototype[_D_p_set_symbol_qqgc7]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", undefined),
  addInitializer: initializer => _D_member_initializers_6julog.push(initializer)
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