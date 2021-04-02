function decorator(value, context) {
  if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.isStatic) {
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

const _symbol_33vq6d0rl9 = Symbol();

class C {
  static #other = 0;
  static _temp_7m8aj596hc8() {
    return C.#other;
  }
  static [_symbol_33vq6d0rl9] = decorator(C._temp_7m8aj596hc8, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_33vq6d0rl9]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C._temp_7m8aj596hc8;
  static get #P() {
    return C[_symbol_33vq6d0rl9].bind(this)();
  }
  static [_symbol_33vq6d0rl9]() {
    return C[_symbol_33vq6d0rl9].bind(this);
  }
  static check() {
    return C.#P;
  }
}

delete C._temp_7m8aj596hc8;

console.assert(C.check() === 0);