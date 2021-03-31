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

const _descriptor_tp4jhbr02eg = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_tp4jhbr02eg.set = decorator2(_descriptor_tp4jhbr02eg.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_tp4jhbr02eg.set;

Object.defineProperty(C, "P", _descriptor_tp4jhbr02eg);

const _descriptor_qaltdjdacq = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_qaltdjdacq.set = decorator1(_descriptor_qaltdjdacq.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_qaltdjdacq.set;

Object.defineProperty(C, "P", _descriptor_qaltdjdacq);

console.assert(C.p === "a");

console.log(C[Symbol.metadata]);