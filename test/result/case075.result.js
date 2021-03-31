function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
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

class C {
  static get P() {
    return "a";
  }
  static set P(v) {
    return "a";
  }
}

const _descriptor_jsugcb9cu2 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_jsugcb9cu2.set = meta("d", 4)(_descriptor_jsugcb9cu2.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_jsugcb9cu2.set;

Object.defineProperty(C, "P", _descriptor_jsugcb9cu2);

const _descriptor_q5e0t3pf8j = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_q5e0t3pf8j.set = meta("c", 3)(_descriptor_q5e0t3pf8j.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_q5e0t3pf8j.set;

Object.defineProperty(C, "P", _descriptor_q5e0t3pf8j);

const _descriptor_07s6nid7mgo = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_07s6nid7mgo.get = meta("b", 2)(_descriptor_07s6nid7mgo.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_07s6nid7mgo.get;

Object.defineProperty(C, "P", _descriptor_07s6nid7mgo);

const _descriptor_ispoohjqjso = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_ispoohjqjso.get = meta("a", 1)(_descriptor_ispoohjqjso.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_ispoohjqjso.get;

Object.defineProperty(C, "P", _descriptor_ispoohjqjso);

console.assert(C.P === "a");

console.log(C[Symbol.metadata]);