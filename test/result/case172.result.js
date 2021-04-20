function double(value, context) {
  return function(v) {
    return value.call(this, v) * 2;
  };
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
  [P] = 10;
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

C.prototype[M] = double(C.prototype[M], {
  kind: "method",
  name: M,
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, M)
}) ?? C.prototype[M];

const c = new C();

console.assert(c[P] === 10, "c[P] === 10");

console.assert(c[M]() === 20, "c[M]() === 20");

c[G] = 30;

console.assert(c[G] === 30, "c[G] === 30");

console.assert(c[P] === 30, "c[P] === 30");