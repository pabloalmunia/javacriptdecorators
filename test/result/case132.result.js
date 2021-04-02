function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
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

const _symbol_goe3lv2c0no = Symbol();

class C {
  static _temp_dni1jh7rhl8() {}
  static [_symbol_goe3lv2c0no] = decorator(C._temp_dni1jh7rhl8, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_goe3lv2c0no]
    },
    defineMetadata: __DefineMetadata(C, "#M")
  }) ?? C._temp_dni1jh7rhl8;
  static #M = C[_symbol_goe3lv2c0no];
  static [_symbol_goe3lv2c0no]() {
    return this.#M;
  }
  static check() {
    return C.#M;
  }
}

delete C._temp_dni1jh7rhl8;

console.log(C.check().extra);