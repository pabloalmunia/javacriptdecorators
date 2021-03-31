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
  static set P(v) {}
}

const _descriptor_dd9bmunansg = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_dd9bmunansg.set = decorator2(_descriptor_dd9bmunansg.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_dd9bmunansg.set;

Object.defineProperty(C, "P", _descriptor_dd9bmunansg);

const _descriptor_rsm09l1o6b = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_rsm09l1o6b.set = decorator1(_descriptor_rsm09l1o6b.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_rsm09l1o6b.set;

Object.defineProperty(C, "P", _descriptor_rsm09l1o6b);