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

const _symbol_mn0llls3ep8 = Symbol();

class C {
  static _temp_v1ojfckdtm8() {
    return "a";
  }
  static [_symbol_mn0llls3ep8] = meta("a", 1)(C._temp_v1ojfckdtm8, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_mn0llls3ep8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_v1ojfckdtm8;
  static [_symbol_mn0llls3ep8] = meta("b", 2)(C[_symbol_mn0llls3ep8], {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_mn0llls3ep8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_mn0llls3ep8];
  static get #p() {
    return C[_symbol_mn0llls3ep8].bind(this)();
  }
  static [_symbol_mn0llls3ep8]() {
    return C[_symbol_mn0llls3ep8].bind(this);
  }
}

delete C._temp_v1ojfckdtm8;

console.log(C[Symbol.metadata]);