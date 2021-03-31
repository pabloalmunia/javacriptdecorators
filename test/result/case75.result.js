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

const _descriptor_9f4gk739v28 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_9f4gk739v28.set = meta("d", 4)(_descriptor_9f4gk739v28.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_9f4gk739v28.set;

Object.defineProperty(C, "P", _descriptor_9f4gk739v28);

const _descriptor_ekdfmdkb9to = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_ekdfmdkb9to.set = meta("c", 3)(_descriptor_ekdfmdkb9to.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_ekdfmdkb9to.set;

Object.defineProperty(C, "P", _descriptor_ekdfmdkb9to);

const _descriptor_0cs0o01c4l = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_0cs0o01c4l.get = meta("b", 2)(_descriptor_0cs0o01c4l.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_0cs0o01c4l.get;

Object.defineProperty(C, "P", _descriptor_0cs0o01c4l);

const _descriptor_tljif8obls8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_tljif8obls8.get = meta("a", 1)(_descriptor_tljif8obls8.get, {
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_tljif8obls8.get;

Object.defineProperty(C, "P", _descriptor_tljif8obls8);

console.assert(C.P === "a");

console.log(C[Symbol.metadata]);