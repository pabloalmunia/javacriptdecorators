function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  set p(v) {}
  get p() {}
}

const _descriptor_u6m2dq16k2g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_u6m2dq16k2g.get = meta("d", 3)(_descriptor_u6m2dq16k2g.get, {
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
}) ?? _descriptor_u6m2dq16k2g.get;

Object.defineProperty(C.prototype, "p", _descriptor_u6m2dq16k2g);
const _descriptor_phu15finc98 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_phu15finc98.get = meta("c", 3)(_descriptor_phu15finc98.get, {
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
}) ?? _descriptor_phu15finc98.get;

Object.defineProperty(C.prototype, "p", _descriptor_phu15finc98);
const _descriptor_971idqet3f = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_971idqet3f.set = meta("b", 2)(_descriptor_971idqet3f.set, {
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
}) ?? _descriptor_971idqet3f.set;

Object.defineProperty(C.prototype, "p", _descriptor_971idqet3f);
const _descriptor_raacpg8cf28 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_raacpg8cf28.set = meta("a", 1)(_descriptor_raacpg8cf28.set, {
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
}) ?? _descriptor_raacpg8cf28.set;

Object.defineProperty(C.prototype, "p", _descriptor_raacpg8cf28);
console.log(C.prototype[Symbol.metadata]);