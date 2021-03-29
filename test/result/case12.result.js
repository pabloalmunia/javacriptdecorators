function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  m() {}
}

C.prototype.m = decorator(C.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!C.prototype[Symbol.metadata].m) {
      C.prototype[Symbol.metadata].m = {};
    }

    const db = C.prototype[Symbol.metadata].m;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? C.prototype.m;

console.log(new C().m.extra);