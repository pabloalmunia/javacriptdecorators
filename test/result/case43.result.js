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

let _initializer_ccgl2l5m42o;

let _initializer_766n9ftiu9;

class C {
  p = _initializer_766n9ftiu9(_initializer_ccgl2l5m42o());
}

_initializer_766n9ftiu9 = decorator2(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

_initializer_ccgl2l5m42o = decorator1(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

const a = new C();