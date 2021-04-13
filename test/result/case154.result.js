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

const _symbol_7jbcn8u3j0o = Symbol();

class C {
  static _temp_bnhrarneofo(v) {}
  static [_symbol_7jbcn8u3j0o] = decorator1(C._temp_bnhrarneofo, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_7jbcn8u3j0o]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_bnhrarneofo;
  static [_symbol_7jbcn8u3j0o] = decorator2(C[_symbol_7jbcn8u3j0o], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_7jbcn8u3j0o]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_7jbcn8u3j0o];
  static set #p(v) {
    return C[_symbol_7jbcn8u3j0o].bind(this)(v);
  }
  static [_symbol_7jbcn8u3j0o]() {
    return C[_symbol_7jbcn8u3j0o].bind(this);
  }
}

delete C._temp_bnhrarneofo;

const a = new C();

console.log(C[Symbol.metadata]);