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

const _symbol_7glafbr14do = Symbol();

class C {
  _temp_fgcqj7scld(v) {}
  static [_symbol_7glafbr14do] = decorator1(C.prototype._temp_fgcqj7scld, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_7glafbr14do]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_fgcqj7scld;
  static [_symbol_7glafbr14do] = decorator2(C[_symbol_7glafbr14do], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_7glafbr14do]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_7glafbr14do];
  set #p(v) {
    return C[_symbol_7glafbr14do].bind(this)(v);
  }
  [_symbol_7glafbr14do]() {
    return C[_symbol_7glafbr14do].bind(this);
  }
}

delete C.prototype._temp_fgcqj7scld;

const a = new C();

console.log(C.prototype[Symbol.metadata]);