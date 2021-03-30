function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  static M() {}
}

C.M = decorator(C.M, {
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

console.log(C.M.extra);