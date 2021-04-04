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

const _symbol_fp1578ri65g = Symbol();

class C {
  static _temp_f3gkcuai3b() {}
  static [_symbol_fp1578ri65g] = decorator1(C._temp_f3gkcuai3b, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_fp1578ri65g]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_f3gkcuai3b;
  static [_symbol_fp1578ri65g] = decorator2(C[_symbol_fp1578ri65g], {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_fp1578ri65g]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C[_symbol_fp1578ri65g];
  static #M = C[_symbol_fp1578ri65g];
  static [_symbol_fp1578ri65g]() {
    return this.#M;
  }
  static check() {
    return C.#M;
  }
}

delete C._temp_f3gkcuai3b;

console.log(C.check().one);

console.log(C.check().two);