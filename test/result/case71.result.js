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

class A {
  static set P(v) {}
}

A = class_decorator(A, {
  kind: "class",
  name: "A",
  defineMetadata: __DefineMetadata(A, "constructor")
}) ?? A;

const _descriptor_ngtsoc15u7g = Object.getOwnPropertyDescriptor(A, "P");

_descriptor_ngtsoc15u7g.set = decorator(_descriptor_ngtsoc15u7g.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(A, "P")
}) ?? _descriptor_ngtsoc15u7g.set;

Object.defineProperty(A, "P", _descriptor_ngtsoc15u7g);