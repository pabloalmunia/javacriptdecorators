function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "class" && context.addInitializer) {
      context.addInitializer(function() {
        this.prototype[key] = value;
      });
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

const _C_class_initializers_gou67g = [];

class C {}

C = addProperty("b", 2)(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor"),
  addInitializer: initializer => _C_class_initializers_gou67g.push(initializer)
}) ?? C;

C = addProperty("a", 1)(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor"),
  addInitializer: initializer => _C_class_initializers_gou67g.push(initializer)
}) ?? C;

_C_class_initializers_gou67g.forEach(initializer => initializer.call(C, C));

const _D_class_initializers_kk05s = [];

class D extends C {}

D = addProperty("d", 4)(D, {
  kind: "class",
  name: "D",
  defineMetadata: __DefineMetadata(D, "constructor"),
  addInitializer: initializer => _D_class_initializers_kk05s.push(initializer)
}) ?? D;

D = addProperty("c", 3)(D, {
  kind: "class",
  name: "D",
  defineMetadata: __DefineMetadata(D, "constructor"),
  addInitializer: initializer => _D_class_initializers_kk05s.push(initializer)
}) ?? D;

_D_class_initializers_kk05s.forEach(initializer => initializer.call(D, D));

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