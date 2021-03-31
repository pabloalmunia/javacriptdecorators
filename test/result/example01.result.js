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

const _descriptor_gdshglabdd = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_gdshglabdd.get = meta("c", 3)(_descriptor_gdshglabdd.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_gdshglabdd.get;

Object.defineProperty(C.prototype, "p", _descriptor_gdshglabdd);

const _descriptor_v7rm6m05ksg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_v7rm6m05ksg.set = meta("b", 2)(_descriptor_v7rm6m05ksg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_v7rm6m05ksg.set;

Object.defineProperty(C.prototype, "p", _descriptor_v7rm6m05ksg);

const _descriptor_a0lpkum0dn = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_a0lpkum0dn.set = meta("a", 1)(_descriptor_a0lpkum0dn.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_a0lpkum0dn.set;

Object.defineProperty(C.prototype, "p", _descriptor_a0lpkum0dn);

C = meta("className", "C")(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

const _initializer_0nf00nit958 = meta("static_property", 10)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_0nf00nit958(C.P);

console.log(C.prototype[Symbol.metadata]);