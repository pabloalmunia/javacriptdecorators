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

const _symbol_j2n94bg45bg = Symbol();

class C {
  static _temp_ca9mif9f81g() {
    return "a";
  }
  static [_symbol_j2n94bg45bg] = decorator1(C._temp_ca9mif9f81g, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_j2n94bg45bg]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C._temp_ca9mif9f81g;
  static [_symbol_j2n94bg45bg] = decorator2(C[_symbol_j2n94bg45bg], {
    kind: "getter",
    name: "#P",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_j2n94bg45bg]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C[_symbol_j2n94bg45bg];
  static get #P() {
    return C[_symbol_j2n94bg45bg].bind(this)();
  }
  static [_symbol_j2n94bg45bg]() {
    return C[_symbol_j2n94bg45bg].bind(this);
  }
}

delete C._temp_ca9mif9f81g;

console.log(C[Symbol.metadata]);