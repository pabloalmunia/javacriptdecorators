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

const _descriptor_1vg4tfq4gp = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1vg4tfq4gp.get = decorator2(_descriptor_1vg4tfq4gp.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_1vg4tfq4gp.get;

Object.defineProperty(C.prototype, "p", _descriptor_1vg4tfq4gp);

const _descriptor_p9ju4u5c4t8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_p9ju4u5c4t8.get = decorator1(_descriptor_p9ju4u5c4t8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_p9ju4u5c4t8.get;

Object.defineProperty(C.prototype, "p", _descriptor_p9ju4u5c4t8);

const a = new C();

console.assert(a.p === "b");