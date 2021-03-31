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

const _descriptor_4pbjiq1fj98 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_4pbjiq1fj98.set = decorator2(_descriptor_4pbjiq1fj98.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_4pbjiq1fj98.set;

Object.defineProperty(C, "P", _descriptor_4pbjiq1fj98);

const _descriptor_i7q5b76307g = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_i7q5b76307g.set = decorator1(_descriptor_i7q5b76307g.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_i7q5b76307g.set;

Object.defineProperty(C, "P", _descriptor_i7q5b76307g);