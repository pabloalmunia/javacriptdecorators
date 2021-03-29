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

const _descriptor_2f5n0hjr1gg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_2f5n0hjr1gg.get = meta("b", 2)(_descriptor_2f5n0hjr1gg.get, {
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
}) ?? _descriptor_2f5n0hjr1gg.get;

Object.defineProperty(C.prototype, "p", _descriptor_2f5n0hjr1gg);
const _descriptor_jv6ad4ss2v = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_jv6ad4ss2v.get = meta("a", 1)(_descriptor_jv6ad4ss2v.get, {
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
}) ?? _descriptor_jv6ad4ss2v.get;

Object.defineProperty(C.prototype, "p", _descriptor_jv6ad4ss2v);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);