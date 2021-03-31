function decorator(value) {
  return function(methodº, context) {
    context.defineMetadata("one", value);
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

const _symbol_84tvenrc7ao = Symbol();

class C {
  _temp_lpol5peo3kg() {}
  static [_symbol_84tvenrc7ao] = decorator("test1")(C.prototype._temp_lpol5peo3kg, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_84tvenrc7ao]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_lpol5peo3kg;
  static [_symbol_84tvenrc7ao] = decorator("test2")(C[_symbol_84tvenrc7ao], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_84tvenrc7ao]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C[_symbol_84tvenrc7ao];
  #m = C[_symbol_84tvenrc7ao];
  [_symbol_84tvenrc7ao]() {
    return this.#m;
  }
}

delete C.prototype._temp_lpol5peo3kg;

console.log(C.prototype[Symbol.metadata]);