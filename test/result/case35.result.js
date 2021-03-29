function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  set p(v) {}
  get p() {}
}

const _descriptor_am4mhuqjl4o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_am4mhuqjl4o.get = meta("d", 3)(_descriptor_am4mhuqjl4o.get, {
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
}) ?? _descriptor_am4mhuqjl4o.get;

Object.defineProperty(C.prototype, "p", _descriptor_am4mhuqjl4o);
const _descriptor_t7gmskrrbmo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_t7gmskrrbmo.get = meta("c", 3)(_descriptor_t7gmskrrbmo.get, {
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
}) ?? _descriptor_t7gmskrrbmo.get;

Object.defineProperty(C.prototype, "p", _descriptor_t7gmskrrbmo);
const _descriptor_o70sc713jmg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_o70sc713jmg.set = meta("b", 2)(_descriptor_o70sc713jmg.set, {
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
}) ?? _descriptor_o70sc713jmg.set;

Object.defineProperty(C.prototype, "p", _descriptor_o70sc713jmg);
const _descriptor_06emd2r5uko = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_06emd2r5uko.set = meta("a", 1)(_descriptor_06emd2r5uko.set, {
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
}) ?? _descriptor_06emd2r5uko.set;

Object.defineProperty(C.prototype, "p", _descriptor_06emd2r5uko);
console.log(C.prototype[Symbol.metadata]);