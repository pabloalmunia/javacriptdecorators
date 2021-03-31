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

const _symbol_89iinsnd7po = Symbol();

class C {
  _temp_d2apkpb9dd() {}
  static [_symbol_89iinsnd7po] = decorator("test1")(C.prototype._temp_d2apkpb9dd, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_89iinsnd7po]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_d2apkpb9dd;
  static [_symbol_89iinsnd7po] = decorator("test2")(C[_symbol_89iinsnd7po], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_89iinsnd7po]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C[_symbol_89iinsnd7po];
  #m = C[_symbol_89iinsnd7po];
  [_symbol_89iinsnd7po]() {
    return this.#m;
  }
}

delete C.prototype._temp_d2apkpb9dd;

console.log(C.prototype[Symbol.metadata]);