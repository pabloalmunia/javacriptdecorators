class C {
  static get P() {
    return "a";
  }
}

const _descriptor_7n3kd960i6 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_7n3kd960i6.get = decorator2(_descriptor_7n3kd960i6.get, {
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
}) ?? _descriptor_7n3kd960i6.get;

Object.defineProperty(C, "P", _descriptor_7n3kd960i6);

const _descriptor_1uhej0j2398 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_1uhej0j2398.get = decorator1(_descriptor_1uhej0j2398.get, {
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
}) ?? _descriptor_1uhej0j2398.get;

Object.defineProperty(C, "P", _descriptor_1uhej0j2398);

console.assert(C.p === "a");