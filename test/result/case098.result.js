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
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

const _C_member_initializers_9ds2rg = [];

const _C_m_symbol_ppqseo = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_9ds2rg.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_qd35jo() {}
  static [_C_m_symbol_ppqseo] = addProperty("a", 1)(C.prototype._C_m_temp_qd35jo, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_ppqseo]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m"),
    addInitializer: initializer => _C_member_initializers_9ds2rg.push(initializer)
  }) ?? C.prototype._C_m_temp_qd35jo;
  static [_C_m_symbol_ppqseo] = addProperty("b", 2)(C[_C_m_symbol_ppqseo], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_ppqseo]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m"),
    addInitializer: initializer => _C_member_initializers_9ds2rg.push(initializer)
  }) ?? C[_C_m_symbol_ppqseo];
  #m = C[_C_m_symbol_ppqseo];
  [_C_m_symbol_ppqseo]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_qd35jo;

const _D_member_initializers_r5s1fg = [];

const _D_m_symbol_4caeg8 = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_r5s1fg.forEach(initialize => initialize.call(this));
  }
  _D_m_temp_l1o5k() {}
  static [_D_m_symbol_4caeg8] = addProperty("c", 3)(D.prototype._D_m_temp_l1o5k, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_4caeg8]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#m"),
    addInitializer: initializer => _D_member_initializers_r5s1fg.push(initializer)
  }) ?? D.prototype._D_m_temp_l1o5k;
  static [_D_m_symbol_4caeg8] = addProperty("d", 4)(D[_D_m_symbol_4caeg8], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_m_symbol_4caeg8]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#m"),
    addInitializer: initializer => _D_member_initializers_r5s1fg.push(initializer)
  }) ?? D[_D_m_symbol_4caeg8];
  #m = D[_D_m_symbol_4caeg8];
  [_D_m_symbol_4caeg8]() {
    return this.#m;
  }
}

delete D.prototype._D_m_temp_l1o5k;

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