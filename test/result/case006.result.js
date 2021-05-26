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

const _class_initializers_ia8koshaj0g = [];

class C {}

C = decorator(C, {
  kind: "init-class",
  name: "C",
  addInitializer: (initializer) => _class_initializers_ia8koshaj0g.push(initializer),
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

_class_initializers_ia8koshaj0g.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 10);