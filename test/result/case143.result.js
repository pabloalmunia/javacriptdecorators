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

const _symbol_p5odh998n6g = Symbol();

class C {
  static _temp_d4mdtrt6r() {
    return 1;
  }
  static [_symbol_p5odh998n6g] = decorator1(C._temp_d4mdtrt6r, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_p5odh998n6g]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_d4mdtrt6r;
  static [_symbol_p5odh998n6g] = decorator2(C[_symbol_p5odh998n6g], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_p5odh998n6g]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_p5odh998n6g];
  static get #p() {
    return C[_symbol_p5odh998n6g].bind(this)();
  }
  static [_symbol_p5odh998n6g]() {
    return C[_symbol_p5odh998n6g].bind(this);
  }
  static check() {
    return C.#p;
  }
}

delete C._temp_d4mdtrt6r;

console.assert(C.check() === 6);