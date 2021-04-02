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

const _symbol_dj46ge8k9bg = Symbol();

class C {
  static _temp_5nre5booc4g(v) {}
  static [_symbol_dj46ge8k9bg] = decorator1(C._temp_5nre5booc4g, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_dj46ge8k9bg]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_5nre5booc4g;
  static [_symbol_dj46ge8k9bg] = decorator2(C[_symbol_dj46ge8k9bg], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_dj46ge8k9bg]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_dj46ge8k9bg];
  static set #p(v) {
    return C[_symbol_dj46ge8k9bg].bind(this)(v);
  }
  static [_symbol_dj46ge8k9bg]() {
    return C[_symbol_dj46ge8k9bg].bind(this);
  }
}

delete C._temp_5nre5booc4g;

const a = new C();

console.log(C[Symbol.metadata]);