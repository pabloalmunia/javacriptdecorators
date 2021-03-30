function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
}

class C {
  static get P() {
    return "a";
  }
}

const _descriptor_fj77imnnioo = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_fj77imnnioo.get = decorator2(_descriptor_fj77imnnioo.get, {
  kind: "getter",
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
}) ?? _descriptor_fj77imnnioo.get;

Object.defineProperty(C, "P", _descriptor_fj77imnnioo);

const _descriptor_k8nd86dr7 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_k8nd86dr7.get = decorator1(_descriptor_k8nd86dr7.get, {
  kind: "getter",
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
}) ?? _descriptor_k8nd86dr7.get;

Object.defineProperty(C, "P", _descriptor_k8nd86dr7);

console.assert(C.p === "a");

console.log(C[Symbol.metadata]);