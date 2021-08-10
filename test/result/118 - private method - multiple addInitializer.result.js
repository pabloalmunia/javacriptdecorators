function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
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

const _C_member_initializers_0urq2g = [];

const _C_m_symbol_7du5f = Symbol();

class __C_jb36vo {
  constructor() {
    this.z = 100;
    _C_member_initializers_0urq2g.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_b4ugag() {}
  static [_C_m_symbol_7du5f] = addProperty("a", 1)(__C_jb36vo.prototype._C_m_temp_b4ugag, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_jb36vo.prototype[_C_m_symbol_7du5f]
    },
    ...__PrepareMetadata(__C_jb36vo.prototype, "private", "#m"),
    addInitializer: initializer => _C_member_initializers_0urq2g.push(initializer)
  }) ?? __C_jb36vo.prototype._C_m_temp_b4ugag;
  static [_C_m_symbol_7du5f] = addProperty("b", 2)(__C_jb36vo[_C_m_symbol_7du5f], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_jb36vo.prototype[_C_m_symbol_7du5f]
    },
    ...__PrepareMetadata(__C_jb36vo.prototype, "private", "#m"),
    addInitializer: initializer => _C_member_initializers_0urq2g.push(initializer)
  }) ?? __C_jb36vo[_C_m_symbol_7du5f];
  #m = __C_jb36vo[_C_m_symbol_7du5f];
  [_C_m_symbol_7du5f]() {
    return this.#m;
  }
}

delete __C_jb36vo.prototype._C_m_temp_b4ugag;

let C = __C_jb36vo;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_kagf4g = [];

const _D_m_symbol_k33j6o = Symbol();

class __D_crgqmg extends C {
  constructor() {
    super();
    _D_member_initializers_kagf4g.forEach(initialize => initialize.call(this));
  }
  _D_m_temp_gki3jo() {}
  static [_D_m_symbol_k33j6o] = addProperty("c", 3)(__D_crgqmg.prototype._D_m_temp_gki3jo, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_crgqmg.prototype[_D_m_symbol_k33j6o]
    },
    ...__PrepareMetadata(__D_crgqmg.prototype, "private", "#m"),
    addInitializer: initializer => _D_member_initializers_kagf4g.push(initializer)
  }) ?? __D_crgqmg.prototype._D_m_temp_gki3jo;
  static [_D_m_symbol_k33j6o] = addProperty("d", 4)(__D_crgqmg[_D_m_symbol_k33j6o], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_crgqmg.prototype[_D_m_symbol_k33j6o]
    },
    ...__PrepareMetadata(__D_crgqmg.prototype, "private", "#m"),
    addInitializer: initializer => _D_member_initializers_kagf4g.push(initializer)
  }) ?? __D_crgqmg[_D_m_symbol_k33j6o];
  #m = __D_crgqmg[_D_m_symbol_k33j6o];
  [_D_m_symbol_k33j6o]() {
    return this.#m;
  }
}

delete __D_crgqmg.prototype._D_m_temp_gki3jo;

let D = __D_crgqmg;

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