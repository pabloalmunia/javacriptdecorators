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

let _C_P_initializer_oq0ho8;

class C {
  [P] = _C_P_initializer_oq0ho8.call(this, 10);
  [M]() {
    return this[P];
  }
  get [G]() {
    return this[P];
  }
  set [G](v) {
    return this[P] = v;
  }
}

_C_P_initializer_oq0ho8 = double(undefined, {
  kind: "field",
  name: P,
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, P)
}) ?? (v => v);

const c = new C();

console.assert(c[P] === 20, "c[P] === 20");

console.assert(c[M]() === 20, "c[M]() === 20");

c[G] = 30;

console.assert(c[G] === 30, "c[G] === 30");

console.assert(c[P] === 30, "c[P] === 30");