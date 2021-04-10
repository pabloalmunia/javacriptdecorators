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

let _initializer_1eqs1bsc69g;

let _initializer_nudtf3fhnb8;

let _initializer_jgdhecf919;

let _initializer_6hcrqbnu7mo;

class C {
  p = _initializer_nudtf3fhnb8.call(this, _initializer_1eqs1bsc69g.call(this, 10));
  f = _initializer_6hcrqbnu7mo.call(this, _initializer_jgdhecf919.call(this, 20));
}

_initializer_6hcrqbnu7mo = meta("d", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_jgdhecf919 = meta("c", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_nudtf3fhnb8 = meta("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

_initializer_1eqs1bsc69g = meta("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);