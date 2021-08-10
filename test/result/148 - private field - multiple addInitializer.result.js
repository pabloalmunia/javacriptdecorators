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

const _C_p_get_symbol_bnies8 = Symbol();

const _C_p_set_symbol_r5lf8o = Symbol();

let _C_p_initializer_gugat8;

const _C_member_initializers_j9pp78 = [];

let _C_p_initializer_hlg87;

class __C_39b3qo {
  constructor() {
    this.z = 100;
    _C_member_initializers_j9pp78.forEach(initialize => initialize.call(this));
  }
  #p = _C_p_initializer_hlg87.call(this, _C_p_initializer_gugat8.call(this, 1));
  [_C_p_get_symbol_bnies8]() {
    return this.#p;
  }
  [_C_p_set_symbol_r5lf8o](v) {
    this.#p = v;
  }
}

_C_p_initializer_hlg87 = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_39b3qo.prototype[_C_p_get_symbol_bnies8],
    set: __C_39b3qo.prototype[_C_p_set_symbol_r5lf8o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_39b3qo.prototype, "private", "p"),
  addInitializer: initializer => _C_member_initializers_j9pp78.push(initializer)
}) ?? (v => v);

_C_p_initializer_gugat8 = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_39b3qo.prototype[_C_p_get_symbol_bnies8],
    set: __C_39b3qo.prototype[_C_p_set_symbol_r5lf8o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_39b3qo.prototype, "private", "p"),
  addInitializer: initializer => _C_member_initializers_j9pp78.push(initializer)
}) ?? (v => v);

let C = __C_39b3qo;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_p_get_symbol_mk1f8 = Symbol();

const _D_p_set_symbol_n8racg = Symbol();

let _D_p_initializer_r6tb1;

const _D_member_initializers_qtluoo = [];

let _D_p_initializer_44gvig;

class __D_ghum1g extends C {
  constructor() {
    super();
    _D_member_initializers_qtluoo.forEach(initialize => initialize.call(this));
  }
  #p = _D_p_initializer_44gvig.call(this, _D_p_initializer_r6tb1.call(this, 2));
  [_D_p_get_symbol_mk1f8]() {
    return this.#p;
  }
  [_D_p_set_symbol_n8racg](v) {
    this.#p = v;
  }
}

_D_p_initializer_44gvig = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __D_ghum1g.prototype[_D_p_get_symbol_mk1f8],
    set: __D_ghum1g.prototype[_D_p_set_symbol_n8racg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__D_ghum1g.prototype, "private", "p"),
  addInitializer: initializer => _D_member_initializers_qtluoo.push(initializer)
}) ?? (v => v);

_D_p_initializer_r6tb1 = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __D_ghum1g.prototype[_D_p_get_symbol_mk1f8],
    set: __D_ghum1g.prototype[_D_p_set_symbol_n8racg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__D_ghum1g.prototype, "private", "p"),
  addInitializer: initializer => _D_member_initializers_qtluoo.push(initializer)
}) ?? (v => v);

let D = __D_ghum1g;

Object.defineProperty(D, "name", {
  value: "D"
});

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