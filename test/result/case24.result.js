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

const _descriptor_g339ab4f2ao = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_g339ab4f2ao.get = decorator2(_descriptor_g339ab4f2ao.get, {
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
}) ?? _descriptor_g339ab4f2ao.get;

Object.defineProperty(C.prototype, "p", _descriptor_g339ab4f2ao);

const _descriptor_hb4ir0pt7d8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_hb4ir0pt7d8.get = decorator1(_descriptor_hb4ir0pt7d8.get, {
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
}) ?? _descriptor_hb4ir0pt7d8.get;

Object.defineProperty(C.prototype, "p", _descriptor_hb4ir0pt7d8);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);