function logger(value, context) {
  if (context.kind === "method") {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

function duplicate(value, context) {
  if (context.kind === "method") {
    return function(v) {
      return value.call(this, v * 2);
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

const _symbol_ncd0qsb5rf = Symbol();

class C {
  #multi = 2;
  _temp_43plc48kdno(v) {
    return v * this.#multi;
  }
  static [_symbol_ncd0qsb5rf] = logger(C.prototype._temp_43plc48kdno, {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_ncd0qsb5rf]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#double")
  }) ?? C.prototype._temp_43plc48kdno;
  static [_symbol_ncd0qsb5rf] = duplicate(C[_symbol_ncd0qsb5rf], {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_ncd0qsb5rf]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#double")
  }) ?? C[_symbol_ncd0qsb5rf];
  #double = C[_symbol_ncd0qsb5rf];
  [_symbol_ncd0qsb5rf]() {
    return this.#double;
  }
  checker(v) {
    return this.#double(v);
  }
}

delete C.prototype._temp_43plc48kdno;

console.assert(new C().checker(10) === 40);