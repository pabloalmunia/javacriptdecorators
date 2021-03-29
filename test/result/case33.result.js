class C {
  set p(v) {}
}

const _descriptor_1pqes79j1ko = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1pqes79j1ko.set = decorator2(_descriptor_1pqes79j1ko.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!C.prototype[Symbol.metadata].p) {
      C.prototype[Symbol.metadata].p = {
        get: {},
        set: {}
      };
    }

    const db = C.prototype[Symbol.metadata].p.set;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_1pqes79j1ko.set;

Object.defineProperty(C.prototype, "p", _descriptor_1pqes79j1ko);
const _descriptor_710fmcsr33g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_710fmcsr33g.set = decorator1(_descriptor_710fmcsr33g.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!C.prototype[Symbol.metadata].p) {
      C.prototype[Symbol.metadata].p = {
        get: {},
        set: {}
      };
    }

    const db = C.prototype[Symbol.metadata].p.set;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_710fmcsr33g.set;

Object.defineProperty(C.prototype, "p", _descriptor_710fmcsr33g);
const a = new C();