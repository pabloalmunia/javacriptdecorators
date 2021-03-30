function decorator(value, context) {
  return function() {
    return "b";
  };
}

class C {
  static get P() {
    return "a";
  }
}

const _descriptor_bmj68is25q8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_bmj68is25q8.get = decorator(_descriptor_bmj68is25q8.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_bmj68is25q8.get;

Object.defineProperty(C, "P", _descriptor_bmj68is25q8);

console.assert(C.P === "b");