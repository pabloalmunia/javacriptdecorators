function decorator(value) {
  return function(methodº, context) {
    context.defineMetadata("one", value);
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

class C {
  m() {}
}

C.prototype.m = decorator("test2")(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m")
}) ?? C.prototype.m;

C.prototype.m = decorator("test1")(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "m")
}) ?? C.prototype.m;

console.log(C.prototype[Symbol.metadata]);