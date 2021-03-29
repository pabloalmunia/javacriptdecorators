function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  get p() {
    return "a";
  }
}

const _descriptor_3lp59pofbq = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_3lp59pofbq.get = meta("b", 2)(_descriptor_3lp59pofbq.get, {
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
}) ?? _descriptor_3lp59pofbq.get;

Object.defineProperty(C.prototype, "p", _descriptor_3lp59pofbq);

const _descriptor_toplji3pp2 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_toplji3pp2.get = meta("a", 1)(_descriptor_toplji3pp2.get, {
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
}) ?? _descriptor_toplji3pp2.get;

Object.defineProperty(C.prototype, "p", _descriptor_toplji3pp2);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);