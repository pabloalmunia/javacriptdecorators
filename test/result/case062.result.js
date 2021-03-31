function decorator(value, context) {
  return function() {
    return "b";
  };
}

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
  static get P() {
    return "a";
  }
}

const _descriptor_uoj17cirtho = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_uoj17cirtho.get = decorator(_descriptor_uoj17cirtho.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_uoj17cirtho.get;

Object.defineProperty(C, "P", _descriptor_uoj17cirtho);

console.assert(C.P === "b");