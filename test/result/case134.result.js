function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
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

const _symbol_0d82m9rppog = Symbol();

class C {
  static _temp_p922amji558() {}
  static [_symbol_0d82m9rppog] = decorator1(C._temp_p922amji558, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_0d82m9rppog]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_p922amji558;
  static [_symbol_0d82m9rppog] = decorator2(C[_symbol_0d82m9rppog], {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_0d82m9rppog]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C[_symbol_0d82m9rppog];
  static #M = C[_symbol_0d82m9rppog];
  static [_symbol_0d82m9rppog]() {
    return this.#M;
  }
}

delete C._temp_p922amji558;

console.log(C[Symbol.metadata]);