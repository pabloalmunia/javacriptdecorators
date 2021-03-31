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

const _descriptor_op8r9s9ue98 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_op8r9s9ue98.get = meta("c", 3)(_descriptor_op8r9s9ue98.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_op8r9s9ue98.get;

Object.defineProperty(C.prototype, "p", _descriptor_op8r9s9ue98);

const _descriptor_kr6spntsu9 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_kr6spntsu9.set = meta("b", 2)(_descriptor_kr6spntsu9.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_kr6spntsu9.set;

Object.defineProperty(C.prototype, "p", _descriptor_kr6spntsu9);

const _descriptor_301hsjv6jho = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_301hsjv6jho.set = meta("a", 1)(_descriptor_301hsjv6jho.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_301hsjv6jho.set;

Object.defineProperty(C.prototype, "p", _descriptor_301hsjv6jho);

C = meta("className", "C")(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

const _initializer_q48cuf7aqv = meta("static_property", 10)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_q48cuf7aqv(C.P);

console.log(C.prototype[Symbol.metadata]);