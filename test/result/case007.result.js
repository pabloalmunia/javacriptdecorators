const unique = () => Math.random().toString(32).substring(2);

function decorator(klass) {
  const u = unique();
  klass.prototype[u] = function() {
    return u;
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

class C {}

_result_i5cchd6nafo = decorator(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) || {};

C = _result_i5cchd6nafo.definition || C;

_result_i5cchd6nafo.initialize && _result_i5cchd6nafo.initialize.call(C);

class B extends C {}

_result_8c3ov1eviq8 = decorator(B, {
  kind: "init-class",
  name: "B",
  defineMetadata: __DefineMetadata(B, "constructor")
}) || {};

B = _result_8c3ov1eviq8.definition || B;

_result_8c3ov1eviq8.initialize && _result_8c3ov1eviq8.initialize.call(B);

new B(1);