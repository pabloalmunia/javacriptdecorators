let _initializer_b5gvd82lg5o;

class A {
  p = _initializer_b5gvd82lg5o(1);
}

_initializer_b5gvd82lg5o = decorator(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!A.prototype[Symbol.metadata]) {
      A.prototype[Symbol.metadata] = Object.create(null);
    }
    if (!A.prototype[Symbol.metadata].p) {
      A.prototype[Symbol.metadata].p = {};
    }
    const db = A.prototype[Symbol.metadata].p;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? (v => v);