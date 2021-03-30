function decorator(value) {
  return function(methodº, context) {
    context.defineMetadata("one", value);
  };
}

class C {
  static M() {}
}

C.M = decorator("test2")(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].M) {
      C[Symbol.metadata].M = {};
    }
    const db = C[Symbol.metadata].M;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? C.M;

C.M = decorator("test1")(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].M) {
      C[Symbol.metadata].M = {};
    }
    const db = C[Symbol.metadata].M;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? C.M;

console.log(C[Symbol.metadata]);