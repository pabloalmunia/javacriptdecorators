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

const _static_initializers_gvt29fn099o = [];

class C {
  constructor() {
    this.z = 100;
  }
  static m() {}
}

C.m = __applyDecorator(addProperty("b", 2)(C.m, {
  kind: "init-method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "m")
}), C.m, _static_initializers_gvt29fn099o);

C.m = __applyDecorator(addProperty("a", 1)(C.m, {
  kind: "init-method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "m")
}), C.m, _static_initializers_gvt29fn099o);

_static_initializers_gvt29fn099o.forEach(initialize => initialize.call(C, C));

const _static_initializers_csq133hm5f8 = [];

class D extends C {
  static m() {}
}

D.m = __applyDecorator(addProperty("d", 4)(D.m, {
  kind: "init-method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "m")
}), D.m, _static_initializers_csq133hm5f8);

D.m = __applyDecorator(addProperty("c", 3)(D.m, {
  kind: "init-method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "m")
}), D.m, _static_initializers_csq133hm5f8);

_static_initializers_csq133hm5f8.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);