function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
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

const _symbol_vhu364u7jpg = Symbol();

const _symbol_ba6o1o6pj6 = Symbol();

class C {
  static #p = 10;
  static [_symbol_vhu364u7jpg]() {
    return C.#p;
  }
  static [_symbol_ba6o1o6pj6](v) {
    C.#p = v;
  }
}

const _initializer_iiufttb3v8o = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_vhu364u7jpg],
    set: C[_symbol_ba6o1o6pj6]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_ba6o1o6pj6](_initializer_iiufttb3v8o(C[_symbol_vhu364u7jpg]()));

const _initializer_mi0f897255o = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_vhu364u7jpg],
    set: C[_symbol_ba6o1o6pj6]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_ba6o1o6pj6](_initializer_mi0f897255o(C[_symbol_vhu364u7jpg]()));

console.log(C[Symbol.metadata]);