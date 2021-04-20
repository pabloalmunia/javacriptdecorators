function double(value, context) {
  return v => v * 2;
}

const P = Symbol();

const M = Symbol();

const G = Symbol();

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
  static [P] = 10;
  static [M]() {
    return this[P];
  }
  static get [G]() {
    return this[P];
  }
  static set [G](v) {
    return this[P] = v;
  }
}

const _C_P_initializer_j37b0o = double(undefined, {
  kind: "field",
  name: P,
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, P)
}) ?? (v => v);

C[P] = _C_P_initializer_j37b0o.call(C, C[P]);

console.assert(C[P] === 20, "C[P] === 20");

console.assert(C[M]() === 20, "C[M]() === 20");

C[G] = 30;

console.assert(C[G] === 30, "C[G] === 30");

console.assert(C[P] === 30, "C[P] === 30");