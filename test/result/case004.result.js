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

C = decorator2(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

C = decorator1(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

function decorator1(value) {
  value.prototype.a = 1;
}

function decorator2(value) {
  value.prototype.b = 2;
}

const c = new C();

console.log(c.a, c.b);