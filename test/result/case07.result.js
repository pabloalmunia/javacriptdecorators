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

_result_10572msq73g = decorator(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) || {};

C = _result_10572msq73g.definition || C;

_result_10572msq73g.initialize && _result_10572msq73g.initialize.call(C);

class B extends C {}

_result_kl4td40nngg = decorator(B, {
  kind: "init-class",
  name: "B",
  defineMetadata: __DefineMetadata(B, "constructor")
}) || {};

B = _result_kl4td40nngg.definition || B;

_result_kl4td40nngg.initialize && _result_kl4td40nngg.initialize.call(B);

new B(1);