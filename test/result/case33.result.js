class C {
  set p(v) {}
}

const _descriptor_fqpi3fqnubo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_fqpi3fqnubo.set = decorator2(_descriptor_fqpi3fqnubo.set, {
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
}) ?? _descriptor_fqpi3fqnubo.set;

Object.defineProperty(C.prototype, "p", _descriptor_fqpi3fqnubo);
const _descriptor_t0v477e3q28 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_t0v477e3q28.set = decorator1(_descriptor_t0v477e3q28.set, {
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
}) ?? _descriptor_t0v477e3q28.set;

Object.defineProperty(C.prototype, "p", _descriptor_t0v477e3q28);
const a = new C();