function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  set p(v) {}
  p() {}
}

C.prototype.p = meta("c", 3)(C.prototype.p, {
  kind: "method",
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
}) ?? C.prototype.p;

const _descriptor_dt5gpf4pa88 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_dt5gpf4pa88.set = meta("b", 2)(_descriptor_dt5gpf4pa88.set, {
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
}) ?? _descriptor_dt5gpf4pa88.set;

Object.defineProperty(C.prototype, "p", _descriptor_dt5gpf4pa88);

const _descriptor_trog7q3qr1 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_trog7q3qr1.set = meta("a", 1)(_descriptor_trog7q3qr1.set, {
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
}) ?? _descriptor_trog7q3qr1.set;

Object.defineProperty(C.prototype, "p", _descriptor_trog7q3qr1);

console.log(C.prototype[Symbol.metadata]);