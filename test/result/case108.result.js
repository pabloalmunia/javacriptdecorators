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

const _C_member_initializers_se9a3 = [];

const _C_p_symbol_je8qao = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_se9a3.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_nrdl9g() {}
  static [_C_p_symbol_je8qao] = addProperty("a", 1)(C.prototype._C_p_temp_nrdl9g, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_je8qao]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_se9a3.push(initializer)
  }) ?? C.prototype._C_p_temp_nrdl9g;
  static [_C_p_symbol_je8qao] = addProperty("b", 2)(C[_C_p_symbol_je8qao], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_je8qao]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_se9a3.push(initializer)
  }) ?? C[_C_p_symbol_je8qao];
  get #p() {
    return C[_C_p_symbol_je8qao].bind(this)();
  }
  [_C_p_symbol_je8qao]() {
    return C[_C_p_symbol_je8qao].bind(this);
  }
}

delete C.prototype._C_p_temp_nrdl9g;

const _D_member_initializers_r6p7og = [];

const _D_p_symbol_0q36ho = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_r6p7og.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_fkd2t8() {}
  static [_D_p_symbol_0q36ho] = addProperty("c", 3)(D.prototype._D_p_temp_fkd2t8, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_0q36ho]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p"),
    addInitializer: initializer => _D_member_initializers_r6p7og.push(initializer)
  }) ?? D.prototype._D_p_temp_fkd2t8;
  static [_D_p_symbol_0q36ho] = addProperty("d", 4)(D[_D_p_symbol_0q36ho], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_0q36ho]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p"),
    addInitializer: initializer => _D_member_initializers_r6p7og.push(initializer)
  }) ?? D[_D_p_symbol_0q36ho];
  get #p() {
    return D[_D_p_symbol_0q36ho].bind(this)();
  }
  [_D_p_symbol_0q36ho]() {
    return D[_D_p_symbol_0q36ho].bind(this);
  }
}

delete D.prototype._D_p_temp_fkd2t8;

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