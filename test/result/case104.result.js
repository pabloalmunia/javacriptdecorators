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

const _symbol_5mis2t35608 = Symbol();

class C {
  _temp_tch7mhs0la8() {
    return "a";
  }
  static [_symbol_5mis2t35608] = decorator1(C.prototype._temp_tch7mhs0la8, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_5mis2t35608]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_tch7mhs0la8;
  static [_symbol_5mis2t35608] = decorator2(C[_symbol_5mis2t35608], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_5mis2t35608]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_5mis2t35608];
  get #p() {
    return C[_symbol_5mis2t35608].bind(this)();
  }
  [_symbol_5mis2t35608]() {
    return C[_symbol_5mis2t35608].bind(this);
  }
}

delete C.prototype._temp_tch7mhs0la8;

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);