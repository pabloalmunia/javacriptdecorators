function decorator(value, context) {
  if (context.kind === "method" && context.isStatic) {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value(...args);
      console.log(`ending ${context.name}`);
      return ret;
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

const _symbol_em3kmrcjedo = Symbol();

class C {
  static _temp_6lke8vvvj1o() {
    return 101;
  }
  static [_symbol_em3kmrcjedo] = decorator(C._temp_6lke8vvvj1o, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_em3kmrcjedo]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_6lke8vvvj1o;
  static #M = C[_symbol_em3kmrcjedo];
  static [_symbol_em3kmrcjedo]() {
    return this.#M;
  }
  static check() {
    return C.#M();
  }
}

delete C._temp_6lke8vvvj1o;

console.assert(C.check() === 101);