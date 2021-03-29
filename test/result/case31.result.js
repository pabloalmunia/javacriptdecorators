class A {
  set p(v) {}
}

const _descriptor_8978f74i5q8 = Object.getOwnPropertyDescriptor(A.prototype, "p");

_descriptor_8978f74i5q8.set = decorator(_descriptor_8978f74i5q8.set, {
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
      A.prototype[Symbol.metadata].p = {};
    }

    const db = A.prototype[Symbol.metadata].p;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_8978f74i5q8.set;

Object.defineProperty(A.prototype, "p", _descriptor_8978f74i5q8);