function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitialize(function () {
    this.test = 10;
  });
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

const _member_initializers_8d9hr81voq = [];

class C {
  constructor() {
    _member_initializers_8d9hr81voq.forEach(initialize => initialize.call(this));
  }
  m() {}
}

C.prototype.m = decorator(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m"),
  addInitializer: (initializer) => _member_initializers_8d9hr81voq.push(initializer)
}) ?? C.prototype.m;

console.assert(new C().test === 10);