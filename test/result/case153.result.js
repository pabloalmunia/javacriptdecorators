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

const _symbol_t8non5fmqog = Symbol();

class C {
  static _temp_q6e2ntfr07g(v) {
    C.p = v;
  }
  static [_symbol_t8non5fmqog] = decorator1(C._temp_q6e2ntfr07g, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_t8non5fmqog]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_q6e2ntfr07g;
  static [_symbol_t8non5fmqog] = decorator2(C[_symbol_t8non5fmqog], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_t8non5fmqog]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_t8non5fmqog];
  static set #p(v) {
    return C[_symbol_t8non5fmqog].bind(this)(v);
  }
  static [_symbol_t8non5fmqog]() {
    return C[_symbol_t8non5fmqog].bind(this);
  }
  static check(v) {
    this.#p = v;
  }
}

delete C._temp_q6e2ntfr07g;

C.check(10);

console.assert(C.p === 60);