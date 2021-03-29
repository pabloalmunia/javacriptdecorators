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

const _descriptor_ip51e6ht1ug = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_ip51e6ht1ug.set = decorator2(_descriptor_ip51e6ht1ug.set, {
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
}) ?? _descriptor_ip51e6ht1ug.set;

Object.defineProperty(C.prototype, "p", _descriptor_ip51e6ht1ug);

const _descriptor_93lkkefa5ig = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_93lkkefa5ig.set = decorator1(_descriptor_93lkkefa5ig.set, {
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
}) ?? _descriptor_93lkkefa5ig.set;

Object.defineProperty(C.prototype, "p", _descriptor_93lkkefa5ig);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);