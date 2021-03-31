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
  set p(v) {}
}

const _descriptor_5g3491b3dbg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5g3491b3dbg.set = decorator2(_descriptor_5g3491b3dbg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_5g3491b3dbg.set;

Object.defineProperty(C.prototype, "p", _descriptor_5g3491b3dbg);

const _descriptor_306rgk823t8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_306rgk823t8.set = decorator1(_descriptor_306rgk823t8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_306rgk823t8.set;

Object.defineProperty(C.prototype, "p", _descriptor_306rgk823t8);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);