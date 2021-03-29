class A {
  get p() {}
}

const _descriptor_ag9bn9p8poo = Object.getOwnPropertyDescriptor(A.prototype, "p");

_descriptor_ag9bn9p8poo.get = decorator(_descriptor_ag9bn9p8poo.get, {
  kind: "getter",
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

    const db = A.prototype[Symbol.metadata].p.get;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_ag9bn9p8poo.get;

Object.defineProperty(A.prototype, "p", _descriptor_ag9bn9p8poo);