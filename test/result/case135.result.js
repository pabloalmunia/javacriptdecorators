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

const _symbol_1a6512q2n78 = Symbol();

class C {
  static _temp_5k18pev7o7g() {}
  static [_symbol_1a6512q2n78] = decorator("test1")(C._temp_5k18pev7o7g, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_1a6512q2n78]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_5k18pev7o7g;
  static [_symbol_1a6512q2n78] = decorator("test2")(C[_symbol_1a6512q2n78], {
    kind: "method",
    name: "#M",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_1a6512q2n78]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C[_symbol_1a6512q2n78];
  static #M = C[_symbol_1a6512q2n78];
  static [_symbol_1a6512q2n78]() {
    return this.#M;
  }
}

delete C._temp_5k18pev7o7g;

console.log(C[Symbol.metadata]);