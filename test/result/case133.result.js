function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}

function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
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

const _symbol_6b8lmn29pjo = Symbol();

class C {
  static _temp_qule1dkhcqo() {}
  static [_symbol_6b8lmn29pjo] = decorator1(C._temp_qule1dkhcqo, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_6b8lmn29pjo]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_qule1dkhcqo;
  static [_symbol_6b8lmn29pjo] = decorator2(C[_symbol_6b8lmn29pjo], {
    kind: "method",
    name: "#M",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_6b8lmn29pjo]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C[_symbol_6b8lmn29pjo];
  static #M = C[_symbol_6b8lmn29pjo];
  static [_symbol_6b8lmn29pjo]() {
    return this.#M;
  }
  static check() {
    return C.#M;
  }
}

delete C._temp_qule1dkhcqo;

console.log(C.check().one);

console.log(C.check().two);