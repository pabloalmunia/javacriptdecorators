function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  set p(v) {}
  get p() {}
}

const _descriptor_qkgrjs45nso = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_qkgrjs45nso.get = meta("d", 3)(_descriptor_qkgrjs45nso.get, {
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
}) ?? _descriptor_qkgrjs45nso.get;

Object.defineProperty(C.prototype, "p", _descriptor_qkgrjs45nso);
const _descriptor_4aenb1uf24o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_4aenb1uf24o.get = meta("c", 3)(_descriptor_4aenb1uf24o.get, {
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
}) ?? _descriptor_4aenb1uf24o.get;

Object.defineProperty(C.prototype, "p", _descriptor_4aenb1uf24o);
const _descriptor_1vv0alln8t8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1vv0alln8t8.set = meta("b", 2)(_descriptor_1vv0alln8t8.set, {
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
}) ?? _descriptor_1vv0alln8t8.set;

Object.defineProperty(C.prototype, "p", _descriptor_1vv0alln8t8);
const _descriptor_tq28hsdmbfo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_tq28hsdmbfo.set = meta("a", 1)(_descriptor_tq28hsdmbfo.set, {
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
}) ?? _descriptor_tq28hsdmbfo.set;

Object.defineProperty(C.prototype, "p", _descriptor_tq28hsdmbfo);
console.log(C.prototype[Symbol.metadata]);