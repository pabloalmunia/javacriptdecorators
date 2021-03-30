function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  static get P() {
    return "a";
  }
  static set P(v) {
    return "a";
  }
}

const _descriptor_ci9efi7p0q = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_ci9efi7p0q.set = meta("d", 4)(_descriptor_ci9efi7p0q.set, {
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
}) ?? _descriptor_ci9efi7p0q.set;

Object.defineProperty(C, "P", _descriptor_ci9efi7p0q);

const _descriptor_vd6p1njm28o = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_vd6p1njm28o.set = meta("c", 3)(_descriptor_vd6p1njm28o.set, {
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
}) ?? _descriptor_vd6p1njm28o.set;

Object.defineProperty(C, "P", _descriptor_vd6p1njm28o);

const _descriptor_k7pf8f1vtqg = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_k7pf8f1vtqg.get = meta("b", 2)(_descriptor_k7pf8f1vtqg.get, {
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
}) ?? _descriptor_k7pf8f1vtqg.get;

Object.defineProperty(C, "P", _descriptor_k7pf8f1vtqg);

const _descriptor_6m22fqqskeo = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_6m22fqqskeo.get = meta("a", 1)(_descriptor_6m22fqqskeo.get, {
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
}) ?? _descriptor_6m22fqqskeo.get;

Object.defineProperty(C, "P", _descriptor_6m22fqqskeo);

console.assert(C.P === "a");

console.log(C[Symbol.metadata]);