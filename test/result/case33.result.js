class C {
  set p(v) {}
}

const _descriptor_aevtei3i2lo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_aevtei3i2lo.set = decorator2(_descriptor_aevtei3i2lo.set, {
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
}) ?? _descriptor_aevtei3i2lo.set;

Object.defineProperty(C.prototype, "p", _descriptor_aevtei3i2lo);

const _descriptor_0ugq2eq3f1o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_0ugq2eq3f1o.set = decorator1(_descriptor_0ugq2eq3f1o.set, {
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
}) ?? _descriptor_0ugq2eq3f1o.set;

Object.defineProperty(C.prototype, "p", _descriptor_0ugq2eq3f1o);

const a = new C();