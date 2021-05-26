function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_member_initializers_q412sg = [];

const _C_m_symbol_q5o6bo = Symbol();

class C {
  constructor() {
    _C_member_initializers_q412sg.forEach(initialize => initialize.call(this));
  }
  _C_m_temp_6hguk8() {}
  static [_C_m_symbol_q5o6bo] = decorator(C.prototype._C_m_temp_6hguk8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_q5o6bo]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m"),
    addInitializer: initializer => _C_member_initializers_q412sg.push(initializer)
  }) ?? C.prototype._C_m_temp_6hguk8;
  static [_C_m_symbol_q5o6bo] = decorator(C[_C_m_symbol_q5o6bo], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_m_symbol_q5o6bo]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m"),
    addInitializer: initializer => _C_member_initializers_q412sg.push(initializer)
  }) ?? C[_C_m_symbol_q5o6bo];
  #m = C[_C_m_symbol_q5o6bo];
  [_C_m_symbol_q5o6bo]() {
    return this.#m;
  }
}

delete C.prototype._C_m_temp_6hguk8;

console.assert(new C().test === 10);