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

const _symbol_n25tjp2m08 = Symbol();

const _symbol_2q0gkhsonqg = Symbol();

let _initializer_2v1t6ssilug;

class A {
  #p = _initializer_2v1t6ssilug.call(this, 2);
  [_symbol_n25tjp2m08]() {
    return this.#p;
  }
  [_symbol_2q0gkhsonqg](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_2v1t6ssilug = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A.prototype[_symbol_n25tjp2m08],
    set: A.prototype[_symbol_2q0gkhsonqg]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A.prototype, "#p")
}) ?? (v => v);

console.assert(new A().check() === 200);