function decorator1(value, context) {
  return function(v) {
    return value.call(this, v * 2);
  };
}

function decorator2(value, context) {
  return function(v) {
    return value.call(this, v * 3);
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

const _symbol_gleprq3ikho = Symbol();

class C {
  _temp_tl5iaptes58(v) {
    return this.p = v;
  }
  static [_symbol_gleprq3ikho] = decorator1(C.prototype._temp_tl5iaptes58, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_gleprq3ikho]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_tl5iaptes58;
  static [_symbol_gleprq3ikho] = decorator2(C[_symbol_gleprq3ikho], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_gleprq3ikho]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_gleprq3ikho];
  set #p(v) {
    return C[_symbol_gleprq3ikho].bind(this)(v);
  }
  [_symbol_gleprq3ikho]() {
    return C[_symbol_gleprq3ikho].bind(this);
  }
  check(v) {
    this.#p = v;
  }
}

delete C.prototype._temp_tl5iaptes58;

const a = new C();

a.check(10);

console.assert(a.p === 60);