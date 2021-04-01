function decorator(value, context) {
  console.log("value", value);
  console.log(context, context);
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

let _initializer_gmoqdr10oko;

const _symbol_j229ickv968 = Symbol();

const _symbol_dcii92jlvjg = Symbol();

class A {
  #p = _initializer_gmoqdr10oko(2);
  [_symbol_j229ickv968]() {
    return this.#p;
  }
  [_symbol_dcii92jlvjg](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_gmoqdr10oko = decorator(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: A.prototype[_symbol_j229ickv968],
    set: A.prototype[_symbol_dcii92jlvjg]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(A.prototype, "#p")
}) ?? (v => v);

console.assert(new A().check() === 2);