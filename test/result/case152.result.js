function decorator(value, context) {
  return function(v) {
    value.call(this, v * 2);
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

const _symbol_nqv01jioaio = Symbol();

class C {
  static #other = 0;
  static _temp_nkgir1tv2mo(v) {
    C.#other = v;
  }
  static [_symbol_nqv01jioaio] = decorator(C._temp_nkgir1tv2mo, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_nqv01jioaio]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_nkgir1tv2mo;
  static set #p(v) {
    return C[_symbol_nqv01jioaio].bind(this)(v);
  }
  static [_symbol_nqv01jioaio]() {
    return C[_symbol_nqv01jioaio].bind(this);
  }
  static get #p() {
    return C.#other;
  }
  static set p(v) {
    C.#p = v;
  }
  static get p() {
    return C.#p;
  }
}

delete C._temp_nkgir1tv2mo;

C.p = 10;

console.assert(C.p === 20);