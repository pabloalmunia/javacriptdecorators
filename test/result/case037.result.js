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

const _member_initializers_526okii3vug = [];

class C {
  constructor() {
    _member_initializers_526okii3vug.forEach(initialize => initialize.call(this));
  }
  #p = 10;
  get p() {
    return this.#p;
  }
  set p(v) {
    this.#p = v;
  }
}

const _descriptor_5pd0v8fffdo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5pd0v8fffdo.set = __applyDecorator(decorator(_descriptor_5pd0v8fffdo.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_5pd0v8fffdo.set, _member_initializers_526okii3vug);

Object.defineProperty(C.prototype, "p", _descriptor_5pd0v8fffdo);

console.assert(new C().test === 10);

const c = new C();

c.p = 20;

console.assert(c.p === 40);