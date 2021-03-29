function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
}

class C {
  get p() {
    return "a";
  }
}

const _descriptor_siv7dkn8cc = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_siv7dkn8cc.get = decorator2(_descriptor_siv7dkn8cc.get, {
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
}) ?? _descriptor_siv7dkn8cc.get;

Object.defineProperty(C.prototype, "p", _descriptor_siv7dkn8cc);
const _descriptor_i559d8ofhig = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_i559d8ofhig.get = decorator1(_descriptor_i559d8ofhig.get, {
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
}) ?? _descriptor_i559d8ofhig.get;

Object.defineProperty(C.prototype, "p", _descriptor_i559d8ofhig);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);