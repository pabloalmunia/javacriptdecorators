function meta(key, value) {
  return function decorator1(_, context) {
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

let _initializer_icm12s8i1p8;

let _initializer_v7kv3d9i4bo;

let _initializer_g415nlsf3i8;

let _initializer_k4i0vcsv6c;

class C {
  p = _initializer_v7kv3d9i4bo(_initializer_icm12s8i1p8(10));
  f = _initializer_k4i0vcsv6c(_initializer_g415nlsf3i8(20));
}

_initializer_k4i0vcsv6c = meta("d", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_g415nlsf3i8 = meta("c", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_v7kv3d9i4bo = meta("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

_initializer_icm12s8i1p8 = meta("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);