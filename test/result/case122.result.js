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

let _initializer_o550h83imi8;

const _symbol_rfetsqkiar = Symbol();

const _symbol_9anc8ac54t8 = Symbol();

class A {
  #p = _initializer_o550h83imi8(2);
  [_symbol_rfetsqkiar]() {
    return this.#p;
  }
  [_symbol_9anc8ac54t8](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_o550h83imi8 = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A.prototype[_symbol_rfetsqkiar],
    set: A.prototype[_symbol_9anc8ac54t8]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A.prototype, "#p")
}) ?? (v => v);

console.assert(new A().check() === 200);