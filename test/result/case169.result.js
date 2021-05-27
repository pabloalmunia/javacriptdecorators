function deco(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function(v) {
    return v * 2;
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

const _C_p_get_symbol_v17o8 = Symbol();

const _C_p_set_symbol_b6ejto = Symbol();

const _C_static_initializers_ijtaro = [];

class C {
  static #p = 10;
  static [_C_p_get_symbol_v17o8]() {
    return C.#p;
  }
  static [_C_p_set_symbol_b6ejto](v) {
    C.#p = v;
  }
  static get check() {
    return C.#p;
  }
  static set check(v) {
    C.#p = v;
  }
}

const _C_p_initializer_6ha1f = deco(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_v17o8],
    set: C[_C_p_set_symbol_b6ejto]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p"),
  addInitializer: initializer => _C_static_initializers_ijtaro.push(initializer)
}) ?? (v => v);

C[_C_p_set_symbol_b6ejto](_C_p_initializer_6ha1f(C[_C_p_get_symbol_v17o8]()));

_C_static_initializers_ijtaro.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 20);