function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
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

const _member_initializers_398evndglk = [];

class C {
  constructor() {
    _member_initializers_398evndglk.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _descriptor_debge52pvkg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_debge52pvkg.set = __applyDecorator(decorator(_descriptor_debge52pvkg.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_debge52pvkg.set, _member_initializers_398evndglk);

Object.defineProperty(C.prototype, "p", _descriptor_debge52pvkg);

console.assert(new C().test === 10);