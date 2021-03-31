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

const _symbol_kdbs0sbtln8 = Symbol();

class C {
  _temp_3122idu1vl8() {}
  static [_symbol_kdbs0sbtln8] = decorator1(C.prototype._temp_3122idu1vl8, {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_kdbs0sbtln8]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C.prototype._temp_3122idu1vl8;
  static [_symbol_kdbs0sbtln8] = decorator2(C[_symbol_kdbs0sbtln8], {
    kind: "method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_kdbs0sbtln8]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }) ?? C[_symbol_kdbs0sbtln8];
  #m = C[_symbol_kdbs0sbtln8];
  [_symbol_kdbs0sbtln8]() {
    return this.#m;
  }
}

delete C.prototype._temp_3122idu1vl8;

console.log(C.prototype[Symbol.metadata]);