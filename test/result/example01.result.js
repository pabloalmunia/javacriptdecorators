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
  set p(v) {}
  get p() {}
  static P = 10;
}

const _descriptor_q48ocj4tke8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_q48ocj4tke8.get = meta("c", 3)(_descriptor_q48ocj4tke8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_q48ocj4tke8.get;

Object.defineProperty(C.prototype, "p", _descriptor_q48ocj4tke8);

const _descriptor_beb23amtoe = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_beb23amtoe.set = meta("a", 1)(_descriptor_beb23amtoe.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_beb23amtoe.set;

Object.defineProperty(C.prototype, "p", _descriptor_beb23amtoe);

const _descriptor_lj4gr40rl6o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_lj4gr40rl6o.set = meta("b", 2)(_descriptor_lj4gr40rl6o.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_lj4gr40rl6o.set;

Object.defineProperty(C.prototype, "p", _descriptor_lj4gr40rl6o);

C = meta("className", "C")(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

const _initializer_48ooladbjog = meta("static_property", 10)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_48ooladbjog.call(C, C.P);

console.log(C.prototype[Symbol.metadata]);