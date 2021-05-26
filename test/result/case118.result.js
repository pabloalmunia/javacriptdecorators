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

const _C_member_initializers_69hmug = [];

const _C_p_symbol_gvu4rg = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_69hmug.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_hqj9cg(v) {}
  static [_C_p_symbol_gvu4rg] = addProperty("a", 1)(C.prototype._C_p_temp_hqj9cg, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_gvu4rg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_69hmug.push(initializer)
  }) ?? C.prototype._C_p_temp_hqj9cg;
  static [_C_p_symbol_gvu4rg] = addProperty("b", 2)(C[_C_p_symbol_gvu4rg], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_gvu4rg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_69hmug.push(initializer)
  }) ?? C[_C_p_symbol_gvu4rg];
  set #p(v) {
    return C[_C_p_symbol_gvu4rg].bind(this)(v);
  }
  [_C_p_symbol_gvu4rg]() {
    return C[_C_p_symbol_gvu4rg].bind(this);
  }
}

delete C.prototype._C_p_temp_hqj9cg;

const _D_member_initializers_7qqtj8 = [];

const _D_p_symbol_mbk62 = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_7qqtj8.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_d3khs8(v) {}
  static [_D_p_symbol_mbk62] = addProperty("c", 3)(D.prototype._D_p_temp_d3khs8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_mbk62]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p"),
    addInitializer: initializer => _D_member_initializers_7qqtj8.push(initializer)
  }) ?? D.prototype._D_p_temp_d3khs8;
  static [_D_p_symbol_mbk62] = addProperty("d", 4)(D[_D_p_symbol_mbk62], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_mbk62]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p"),
    addInitializer: initializer => _D_member_initializers_7qqtj8.push(initializer)
  }) ?? D[_D_p_symbol_mbk62];
  set #p(v) {
    return D[_D_p_symbol_mbk62].bind(this)(v);
  }
  [_D_p_symbol_mbk62]() {
    return D[_D_p_symbol_mbk62].bind(this);
  }
}

delete D.prototype._D_p_temp_d3khs8;

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