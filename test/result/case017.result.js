function decorator(value, context) {
  if (context.kind === "method" && context.addInitializer) {
    context.addInitializer(function() {
      console.log(`initializing ${context.name}`);
    });
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
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

const _C_member_initializers_r5ra7g = [];

class C {
  constructor() {
    _C_member_initializers_r5ra7g.forEach(initialize => initialize.call(this));
  }
  m() {}
}

C.prototype.m = decorator(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m"),
  addInitializer: initializer => _C_member_initializers_r5ra7g.push(initializer)
}) ?? C.prototype.m;

new C().m();