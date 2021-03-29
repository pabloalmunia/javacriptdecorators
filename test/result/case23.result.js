class C {
  get p() {
    return "a";
  }
}

const _descriptor_jh43l5uqr7g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_jh43l5uqr7g.get = decorator2(_descriptor_jh43l5uqr7g.get, {
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
}) ?? _descriptor_jh43l5uqr7g.get;

Object.defineProperty(C.prototype, "p", _descriptor_jh43l5uqr7g);

const _descriptor_qsfquc4uf78 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_qsfquc4uf78.get = decorator1(_descriptor_qsfquc4uf78.get, {
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
}) ?? _descriptor_qsfquc4uf78.get;

Object.defineProperty(C.prototype, "p", _descriptor_qsfquc4uf78);

const a = new C();

console.assert(a.p === "b");