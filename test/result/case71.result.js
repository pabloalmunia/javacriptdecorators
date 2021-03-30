class A {
  static set P(v) {}
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

const _descriptor_dmc1rik9p18 = Object.getOwnPropertyDescriptor(A, "P");

_descriptor_dmc1rik9p18.set = decorator(_descriptor_dmc1rik9p18.set, {
  kind: "setter",
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
}) ?? _descriptor_dmc1rik9p18.set;

Object.defineProperty(A, "P", _descriptor_dmc1rik9p18);