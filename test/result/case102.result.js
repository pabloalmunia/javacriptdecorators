function decorator(value, context) {
  return function() {
    return "b";
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

const _symbol_f3p5dtrub5g = Symbol();

class C {
  _temp_0a9e0ekan6() {
    return "a";
  }
  static [_symbol_f3p5dtrub5g] = decorator(C.prototype._temp_0a9e0ekan6, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_f3p5dtrub5g]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_0a9e0ekan6;
  get #p() {
    return C[_symbol_f3p5dtrub5g].bind(this)();
  }
  [_symbol_f3p5dtrub5g]() {
    return C[_symbol_f3p5dtrub5g].bind(this);
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._temp_0a9e0ekan6;

const a = new C();

console.assert(a.check() === "b");