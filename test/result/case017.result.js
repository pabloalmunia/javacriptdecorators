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
        console.log(`initializing ${context.name}`);
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

const _member_initializers_mc0d6ocvgf8 = [];

class C {
  constructor() {
    _member_initializers_mc0d6ocvgf8.forEach(initialize => initialize.call(this));
  }
  m() {}
}

C.prototype.m = __applyDecorator(decorator(C.prototype.m, {
  kind: "init-method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m")
}), C.prototype.m, _member_initializers_mc0d6ocvgf8);

new C().m();