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

const _symbol_5behijrg6f = Symbol();

class C {
  _temp_1uc362d4p9g() {}
  static [_symbol_5behijrg6f] = decorator1(C.prototype._temp_1uc362d4p9g, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_5behijrg6f]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_1uc362d4p9g;
  static [_symbol_5behijrg6f] = decorator2(C[_symbol_5behijrg6f], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_5behijrg6f]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C[_symbol_5behijrg6f];
  #m = C[_symbol_5behijrg6f];
  [_symbol_5behijrg6f]() {
    return this.#m;
  }
}

delete C.prototype._temp_1uc362d4p9g;

console.log(C.prototype[Symbol.metadata]);