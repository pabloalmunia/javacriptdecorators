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

class C {
  static P = 10;
  static F = 20;
}

const _initializer_trg810sg87o = meta("d", 3)(undefined, {
  kind: "field",
  name: "F",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "F")
}) ?? (v => v);

C.F = _initializer_trg810sg87o(C.F);

const _initializer_k62g7lfab68 = meta("c", 3)(undefined, {
  kind: "field",
  name: "F",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "F")
}) ?? (v => v);

C.F = _initializer_k62g7lfab68(C.F);

const _initializer_1qmv85rrsv = meta("b", 2)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_1qmv85rrsv(C.P);

const _initializer_8nevtcs0pjo = meta("a", 1)(undefined, {
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? (v => v);

C.P = _initializer_8nevtcs0pjo(C.P);

console.log(C[Symbol.metadata]);