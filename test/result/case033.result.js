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

const _descriptor_1q5pbi54ib8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1q5pbi54ib8.set = decorator1(_descriptor_1q5pbi54ib8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_1q5pbi54ib8.set;

Object.defineProperty(C.prototype, "p", _descriptor_1q5pbi54ib8);

const _descriptor_481veu32gs = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_481veu32gs.set = decorator2(_descriptor_481veu32gs.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_481veu32gs.set;

Object.defineProperty(C.prototype, "p", _descriptor_481veu32gs);

const a = new C();