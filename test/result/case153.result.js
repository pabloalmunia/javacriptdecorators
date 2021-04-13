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

const _symbol_g01kr8oojpo = Symbol();

class C {
  static _temp_0o19ku1gjn(v) {
    C.p = v;
  }
  static [_symbol_g01kr8oojpo] = decorator1(C._temp_0o19ku1gjn, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_g01kr8oojpo]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_0o19ku1gjn;
  static [_symbol_g01kr8oojpo] = decorator2(C[_symbol_g01kr8oojpo], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_g01kr8oojpo]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_g01kr8oojpo];
  static set #p(v) {
    return C[_symbol_g01kr8oojpo].bind(this)(v);
  }
  static [_symbol_g01kr8oojpo]() {
    return C[_symbol_g01kr8oojpo].bind(this);
  }
  static check(v) {
    this.#p = v;
  }
}

delete C._temp_0o19ku1gjn;

C.check(10);

console.assert(C.p === 60);