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

const _C_member_initializers_s15ch = [];

const _C_p_symbol_56tq98 = Symbol();

class __C_fvlkn {
  constructor() {
    this.z = 100;
    _C_member_initializers_s15ch.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_nham6g() {}
  static [_C_p_symbol_56tq98] = addProperty("a", 1)(__C_fvlkn.prototype._C_p_temp_nham6g, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_fvlkn.prototype[_C_p_symbol_56tq98]
    },
    ...__PrepareMetadata(__C_fvlkn.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_s15ch.push(initializer)
  }) ?? __C_fvlkn.prototype._C_p_temp_nham6g;
  static [_C_p_symbol_56tq98] = addProperty("b", 2)(__C_fvlkn[_C_p_symbol_56tq98], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_fvlkn.prototype[_C_p_symbol_56tq98]
    },
    ...__PrepareMetadata(__C_fvlkn.prototype, "private", "#p"),
    addInitializer: initializer => _C_member_initializers_s15ch.push(initializer)
  }) ?? __C_fvlkn[_C_p_symbol_56tq98];
  get #p() {
    return __C_fvlkn[_C_p_symbol_56tq98].bind(this)();
  }
  [_C_p_symbol_56tq98]() {
    return __C_fvlkn[_C_p_symbol_56tq98].bind(this);
  }
}

delete __C_fvlkn.prototype._C_p_temp_nham6g;

let C = __C_fvlkn;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_h0mcsg = [];

const _D_p_symbol_ranst8 = Symbol();

class __D_230ksg extends C {
  constructor() {
    super();
    _D_member_initializers_h0mcsg.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_0ma72() {}
  static [_D_p_symbol_ranst8] = addProperty("c", 3)(__D_230ksg.prototype._D_p_temp_0ma72, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_230ksg.prototype[_D_p_symbol_ranst8]
    },
    ...__PrepareMetadata(__D_230ksg.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_h0mcsg.push(initializer)
  }) ?? __D_230ksg.prototype._D_p_temp_0ma72;
  static [_D_p_symbol_ranst8] = addProperty("d", 4)(__D_230ksg[_D_p_symbol_ranst8], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __D_230ksg.prototype[_D_p_symbol_ranst8]
    },
    ...__PrepareMetadata(__D_230ksg.prototype, "private", "#p"),
    addInitializer: initializer => _D_member_initializers_h0mcsg.push(initializer)
  }) ?? __D_230ksg[_D_p_symbol_ranst8];
  get #p() {
    return __D_230ksg[_D_p_symbol_ranst8].bind(this)();
  }
  [_D_p_symbol_ranst8]() {
    return __D_230ksg[_D_p_symbol_ranst8].bind(this);
  }
}

delete __D_230ksg.prototype._D_p_temp_0ma72;

let D = __D_230ksg;

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