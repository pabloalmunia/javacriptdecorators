class C {
  static P;
}

const _initializer_6ogrls6fao8 = decorator2(undefined, {
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

C.P = _initializer_6ogrls6fao8(C.P);

const _initializer_jmhsuipmffg = decorator1(undefined, {
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

C.P = _initializer_jmhsuipmffg(C.P);