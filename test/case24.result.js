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

const _descriptor_lst4h7cgjc = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_lst4h7cgjc.get = decorator2(_descriptor_lst4h7cgjc.get, {
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
}) ?? _descriptor_lst4h7cgjc.get;

Object.defineProperty(C.prototype, "p", _descriptor_lst4h7cgjc);
const _descriptor_f4s8tgc04mg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_f4s8tgc04mg.get = decorator1(_descriptor_f4s8tgc04mg.get, {
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
}) ?? _descriptor_f4s8tgc04mg.get;

Object.defineProperty(C.prototype, "p", _descriptor_f4s8tgc04mg);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);