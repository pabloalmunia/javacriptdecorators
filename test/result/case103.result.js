function decorator1(value, context) {
  return function() {
    return value.call(this) * 2;
  };
}

function decorator2(value, context) {
  return function() {
    return value.call(this) * 3;
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

const _symbol_osj9ckhpj7 = Symbol();

class C {
  _temp_9h0vgakk0l() {
    return 1;
  }
  static [_symbol_osj9ckhpj7] = decorator1(C.prototype._temp_9h0vgakk0l, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_osj9ckhpj7]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_9h0vgakk0l;
  static [_symbol_osj9ckhpj7] = decorator2(C[_symbol_osj9ckhpj7], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_osj9ckhpj7]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_osj9ckhpj7];
  get #p() {
    return C[_symbol_osj9ckhpj7].bind(this)();
  }
  [_symbol_osj9ckhpj7]() {
    return C[_symbol_osj9ckhpj7].bind(this);
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._temp_9h0vgakk0l;

const a = new C();

console.assert(a.check() === 6);