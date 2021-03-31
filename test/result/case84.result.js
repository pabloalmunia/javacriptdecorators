function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
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

class C {
  static P = 10;
}

const _initializer_836vnm4vlmg = decorator2(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_836vnm4vlmg(C.P);

const _initializer_bj86q2a4v0o = decorator1(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_bj86q2a4v0o(C.P);

console.log(C[Symbol.metadata]);