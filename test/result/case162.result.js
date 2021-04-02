function decorator(value, context) {
  return v => v * 100;
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

const _symbol_spjra34bd5o = Symbol();

const _symbol_f71hjrpc48o = Symbol();

class A {
  static #p = 2;
  static [_symbol_spjra34bd5o]() {
    return A.#p;
  }
  static [_symbol_f71hjrpc48o](v) {
    A.#p = v;
  }
  static check() {
    return A.#p;
  }
}

const _initializer_mc1esmac3bg = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A[_symbol_spjra34bd5o],
    set: A[_symbol_f71hjrpc48o]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A, "#p")
}) ?? (v => v);

A[_symbol_f71hjrpc48o](_initializer_mc1esmac3bg(A[_symbol_spjra34bd5o]()));

console.assert(A.check() === 200);