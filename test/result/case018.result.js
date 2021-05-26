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

const _C_member_initializers_n3ih9g = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_n3ih9g.forEach(initialize => initialize.call(this));
  }
  m() {}
}

C.prototype.m = addProperty("a", 1)(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m"),
  addInitializer: initializer => _C_member_initializers_n3ih9g.push(initializer)
}) ?? C.prototype.m;

C.prototype.m = addProperty("b", 2)(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m"),
  addInitializer: initializer => _C_member_initializers_n3ih9g.push(initializer)
}) ?? C.prototype.m;

const _D_member_initializers_o0f6jo = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_o0f6jo.forEach(initialize => initialize.call(this));
  }
  m() {}
}

D.prototype.m = addProperty("c", 3)(D.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "m"),
  addInitializer: initializer => _D_member_initializers_o0f6jo.push(initializer)
}) ?? D.prototype.m;

D.prototype.m = addProperty("d", 4)(D.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "m"),
  addInitializer: initializer => _D_member_initializers_o0f6jo.push(initializer)
}) ?? D.prototype.m;

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