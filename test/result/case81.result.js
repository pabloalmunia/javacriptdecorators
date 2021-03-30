class A {
  static P = 1;
}

A = class_decorator(A, {
  kind: "class",
  name: "A",
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!A[Symbol.metadata]) {
      A[Symbol.metadata] = Object.create(null);
    }
    if (!A[Symbol.metadata].constructor) {
      A[Symbol.metadata].constructor = {};
    }
    const db = A[Symbol.metadata].constructor;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? A;

const _initializer_2mph5ocllcg = decorator(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!A[Symbol.metadata]) {
      A[Symbol.metadata] = Object.create(null);
    }
    if (!A[Symbol.metadata].P) {
      A[Symbol.metadata].P = {};
    }
    const db = A[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? (v => v);

A.P = _initializer_2mph5ocllcg(A.P);