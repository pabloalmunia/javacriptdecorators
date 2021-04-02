function decorator1(value, context) {
  return function() {
    return value.call(this) * 2;
  };
}

function decorator2(value, context) {
  return function() {
    return value.call(this) * 3;
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

const _symbol_da8vtr8rho8 = Symbol();

class C {
  static _temp_s2iufgq2mko() {
    return 1;
  }
  static [_symbol_da8vtr8rho8] = decorator1(C._temp_s2iufgq2mko, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_da8vtr8rho8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_s2iufgq2mko;
  static [_symbol_da8vtr8rho8] = decorator2(C[_symbol_da8vtr8rho8], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_da8vtr8rho8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_da8vtr8rho8];
  static get #p() {
    return C[_symbol_da8vtr8rho8].bind(this)();
  }
  static [_symbol_da8vtr8rho8]() {
    return C[_symbol_da8vtr8rho8].bind(this);
  }
  static check() {
    return C.#p;
  }
}

delete C._temp_s2iufgq2mko;

console.assert(C.check() === 6);