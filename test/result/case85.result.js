function meta(key, value) {
  return function decorator1(_, context) {
    context.defineMetadata(key, value);
  };
}

class C {
  static P = 10;
  static F = 20;
}

const _initializer_er3qp2i1ql = meta("d", 3)(undefined, {
  kind: "field",
  name: "F",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].F) {
      C[Symbol.metadata].F = {};
    }
    const db = C[Symbol.metadata].F;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? (v => v);

C.F = _initializer_er3qp2i1ql(C.F);

const _initializer_f3n4ufpsejg = meta("c", 3)(undefined, {
  kind: "field",
  name: "F",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].F) {
      C[Symbol.metadata].F = {};
    }
    const db = C[Symbol.metadata].F;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? (v => v);

C.F = _initializer_f3n4ufpsejg(C.F);

const _initializer_9c4h1v6mkl8 = meta("b", 2)(undefined, {
  kind: "field",
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
}) ?? (v => v);

C.P = _initializer_9c4h1v6mkl8(C.P);

const _initializer_lhshc7un65o = meta("a", 1)(undefined, {
  kind: "field",
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
}) ?? (v => v);

C.P = _initializer_lhshc7un65o(C.P);

console.log(C[Symbol.metadata]);