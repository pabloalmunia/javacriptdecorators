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

const _descriptor_vq8as8pk2k = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_vq8as8pk2k.set = decorator2(_descriptor_vq8as8pk2k.set, {
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
}) ?? _descriptor_vq8as8pk2k.set;

Object.defineProperty(C.prototype, "p", _descriptor_vq8as8pk2k);
const _descriptor_se0v0fubjno = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_se0v0fubjno.set = decorator1(_descriptor_se0v0fubjno.set, {
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
}) ?? _descriptor_se0v0fubjno.set;

Object.defineProperty(C.prototype, "p", _descriptor_se0v0fubjno);
const a = new C();
console.assert(a.p === "a");
console.log(C.prototype[Symbol.metadata]);