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

const _symbol_lab5qp22is8 = Symbol();

const _symbol_oe25aj3lqo = Symbol();

let _initializer_1f235hdc3ig;

class A {
  #p = _initializer_1f235hdc3ig.call(this, 2);
  [_symbol_lab5qp22is8]() {
    return this.#p;
  }
  [_symbol_oe25aj3lqo](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_1f235hdc3ig = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A.prototype[_symbol_lab5qp22is8],
    set: A.prototype[_symbol_oe25aj3lqo]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A.prototype, "#p")
}) ?? (v => v);

console.assert(new A().check() === 2);