function meta(key, value) {
  return function decorator1(_, context) {
    context.defineMetadata(key, value);
  };
}

let _initializer_rubj0r7v4k;
let _initializer_c74qjrjkqi;
let _initializer_l2hqcbfqo4o;
let _initializer_v33s4oqra9o;

class C {
  p = _initializer_c74qjrjkqi(_initializer_rubj0r7v4k(10));
  f = _initializer_v33s4oqra9o(_initializer_l2hqcbfqo4o(20));
}

_initializer_v33s4oqra9o = meta("d", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!C.prototype[Symbol.metadata].f) {
      C.prototype[Symbol.metadata].f = {};
    }

    const db = C.prototype[Symbol.metadata].f;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? (v => v);

_initializer_l2hqcbfqo4o = meta("c", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }

    if (!C.prototype[Symbol.metadata].f) {
      C.prototype[Symbol.metadata].f = {};
    }

    const db = C.prototype[Symbol.metadata].f;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? (v => v);

_initializer_c74qjrjkqi = meta("b", 2)(undefined, {
  kind: "field",
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
}) ?? (v => v);

_initializer_rubj0r7v4k = meta("a", 1)(undefined, {
  kind: "field",
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
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);