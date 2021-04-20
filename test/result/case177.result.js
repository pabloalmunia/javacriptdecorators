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

const _C_G_descriptor_d52gqg = Object.getOwnPropertyDescriptor(C, G);

_C_G_descriptor_d52gqg.get = double(_C_G_descriptor_d52gqg.get, {
  kind: "getter",
  name: G,
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, G)
}) ?? _C_G_descriptor_d52gqg.get;

Object.defineProperty(C, G, _C_G_descriptor_d52gqg);

console.assert(C[P] === 10, "C[P] === 10");

console.assert(C[M]() === 10, "C[M]() === 10");

C[G] = 30;

console.assert(C[G] === 60, "C[G] === 60");

console.assert(C[P] === 30, "C[P] === 30");