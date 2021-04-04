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
  get p() {
    return "a";
  }
}

const _descriptor_eonv4ogf958 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_eonv4ogf958.get = meta("a", 1)(_descriptor_eonv4ogf958.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_eonv4ogf958.get;

Object.defineProperty(C.prototype, "p", _descriptor_eonv4ogf958);

const _descriptor_5j24vlttc8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5j24vlttc8.get = meta("b", 2)(_descriptor_5j24vlttc8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_5j24vlttc8.get;

Object.defineProperty(C.prototype, "p", _descriptor_5j24vlttc8);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);