function decorator(context) {
  return function(v) {
    return v * 2;
  };
}

let _initializer_87p94g1sgsg;

class C {
  p = _initializer_87p94g1sgsg(10);
}

_initializer_87p94g1sgsg = decorator(undefined, {
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

const c = new C();
console.assert(c.p === 20);