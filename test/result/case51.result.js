function decorator(value, context) {
  if (context.kind === "method") {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

class C {
  static M() {}
}

C = class_decorator(C, {
  kind: "class",
  name: "C",
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].constructor) {
      C[Symbol.metadata].constructor = {};
    }
    const db = C[Symbol.metadata].constructor;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? C;

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

C.M();