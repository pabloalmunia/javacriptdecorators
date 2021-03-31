function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
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

const _symbol_5cplvorl13g = Symbol();

class C {
  _temp_468tblb099g() {}
  static [_symbol_5cplvorl13g] = decorator(C.prototype._temp_468tblb099g, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_5cplvorl13g]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_468tblb099g;
  #m = C[_symbol_5cplvorl13g];
  [_symbol_5cplvorl13g]() {
    return this.#m;
  }
  checker() {
    return this.#m.extra;
  }
}

delete C.prototype._temp_468tblb099g;

console.log(new C().checker());