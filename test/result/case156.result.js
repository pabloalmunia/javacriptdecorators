function decorator(value, context) {
  if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter" || context.kind === "init-method" || context.kind === "init-getter" || context.kind === "init-setter") && context.isStatic) {
    return {
      set(...args) {
        console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
        const ret = value(...args);
        console.log(`ending ${context.name}`);
        return ret;
      },
      initialize(v) {
        console.log("initialize class");
        this.test = 10;
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

const _static_initializers_ij3gkrte5v = [];

const _symbol_euf2692qo08 = Symbol();

class C {
  static #other = 0;
  static get #P() {
    return C.#other;
  }
  static _temp_1k6tbn5939(v) {
    return C.#other = v;
  }
  static [_symbol_euf2692qo08] = __applyDecorator(decorator(C._temp_1k6tbn5939, {
    kind: "init-setter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_euf2692qo08]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }), C._temp_1k6tbn5939, _static_initializers_ij3gkrte5v);
  static set #P(v) {
    return C[_symbol_euf2692qo08].bind(this)(v);
  }
  static [_symbol_euf2692qo08]() {
    return C[_symbol_euf2692qo08].bind(this);
  }
  static get check() {
    return C.#P;
  }
  static set check(v) {
    return C.#P = v;
  }
}

delete C._temp_1k6tbn5939;

_static_initializers_ij3gkrte5v.forEach(initialize => initialize.call(C, C));

console.assert(C.check === 0);

C.check = 20;

console.assert(C.check === 20);

console.assert(C.test === 10);