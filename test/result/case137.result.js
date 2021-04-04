function decorator(value, context) {
  if (context.kind === "init-method") {
    return {
      method(...args) {
        console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
        const ret = value.call(this, ...args);
        console.log(`ending ${context.name}`);
        return ret;
      },
      initialize() {
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

const _class_initializers_6tuv8u764gg = [];

const _static_initializers_uk6os1j1jf = [];

const _symbol_65lj02icq5 = Symbol();

class C {
  static _temp_3mjh7cs3js() {
    return true;
  }
  static [_symbol_65lj02icq5] = __applyDecorator(decorator(C._temp_3mjh7cs3js, {
    kind: "init-method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_65lj02icq5]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }), C._temp_3mjh7cs3js, _static_initializers_uk6os1j1jf);
  static #M = C[_symbol_65lj02icq5];
  static [_symbol_65lj02icq5]() {
    return this.#M;
  }
  static check() {
    return this.#M;
  }
}

delete C._temp_3mjh7cs3js;

C = __applyDecorator(decorator(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}), C, _class_initializers_6tuv8u764gg);

_class_initializers_6tuv8u764gg.forEach(initialize => initialize.call(C, C));

_static_initializers_uk6os1j1jf.forEach(initialize => initialize.call(C, C));

console.assert(C.check());

console.assert(C.test === 10);