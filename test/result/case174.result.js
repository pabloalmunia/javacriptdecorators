function double(value, context) {
  return function(v) {
    return value.call(this, v * 2);
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

const _C_G_descriptor_1pbqv8 = Object.getOwnPropertyDescriptor(C.prototype, G);

_C_G_descriptor_1pbqv8.set = double(_C_G_descriptor_1pbqv8.set, {
  kind: "setter",
  name: G,
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, G)
}) ?? _C_G_descriptor_1pbqv8.set;

Object.defineProperty(C.prototype, G, _C_G_descriptor_1pbqv8);

const c = new C();

console.assert(c[P] === 10, "c[P] === 10");

console.assert(c[M]() === 10, "c[M]() === 10");

c[G] = 30;

console.assert(c[G] === 60, "c[G] === 60");

console.assert(c[P] === 60, "c[P] === 60");