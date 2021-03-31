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
  static get P() {
    return "a";
  }
}

const _descriptor_f7bc0l0dsj = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_f7bc0l0dsj.get = decorator2(_descriptor_f7bc0l0dsj.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_f7bc0l0dsj.get;

Object.defineProperty(C, "P", _descriptor_f7bc0l0dsj);

const _descriptor_3fiaehebkdo = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_3fiaehebkdo.get = decorator1(_descriptor_3fiaehebkdo.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_3fiaehebkdo.get;

Object.defineProperty(C, "P", _descriptor_3fiaehebkdo);

console.assert(C.p === "a");

console.log(C[Symbol.metadata]);