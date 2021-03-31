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

const _symbol_i35phreo1vo = Symbol();

class C {
  _temp_idhnj2bq818() {}
  static [_symbol_i35phreo1vo] = decorator(C.prototype._temp_idhnj2bq818, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_i35phreo1vo]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_idhnj2bq818;
  #m = C[_symbol_i35phreo1vo];
  [_symbol_i35phreo1vo]() {
    return this.#m;
  }
  checker() {
    return this.#m.extra;
  }
}

delete C.prototype._temp_idhnj2bq818;

console.log(new C().checker());