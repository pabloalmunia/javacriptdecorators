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
  static set P(v) {}
}

const _descriptor_e8c4u95jk5o = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_e8c4u95jk5o.set = decorator2(_descriptor_e8c4u95jk5o.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_e8c4u95jk5o.set;

Object.defineProperty(C, "P", _descriptor_e8c4u95jk5o);

const _descriptor_oobddorboe8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_oobddorboe8.set = decorator1(_descriptor_oobddorboe8.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_oobddorboe8.set;

Object.defineProperty(C, "P", _descriptor_oobddorboe8);

console.assert(C.p === "a");

console.log(C[Symbol.metadata]);