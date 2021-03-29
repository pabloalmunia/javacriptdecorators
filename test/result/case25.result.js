function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  get p() {
    return "a";
  }
}

const _descriptor_8sanpe8s248 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_8sanpe8s248.get = meta("b", 2)(_descriptor_8sanpe8s248.get, {
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
}) ?? _descriptor_8sanpe8s248.get;

Object.defineProperty(C.prototype, "p", _descriptor_8sanpe8s248);
const _descriptor_vsigu5d3ld = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_vsigu5d3ld.get = meta("a", 1)(_descriptor_vsigu5d3ld.get, {
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
}) ?? _descriptor_vsigu5d3ld.get;

Object.defineProperty(C.prototype, "p", _descriptor_vsigu5d3ld);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);