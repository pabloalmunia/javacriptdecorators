function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    get() {
      return value.call(this) * 2;
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

const _static_initializers_7dnnh93hadg = [];

class C {
  static #p = 10;
  static get p() {
    return this.#p;
  }
}

const _initializer_eedc6kqc3mo = Object.getOwnPropertyDescriptor(C, "p");

_initializer_eedc6kqc3mo.get = __applyDecorator(decorator(_initializer_eedc6kqc3mo.get, {
  kind: "init-getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_eedc6kqc3mo.get, _static_initializers_7dnnh93hadg);

Object.defineProperty(C, "p", _initializer_eedc6kqc3mo);

_static_initializers_7dnnh93hadg.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);