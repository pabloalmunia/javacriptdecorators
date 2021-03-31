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

const _descriptor_argiet8rgp8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_argiet8rgp8.get = decorator2(_descriptor_argiet8rgp8.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_argiet8rgp8.get;

Object.defineProperty(C, "P", _descriptor_argiet8rgp8);

const _descriptor_bu1sqirlna8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_bu1sqirlna8.get = decorator1(_descriptor_bu1sqirlna8.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_bu1sqirlna8.get;

Object.defineProperty(C, "P", _descriptor_bu1sqirlna8);

console.assert(C.p === "a");