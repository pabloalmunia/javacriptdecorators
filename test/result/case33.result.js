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

const _descriptor_eqt7tuh5s3 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_eqt7tuh5s3.set = decorator2(_descriptor_eqt7tuh5s3.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_eqt7tuh5s3.set;

Object.defineProperty(C.prototype, "p", _descriptor_eqt7tuh5s3);

const _descriptor_8ord2nr7jto = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_8ord2nr7jto.set = decorator1(_descriptor_8ord2nr7jto.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_8ord2nr7jto.set;

Object.defineProperty(C.prototype, "p", _descriptor_8ord2nr7jto);

const a = new C();