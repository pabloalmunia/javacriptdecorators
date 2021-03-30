function decorator(context) {
  return function(v) {
    return v * 2;
  };
}

class C {
  static P = 10;
}

const _initializer_pchkg65oo5g = decorator(undefined, {
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

C.P = _initializer_pchkg65oo5g(C.P);

console.assert(C.P === 20);