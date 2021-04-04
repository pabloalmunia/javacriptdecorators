function decorator(value) {
  return function(methodº, context) {
    context.defineMetadata("one", value);
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

const _symbol_4b6omeak7j = Symbol();

class C {
  static _temp_00b1mpm1glg() {}
  static [_symbol_4b6omeak7j] = decorator("test1")(C._temp_00b1mpm1glg, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_4b6omeak7j]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_00b1mpm1glg;
  static [_symbol_4b6omeak7j] = decorator("test2")(C[_symbol_4b6omeak7j], {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_4b6omeak7j]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C[_symbol_4b6omeak7j];
  static #M = C[_symbol_4b6omeak7j];
  static [_symbol_4b6omeak7j]() {
    return this.#M;
  }
}

delete C._temp_00b1mpm1glg;

console.log(C[Symbol.metadata]);