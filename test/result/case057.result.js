function decorator(value, context) {
  if (context.kind === "method") {
    context.addInitializer(function() {
      this.test = 20;
    });
    return function(v) {
      return value.call(this, v * 2);
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

const _C_static_initializers_ghsf5o = [];

const _C_class_initializers_9d3msg = [];

class C {
  static M(n) {
    return n * 2;
  }
}

C = decorator(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor"),
  addInitializer: initializer => _C_class_initializers_9d3msg.push(initializer)
}) ?? C;

C.M = decorator(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "M"),
  addInitializer: initializer => _C_static_initializers_ghsf5o.push(initializer)
}) ?? C.M;

_C_static_initializers_ghsf5o.forEach(initializer => initializer.call(C, C));

_C_class_initializers_9d3msg.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 20);

console.assert(C.M(2) === 8);