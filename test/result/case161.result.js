function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
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

const _symbol_2lgunr7hq08 = Symbol();

const _symbol_l9uk3fle77 = Symbol();

class A {
  static #p = 2;
  static [_symbol_2lgunr7hq08]() {
    return A.#p;
  }
  static [_symbol_l9uk3fle77](v) {
    A.#p = v;
  }
  static check() {
    return A.#p;
  }
}

const _initializer_vpoh90mrobg = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A[_symbol_2lgunr7hq08],
    set: A[_symbol_l9uk3fle77]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A, "#p")
}) ?? (v => v);

A[_symbol_l9uk3fle77](_initializer_vpoh90mrobg(A[_symbol_2lgunr7hq08]()));

console.assert(A.check() === 2);