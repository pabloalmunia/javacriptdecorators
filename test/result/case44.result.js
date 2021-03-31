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

let _initializer_jfsu70lbqpg;

let _initializer_m1ee092g9g;

class C {
  p = _initializer_m1ee092g9g(_initializer_jfsu70lbqpg(10));
}

_initializer_m1ee092g9g = decorator2(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

_initializer_jfsu70lbqpg = decorator1(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);