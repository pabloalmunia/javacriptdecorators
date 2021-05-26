function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
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

const _C_static_initializers_m14mf8 = [];

class C {
  constructor() {
    this.z = 100;
  }
  static m() {}
}

C.m = addProperty("b", 2)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "m"),
  addInitializer: initializer => _C_static_initializers_m14mf8.push(initializer)
}) ?? C.m;

C.m = addProperty("a", 1)(C.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "m"),
  addInitializer: initializer => _C_static_initializers_m14mf8.push(initializer)
}) ?? C.m;

_C_static_initializers_m14mf8.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_no439 = [];

class D extends C {
  static m() {}
}

D.m = addProperty("d", 4)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "m"),
  addInitializer: initializer => _D_static_initializers_no439.push(initializer)
}) ?? D.m;

D.m = addProperty("c", 3)(D.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "m"),
  addInitializer: initializer => _D_static_initializers_no439.push(initializer)
}) ?? D.m;

_D_static_initializers_no439.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);