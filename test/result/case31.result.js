class A {
  set p(v) {}
}

const _descriptor_j4gb8gh16v = Object.getOwnPropertyDescriptor(A.prototype, "p");

_descriptor_j4gb8gh16v.set = decorator(_descriptor_j4gb8gh16v.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!A.prototype[Symbol.metadata]) {
      A.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!A.prototype[Symbol.metadata].p) {
      A.prototype[Symbol.metadata].p = {
        get: {},
        set: {}
      };
    }

    const db = A.prototype[Symbol.metadata].p.set;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_j4gb8gh16v.set;

Object.defineProperty(A.prototype, "p", _descriptor_j4gb8gh16v);