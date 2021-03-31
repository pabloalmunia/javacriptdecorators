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

let _initializer_8stad1nmrbg;

let _initializer_4mecqomc3hg;

let _initializer_gtfkvivi5bg;

let _initializer_5269m54ui7o;

class C {
  p = _initializer_4mecqomc3hg(_initializer_8stad1nmrbg(10));
  f = _initializer_5269m54ui7o(_initializer_gtfkvivi5bg(20));
}

_initializer_5269m54ui7o = meta("d", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_gtfkvivi5bg = meta("c", 3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "f")
}) ?? (v => v);

_initializer_4mecqomc3hg = meta("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

_initializer_8stad1nmrbg = meta("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);