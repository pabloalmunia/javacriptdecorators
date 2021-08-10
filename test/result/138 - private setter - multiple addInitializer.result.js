function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
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

const _C_member_initializers_5hpn5o = [];

const _C_p_symbol_4s13i = Symbol();

class __C_tqagog {
  constructor() {
    this.z = 100;
    _C_member_initializers_5hpn5o.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_l1s4v8(v) {}
  static [_C_p_symbol_4s13i] = addProperty("a", 1)(__C_tqagog.prototype._C_p_temp_l1s4v8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_tqagog.prototype[_C_p_symbol_4s13i]
    },
    ...__PrepareMetadata(__C_tqagog.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_5hpn5o.push(initializer)
  }) ?? __C_tqagog.prototype._C_p_temp_l1s4v8;
  static [_C_p_symbol_4s13i] = addProperty("b", 2)(__C_tqagog[_C_p_symbol_4s13i], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_tqagog.prototype[_C_p_symbol_4s13i]
    },
    ...__PrepareMetadata(__C_tqagog.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_5hpn5o.push(initializer)
  }) ?? __C_tqagog[_C_p_symbol_4s13i];
  set #p(v) {
    return __C_tqagog[_C_p_symbol_4s13i].bind(this)(v);
  }
  [_C_p_symbol_4s13i]() {
    return __C_tqagog[_C_p_symbol_4s13i].bind(this);
  }
}

delete __C_tqagog.prototype._C_p_temp_l1s4v8;

let C = __C_tqagog;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_cl9ji8 = [];

const _D_p_symbol_cm096o = Symbol();

class __D_69s67 extends C {
  constructor() {
    super();
    _D_member_initializers_cl9ji8.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_l71i28(v) {}
  static [_D_p_symbol_cm096o] = addProperty("c", 3)(__D_69s67.prototype._D_p_temp_l71i28, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_69s67.prototype[_D_p_symbol_cm096o]
    },
    ...__PrepareMetadata(__D_69s67.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_cl9ji8.push(initializer)
  }) ?? __D_69s67.prototype._D_p_temp_l71i28;
  static [_D_p_symbol_cm096o] = addProperty("d", 4)(__D_69s67[_D_p_symbol_cm096o], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_69s67.prototype[_D_p_symbol_cm096o]
    },
    ...__PrepareMetadata(__D_69s67.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_cl9ji8.push(initializer)
  }) ?? __D_69s67[_D_p_symbol_cm096o];
  set #p(v) {
    return __D_69s67[_D_p_symbol_cm096o].bind(this)(v);
  }
  [_D_p_symbol_cm096o]() {
    return __D_69s67[_D_p_symbol_cm096o].bind(this);
  }
}

delete __D_69s67.prototype._D_p_temp_l71i28;

let D = __D_69s67;

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