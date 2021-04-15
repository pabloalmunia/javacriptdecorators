function decorator(value, context) {
  if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter" || context.kind === "init-method" || context.kind === "init-getter" || context.kind === "init-setter") && context.isStatic) {
    return {
      get(...args) {
        console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
        const ret = value(...args);
        console.log(`ending ${context.name}`);
        return ret;
      },
      initialize(v) {
        console.log("initialize class");
      }
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

function __applyDecorator(result, origin, collection) {
  if (typeof result === "undefined") {
    return origin;
  }
  if (typeof result === "function") {
    return result;
  }
  if (typeof result === "object") {
    if (typeof result.initialize === "function") {
      collection.push(result.initialize);
    }
    return result.method || result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _static_initializers_li9e74ufph8 = [];

const _symbol_94tqrvabne8 = Symbol();

class C {
  static #other = 0;
  static _temp_iorthpptp28() {
    return C.#other;
  }
  static [_symbol_94tqrvabne8] = __applyDecorator(decorator(C._temp_iorthpptp28, {
    kind: "init-getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_94tqrvabne8]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }), C._temp_iorthpptp28, _static_initializers_li9e74ufph8);
  static get #P() {
    return C[_symbol_94tqrvabne8].bind(this)();
  }
  static [_symbol_94tqrvabne8]() {
    return C[_symbol_94tqrvabne8].bind(this);
  }
  static check() {
    return C.#P;
  }
}

delete C._temp_iorthpptp28;

_static_initializers_li9e74ufph8.forEach(initialize => initialize.call(C, C));

console.assert(C.check() === 0);

console.assert(C.test === 10);