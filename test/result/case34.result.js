function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
}

class C {
  set p(v) {}
}

const _descriptor_susniq6cqio = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_susniq6cqio.set = decorator2(_descriptor_susniq6cqio.set, {
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
}) ?? _descriptor_susniq6cqio.set;

Object.defineProperty(C.prototype, "p", _descriptor_susniq6cqio);
const _descriptor_bmlt9lpvmn = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_bmlt9lpvmn.set = decorator1(_descriptor_bmlt9lpvmn.set, {
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
}) ?? _descriptor_bmlt9lpvmn.set;

Object.defineProperty(C.prototype, "p", _descriptor_bmlt9lpvmn);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);