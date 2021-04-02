function decorator(value, context) {
  return function(v) {
    return value.call(this) * 2;
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

const _symbol_cng184gjc1o = Symbol();

class C {
  static #other = 100;
  static _temp_41d0j7rhvs8() {
    return C.#other;
  }
  static [_symbol_cng184gjc1o] = decorator(C._temp_41d0j7rhvs8, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_cng184gjc1o]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C._temp_41d0j7rhvs8;
  static get #P() {
    return C[_symbol_cng184gjc1o].bind(this)();
  }
  static [_symbol_cng184gjc1o]() {
    return C[_symbol_cng184gjc1o].bind(this);
  }
  static checkGet() {
    return C.#P;
  }
}

delete C._temp_41d0j7rhvs8;

console.assert(C.checkGet() === 200);