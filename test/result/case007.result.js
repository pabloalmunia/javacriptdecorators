function logged(
  value,
  {
    kind,
    name
  }
) {
  if (kind === "init-class") {
    return {
      definition: class extends value {
        constructor(...args) {
          super();
          console.log(`constructing an instance of ${name} with arguments ${args.join(", ")}`);
        }
      },
      initialize() {
        console.log(`finished defining ${this.name}`);
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
    return result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _class_initializers_utkcekgt72g = [];

class C {}

C = __applyDecorator(logged(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}), C, _class_initializers_utkcekgt72g);

_class_initializers_utkcekgt72g.forEach(initialize => initialize.call(C, C));

new C(1);