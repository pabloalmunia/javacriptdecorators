function decorator1(value, context) {
  return v => v * 100;
}

function decorator2(value, context) {
  return v => v * 200;
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

const _symbol_bkpju6oqlrg = Symbol();

const _symbol_149mtccdl68 = Symbol();

class C {
  static #p = 1;
  static [_symbol_bkpju6oqlrg]() {
    return C.#p;
  }
  static [_symbol_149mtccdl68](v) {
    C.#p = v;
  }
  static check() {
    return C.#p;
  }
}

const _initializer_iuvb8ueud5 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_bkpju6oqlrg],
    set: C[_symbol_149mtccdl68]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_149mtccdl68](_initializer_iuvb8ueud5(C[_symbol_bkpju6oqlrg]()));

const _initializer_k91bnr65g2g = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_bkpju6oqlrg],
    set: C[_symbol_149mtccdl68]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_149mtccdl68](_initializer_k91bnr65g2g(C[_symbol_bkpju6oqlrg]()));

console.assert(C.check() === 20000);