class C {
  get p() {
    return "a";
  }
}

const _descriptor_3i09edp4s2g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_3i09edp4s2g.get = decorator2(_descriptor_3i09edp4s2g.get, {
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
}) ?? _descriptor_3i09edp4s2g.get;

Object.defineProperty(C.prototype, "p", _descriptor_3i09edp4s2g);
const _descriptor_rh6qf9g0668 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_rh6qf9g0668.get = decorator1(_descriptor_rh6qf9g0668.get, {
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
}) ?? _descriptor_rh6qf9g0668.get;

Object.defineProperty(C.prototype, "p", _descriptor_rh6qf9g0668);
const a = new C();
console.assert(a.p === "b");