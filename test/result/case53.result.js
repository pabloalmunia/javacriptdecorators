function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}

function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
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
  static M() {}
}

C.M = decorator2(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "M")
}) ?? C.M;

C.M = decorator1(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "M")
}) ?? C.M;

console.log(C.M.one);

console.log(C.M.two);