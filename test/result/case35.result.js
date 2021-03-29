function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  set p(v) {}
  get p() {}
}

const _descriptor_boudhhk2k0o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_boudhhk2k0o.get = meta("d", 3)(_descriptor_boudhhk2k0o.get, {
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
}) ?? _descriptor_boudhhk2k0o.get;

Object.defineProperty(C.prototype, "p", _descriptor_boudhhk2k0o);

const _descriptor_m8l76hucag8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_m8l76hucag8.get = meta("c", 3)(_descriptor_m8l76hucag8.get, {
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
}) ?? _descriptor_m8l76hucag8.get;

Object.defineProperty(C.prototype, "p", _descriptor_m8l76hucag8);

const _descriptor_htbua3ocgmo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_htbua3ocgmo.set = meta("b", 2)(_descriptor_htbua3ocgmo.set, {
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
}) ?? _descriptor_htbua3ocgmo.set;

Object.defineProperty(C.prototype, "p", _descriptor_htbua3ocgmo);

const _descriptor_jqdr903l1mg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_jqdr903l1mg.set = meta("a", 1)(_descriptor_jqdr903l1mg.set, {
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
}) ?? _descriptor_jqdr903l1mg.set;

Object.defineProperty(C.prototype, "p", _descriptor_jqdr903l1mg);

console.log(C.prototype[Symbol.metadata]);