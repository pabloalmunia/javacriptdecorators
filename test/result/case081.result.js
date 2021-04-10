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
  static P = 1;
}

A = class_decorator(A, {
  kind: "class",
  name: "A",
  defineMetadata: __DefineMetadata(A, "constructor")
}) ?? A;

const _initializer_27qt7dofppo = decorator(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(A, "P")
}) ?? (v => v);

A.P = _initializer_27qt7dofppo.call(A, A.P);