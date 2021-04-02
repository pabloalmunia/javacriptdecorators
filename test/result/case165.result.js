function meta(key, value) {
  return function decorator1(_, context) {
    context.defineMetadata(key, value);
  };
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

const _symbol_s4qtpm5pggo = Symbol();

const _symbol_87mve3q52lg = Symbol();

const _symbol_s9jdhnjnq68 = Symbol();

const _symbol_rpte6bfs3gg = Symbol();

class C {
  static #p = 10;
  static [_symbol_s4qtpm5pggo]() {
    return C.#p;
  }
  static [_symbol_87mve3q52lg](v) {
    C.#p = v;
  }
  static #f = 20;
  static [_symbol_s9jdhnjnq68]() {
    return C.#f;
  }
  static [_symbol_rpte6bfs3gg](v) {
    C.#f = v;
  }
}

const _initializer_puntba1jlko = meta("d", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_symbol_s9jdhnjnq68],
    set: C[_symbol_rpte6bfs3gg]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#f")
}) ?? (v => v);

C[_symbol_rpte6bfs3gg](_initializer_puntba1jlko(C[_symbol_s9jdhnjnq68]()));

const _initializer_on6erst1i1o = meta("c", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C[_symbol_s9jdhnjnq68],
    set: C[_symbol_rpte6bfs3gg]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#f")
}) ?? (v => v);

C[_symbol_rpte6bfs3gg](_initializer_on6erst1i1o(C[_symbol_s9jdhnjnq68]()));

const _initializer_lbh136b1clo = meta("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_s4qtpm5pggo],
    set: C[_symbol_87mve3q52lg]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_87mve3q52lg](_initializer_lbh136b1clo(C[_symbol_s4qtpm5pggo]()));

const _initializer_4uvme3me75 = meta("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C[_symbol_s4qtpm5pggo],
    set: C[_symbol_87mve3q52lg]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) ?? (v => v);

C[_symbol_87mve3q52lg](_initializer_4uvme3me75(C[_symbol_s4qtpm5pggo]()));

console.log(C[Symbol.metadata]);