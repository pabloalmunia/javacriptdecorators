function decorator(value, context) {
  return function() {
    return "b";
  };
}

class C {
  get p() {
    return "a";
  }
}

const _descriptor_gk5lndr46m = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_gk5lndr46m.get = decorator(_descriptor_gk5lndr46m.get, {
  kind: "getter",
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
      C.prototype[Symbol.metadata].p = {};
    }

    const db = C.prototype[Symbol.metadata].p;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_gk5lndr46m.get;

Object.defineProperty(C.prototype, "p", _descriptor_gk5lndr46m);
const a = new C();
console.assert(a.p === "b");