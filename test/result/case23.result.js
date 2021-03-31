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
  get p() {
    return "a";
  }
}

const _descriptor_nrvvjfdsef = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_nrvvjfdsef.get = decorator2(_descriptor_nrvvjfdsef.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_nrvvjfdsef.get;

Object.defineProperty(C.prototype, "p", _descriptor_nrvvjfdsef);

const _descriptor_3i0jp355ou = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_3i0jp355ou.get = decorator1(_descriptor_3i0jp355ou.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_3i0jp355ou.get;

Object.defineProperty(C.prototype, "p", _descriptor_3i0jp355ou);

const a = new C();

console.assert(a.p === "b");