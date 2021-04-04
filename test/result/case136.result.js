function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    initialize() {
      this.test = this.test ? this.test * 2 : 10;
    }
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

const _static_initializers_0u8k7ki0vv = [];

const _symbol_cr0dmth3grg = Symbol();

class C {
  static _temp_6ih0lav78lo() {}
  static [_symbol_cr0dmth3grg] = __applyDecorator(decorator(C._temp_6ih0lav78lo, {
    kind: "init-method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_cr0dmth3grg]
    },
    defineMetadata: __DefineMetadata(C, "#m")
  }), C._temp_6ih0lav78lo, _static_initializers_0u8k7ki0vv);
  static [_symbol_cr0dmth3grg] = __applyDecorator(decorator(C.undefined, {
    kind: "init-method",
    name: "#m",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_cr0dmth3grg]
    },
    defineMetadata: __DefineMetadata(C, "#m")
  }), C[_symbol_cr0dmth3grg], _static_initializers_0u8k7ki0vv);
  static #m = C[_symbol_cr0dmth3grg];
  static [_symbol_cr0dmth3grg]() {
    return this.#m;
  }
}

delete C._temp_6ih0lav78lo;

_static_initializers_0u8k7ki0vv.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 20);