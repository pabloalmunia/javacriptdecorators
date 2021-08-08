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

const _C_p_get_symbol_q5nmlg = Symbol();

const _C_p_set_symbol_aadi9g = Symbol();

let _C_p_initializer_c8bnog;

const _C_member_initializers_41dg8o = [];

let _C_p_initializer_s842u;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_41dg8o.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_s842u.call(this, _C_p_initializer_c8bnog.call(this, 1));
  [_C_p_get_symbol_q5nmlg]() {
    return this.#p;
  }
  [_C_p_set_symbol_aadi9g](v) {
    this.#p = v;
  }
}

_C_p_initializer_s842u = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_q5nmlg],
    set: C.prototype[_C_p_set_symbol_aadi9g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p"),
  addInitializer: initializer => _C_member_initializers_41dg8o.push(initializer)
}) ?? (v => v);

_C_p_initializer_c8bnog = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_q5nmlg],
    set: C.prototype[_C_p_set_symbol_aadi9g]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p"),
  addInitializer: initializer => _C_member_initializers_41dg8o.push(initializer)
}) ?? (v => v);

const _D_p_get_symbol_kmcsqg = Symbol();

const _D_p_set_symbol_dbsms8 = Symbol();

let _D_p_initializer_ik3vsg;

const _D_member_initializers_2tuvao = [];

let _D_p_initializer_njv6vo;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_2tuvao.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_njv6vo.call(this, _D_p_initializer_ik3vsg.call(this, 2));
  [_D_p_get_symbol_kmcsqg]() {
    return this.#p;
  }
  [_D_p_set_symbol_dbsms8](v) {
    this.#p = v;
  }
}

_D_p_initializer_njv6vo = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_kmcsqg],
    set: D.prototype[_D_p_set_symbol_dbsms8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", "p"),
  addInitializer: initializer => _D_member_initializers_2tuvao.push(initializer)
}) ?? (v => v);

_D_p_initializer_ik3vsg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: D.prototype[_D_p_get_symbol_kmcsqg],
    set: D.prototype[_D_p_set_symbol_dbsms8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(D.prototype, "private", "p"),
  addInitializer: initializer => _D_member_initializers_2tuvao.push(initializer)
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