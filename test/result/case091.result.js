function decorator(value, context) {
  if (context.kind === "method") {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
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

const _symbol_44p0ddko0ng = Symbol();

class C {
  #multi = 2;
  _temp_osaul1epv08(v) {
    return v * this.#multi;
  }
  static [_symbol_44p0ddko0ng] = decorator(C.prototype._temp_osaul1epv08, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_44p0ddko0ng]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_osaul1epv08;
  #m = C[_symbol_44p0ddko0ng];
  [_symbol_44p0ddko0ng]() {
    return this.#m;
  }
  check(v) {
    return this.#m(v);
  }
}

delete C.prototype._temp_osaul1epv08;

console.assert(new C().check(100) === 200);