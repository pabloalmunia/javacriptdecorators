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

const _symbol_em7ot5go9ug = Symbol();

class C {
  _temp_84tih8aula8() {
    return "a";
  }
  static [_symbol_em7ot5go9ug] = meta("a", 1)(C.prototype._temp_84tih8aula8, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_em7ot5go9ug]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_84tih8aula8;
  static [_symbol_em7ot5go9ug] = meta("b", 2)(C[_symbol_em7ot5go9ug], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_em7ot5go9ug]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_em7ot5go9ug];
  get #p() {
    return C[_symbol_em7ot5go9ug].bind(this)();
  }
  [_symbol_em7ot5go9ug]() {
    return C[_symbol_em7ot5go9ug].bind(this);
  }
}

delete C.prototype._temp_84tih8aula8;

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);