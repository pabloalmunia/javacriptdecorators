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

const _symbol_ig3n3gs18lg = Symbol();

class C {
  static _temp_8f7ipd2ai98() {
    return "a";
  }
  static [_symbol_ig3n3gs18lg] = decorator1(C._temp_8f7ipd2ai98, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_ig3n3gs18lg]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C._temp_8f7ipd2ai98;
  static [_symbol_ig3n3gs18lg] = decorator2(C[_symbol_ig3n3gs18lg], {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_ig3n3gs18lg]
    },
    defineMetadata: __DefineMetadata(C, "#P")
  }) ?? C[_symbol_ig3n3gs18lg];
  static get #P() {
    return C[_symbol_ig3n3gs18lg].bind(this)();
  }
  static [_symbol_ig3n3gs18lg]() {
    return C[_symbol_ig3n3gs18lg].bind(this);
  }
}

delete C._temp_8f7ipd2ai98;

console.log(C[Symbol.metadata]);