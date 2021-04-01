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

const _symbol_tlnm1esrfk = Symbol();

class C {
  #other = 0;
  _temp_263peaj8vm8(v) {
    this.#other = v;
  }
  static [_symbol_tlnm1esrfk] = decorator(C.prototype._temp_263peaj8vm8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_tlnm1esrfk]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_263peaj8vm8;
  set #p(v) {
    return C[_symbol_tlnm1esrfk].bind(this)(v);
  }
  [_symbol_tlnm1esrfk]() {
    return C[_symbol_tlnm1esrfk].bind(this);
  }
  get #p() {
    return this.#other;
  }
  set p(v) {
    this.#p = v;
  }
  get p() {
    return this.#p;
  }
}

delete C.prototype._temp_263peaj8vm8;

const c = new C();

c.p = 10;

console.assert(c.p === 20);