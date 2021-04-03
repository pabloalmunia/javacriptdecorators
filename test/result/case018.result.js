function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "init-method") {
      return {
        initialize() {
          this[key] = value;
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

const _member_initializers_rka777uf2ug = [];

class C {
  constructor() {
    this.z = 100;
    _member_initializers_rka777uf2ug.forEach(initialize => initialize.call(this));
  }
  m() {}
}

C.prototype.m = __applyDecorator(addProperty("a", 1)(C.prototype.m, {
  kind: "init-method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m")
}), C.prototype.m, _member_initializers_rka777uf2ug);

C.prototype.m = __applyDecorator(addProperty("b", 2)(C.prototype.m, {
  kind: "init-method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m")
}), C.prototype.m, _member_initializers_rka777uf2ug);

const _member_initializers_3r0qqa4ondo = [];

class D extends C {
  constructor() {
    super();
    _member_initializers_3r0qqa4ondo.forEach(initialize => initialize.call(this));
  }
  m() {}
}

D.prototype.m = __applyDecorator(addProperty("c", 3)(D.prototype.m, {
  kind: "init-method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "m")
}), D.prototype.m, _member_initializers_3r0qqa4ondo);

D.prototype.m = __applyDecorator(addProperty("d", 4)(D.prototype.m, {
  kind: "init-method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "m")
}), D.prototype.m, _member_initializers_3r0qqa4ondo);

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