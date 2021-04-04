function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    set(v) {
      value.call(this, v * 2);
    },
    initialize() {
      this.test = 10;
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

const _static_initializers_iq84at7kcjg = [];

class C {
  static #p = 10;
  static get p() {
    return this.#p;
  }
  static set p(v) {
    this.#p = v;
  }
}

const _initializer_6pqm64vqfb = Object.getOwnPropertyDescriptor(C, "p");

_initializer_6pqm64vqfb.set = __applyDecorator(decorator(_initializer_6pqm64vqfb.set, {
  kind: "init-setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_6pqm64vqfb.set, _static_initializers_iq84at7kcjg);

Object.defineProperty(C, "p", _initializer_6pqm64vqfb);

_static_initializers_iq84at7kcjg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

C.p = 20;

console.assert(C.p === 40);