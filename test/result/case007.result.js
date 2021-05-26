function logged(
  value,
  {
    kind,
    name,
    addInitializer
  }
) {
  if (kind === "class") {
    if (addInitializer) {
      addInitializer(function() {
        console.log(`finished defining ${this.name}`);
      });
    }
    return class extends value {
      constructor(...args) {
        super();
        console.log(`constructing an instance of ${name} with arguments ${args.join(", ")}`);
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

const _C_class_initializers_actg1g = [];

class C {}

C = logged(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor"),
  addInitializer: initializer => _C_class_initializers_actg1g.push(initializer)
}) ?? C;

_C_class_initializers_actg1g.forEach(initializer => initializer.call(C, C));

new C(1);