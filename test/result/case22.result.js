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

const _descriptor_bdfg6udc10o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_bdfg6udc10o.get = decorator(_descriptor_bdfg6udc10o.get, {
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
      C.prototype[Symbol.metadata].p = {
        get: {},
        set: {}
      };
    }

    const db = C.prototype[Symbol.metadata].p.get;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? _descriptor_bdfg6udc10o.get;

Object.defineProperty(C.prototype, "p", _descriptor_bdfg6udc10o);
const a = new C();
console.assert(a.p === "b");