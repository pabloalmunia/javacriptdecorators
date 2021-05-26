function decorator(value, context) {
  if (context.kind === "method") {
    context.addInitializer(function() {
      this.test = 10;
    });
    return function(v) {
      return value.call(this, v * 2);
    };
  }
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

const _C_member_initializers_2rgbv = [];

const _C_m_symbol_ucifmg = Symbol();

class C {
  constructor() {
    _C_member_initializers_2rgbv.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_i1npf8(v) {
    return v * 2;
  }
  static [_C_m_symbol_ucifmg] = decorator(C.prototype._C_m_temp_i1npf8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_ucifmg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m"),
    addInitializer: initializer => _C_member_initializers_2rgbv.push(initializer)
  }) ?? C.prototype._C_m_temp_i1npf8;
  #m = C[_C_m_symbol_ucifmg];
  [_C_m_symbol_ucifmg]() {
    return this.#m;
  }
  check(v) {
    return this.#m(v);
  }
}

delete C.prototype._C_m_temp_i1npf8;

console.assert(new C().check(2) === 8);

console.assert(new C().test === 10);