function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "init-class") {
      return {
        initialize() {
          this.prototype[key] = value;
        }
      };
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

const _class_initializers_tifk1tbr7kg = [];

class C {}

C = __applyDecorator(addProperty("b", 2)(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}), C, _class_initializers_tifk1tbr7kg);

C = __applyDecorator(addProperty("a", 1)(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}), C, _class_initializers_tifk1tbr7kg);

_class_initializers_tifk1tbr7kg.forEach(initialize => initialize.call(C, C));

const _class_initializers_0hepr5qfp28 = [];

class D extends C {}

D = __applyDecorator(addProperty("d", 4)(D, {
  kind: "init-class",
  name: "D",
  defineMetadata: __DefineMetadata(D, "constructor")
}), D, _class_initializers_0hepr5qfp28);

D = __applyDecorator(addProperty("c", 3)(D, {
  kind: "init-class",
  name: "D",
  defineMetadata: __DefineMetadata(D, "constructor")
}), D, _class_initializers_0hepr5qfp28);

_class_initializers_0hepr5qfp28.forEach(initialize => initialize.call(D, D));

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);