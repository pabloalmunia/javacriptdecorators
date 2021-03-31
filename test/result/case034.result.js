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

const _descriptor_k1k1c6kfo0o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_k1k1c6kfo0o.set = decorator2(_descriptor_k1k1c6kfo0o.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_k1k1c6kfo0o.set;

Object.defineProperty(C.prototype, "p", _descriptor_k1k1c6kfo0o);

const _descriptor_kc0d6o0rkag = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_kc0d6o0rkag.set = decorator1(_descriptor_kc0d6o0rkag.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_kc0d6o0rkag.set;

Object.defineProperty(C.prototype, "p", _descriptor_kc0d6o0rkag);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);