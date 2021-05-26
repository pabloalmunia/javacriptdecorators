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

const _C_static_initializers_c3lv4g = [];

const _C_m_symbol_c9r8do = Symbol();

class C {
  static _C_m_temp_lbere() {}
  static [_C_m_symbol_c9r8do] = decorator(C._C_m_temp_lbere, {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_c9r8do]
    },
    defineMetadata: __DefineMetadata(C, "#m"),
    addInitializer: initializer => _C_static_initializers_c3lv4g.push(initializer)
  }) ?? C._C_m_temp_lbere;
  static [_C_m_symbol_c9r8do] = decorator(C[_C_m_symbol_c9r8do], {
    kind: "method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_m_symbol_c9r8do]
    },
    defineMetadata: __DefineMetadata(C, "#m"),
    addInitializer: initializer => _C_static_initializers_c3lv4g.push(initializer)
  }) ?? C[_C_m_symbol_c9r8do];
  static #m = C[_C_m_symbol_c9r8do];
  static [_C_m_symbol_c9r8do]() {
    return this.#m;
  }
}

delete C._C_m_temp_lbere;

_C_static_initializers_c3lv4g.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);