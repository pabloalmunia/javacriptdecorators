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
  get p() {}
}

const _descriptor_dga4q7pq588 = Object.getOwnPropertyDescriptor(A.prototype, "p");

_descriptor_dga4q7pq588.get = decorator(_descriptor_dga4q7pq588.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(A.prototype, "p")
}) ?? _descriptor_dga4q7pq588.get;

Object.defineProperty(A.prototype, "p", _descriptor_dga4q7pq588);