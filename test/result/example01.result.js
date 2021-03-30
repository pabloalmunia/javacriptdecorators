function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}
function __defineMetadataGenerator(base, name) {
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
  }
}


class C {
  set p(v) {}
  get p() {}
  static P = 10;
}

const _descriptor_0rn075p9is = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_0rn075p9is.get = meta("c", 3)(_descriptor_0rn075p9is.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __defineMetadataGenerator( C.prototype, 'p')
}) ?? _descriptor_0rn075p9is.get;

Object.defineProperty(C.prototype, "p", _descriptor_0rn075p9is);

const _descriptor_5r3l5uthquo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5r3l5uthquo.set = meta("b", 2)(_descriptor_5r3l5uthquo.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __defineMetadataGenerator( C.prototype, 'p')
}) ?? _descriptor_5r3l5uthquo.set;

Object.defineProperty(C.prototype, "p", _descriptor_5r3l5uthquo);

const _descriptor_seuvomfu3p = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_seuvomfu3p.set = meta("a", 1)(_descriptor_seuvomfu3p.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __defineMetadataGenerator( C.prototype, 'p')
}) ?? _descriptor_seuvomfu3p.set;

Object.defineProperty(C.prototype, "p", _descriptor_seuvomfu3p);

C = meta("className", "C")(C, {
  kind: "class",
  name: "C",
  defineMetadata: __defineMetadataGenerator( C, 'constructor')
}) ?? C;

const _initializer_m2h6pikukj = meta("static_property", 10)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __defineMetadataGenerator( C, 'P')
}) ?? (v => v);

C.P = _initializer_m2h6pikukj(C.P);

console.log(C[Symbol.metadata]);
console.log(C.prototype[Symbol.metadata]);