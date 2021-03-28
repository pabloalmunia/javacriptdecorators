const unique = () => Math.random().toString(32).substring(2);

function decorator(klass) {
  const u = unique();

  klass.prototype[u] = function() {
    return u;
  };
}

class C {}

_result87cugekd3fo = decorator(C, {
  kind: "init-class",
  name: "C",

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }

    if (!C[Symbol.metadata].constructor) {
      C[Symbol.metadata].constructor = {};
    }

    const db = C[Symbol.metadata].constructor;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) || {};

C = _result87cugekd3fo.definition || C;
_result87cugekd3fo.initialize && _result87cugekd3fo.initialize.call(C);
class B extends C {}

_resultu2ki2o7es9 = decorator(B, {
  kind: "init-class",
  name: "B",

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!B[Symbol.metadata]) {
      B[Symbol.metadata] = Object.create(null);
    }

    if (!B[Symbol.metadata].constructor) {
      B[Symbol.metadata].constructor = {};
    }

    const db = B[Symbol.metadata].constructor;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) || {};

B = _resultu2ki2o7es9.definition || B;
_resultu2ki2o7es9.initialize && _resultu2ki2o7es9.initialize.call(B);
new B(1);