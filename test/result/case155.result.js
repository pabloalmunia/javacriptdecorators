function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
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

const _symbol_u425ag5bgs8 = Symbol();

const _symbol_ifap7fib1t8 = Symbol();

class C {
  static _temp_nnq6e146j0g(v) {}
  static [_symbol_u425ag5bgs8] = meta("a", 1)(C._temp_nnq6e146j0g, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_u425ag5bgs8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_nnq6e146j0g;
  static [_symbol_u425ag5bgs8] = meta("b", 2)(C[_symbol_u425ag5bgs8], {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_u425ag5bgs8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_u425ag5bgs8];
  static set #p(v) {
    return C[_symbol_u425ag5bgs8].bind(this)(v);
  }
  static [_symbol_u425ag5bgs8]() {
    return C[_symbol_u425ag5bgs8].bind(this);
  }
  static _temp_qtevjsno6jo() {}
  static [_symbol_ifap7fib1t8] = meta("c", 3)(C._temp_qtevjsno6jo, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_ifap7fib1t8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_qtevjsno6jo;
  static [_symbol_ifap7fib1t8] = meta("d", 3)(C[_symbol_ifap7fib1t8], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_ifap7fib1t8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_ifap7fib1t8];
  static get #p() {
    return C[_symbol_ifap7fib1t8].bind(this)();
  }
  static [_symbol_ifap7fib1t8]() {
    return C[_symbol_ifap7fib1t8].bind(this);
  }
}

delete C._temp_qtevjsno6jo;

delete C._temp_nnq6e146j0g;

console.log(C[Symbol.metadata]);