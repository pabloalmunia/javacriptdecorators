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

let _initializer_4713tmq884g;

const _symbol_1gd9s6avpc8 = Symbol();

const _symbol_81uactrcgko = Symbol();

let _initializer_qggt6qpuuog;

class C {
  #p = _initializer_qggt6qpuuog(_initializer_4713tmq884g(10));
  [_symbol_1gd9s6avpc8]() {
    return this.#p;
  }
  [_symbol_81uactrcgko](v) {
    this.#p = v;
  }
}

_initializer_qggt6qpuuog = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_1gd9s6avpc8],
    set: C.prototype[_symbol_81uactrcgko]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_4713tmq884g = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_1gd9s6avpc8],
    set: C.prototype[_symbol_81uactrcgko]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

const a = new C();

console.log(C.prototype[Symbol.metadata]);