function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
}

class C {
  static set P(v) {}
}

const _descriptor_q2ciegj0bs = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_q2ciegj0bs.set = decorator2(_descriptor_q2ciegj0bs.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_q2ciegj0bs.set;

Object.defineProperty(C, "P", _descriptor_q2ciegj0bs);

const _descriptor_63rqjemrh18 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_63rqjemrh18.set = decorator1(_descriptor_63rqjemrh18.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_63rqjemrh18.set;

Object.defineProperty(C, "P", _descriptor_63rqjemrh18);

console.assert(C.p === "a");

console.log(C[Symbol.metadata]);