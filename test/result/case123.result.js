function decorator1(value, context) {
  return v => v * 100;
}

function decorator2(value, context) {
  return v => v * 200;
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

let _initializer_85vtbs8k9o8;

const _symbol_cia423fbrag = Symbol();

const _symbol_rlguuf6024o = Symbol();

let _initializer_6kntakj38c;

class C {
  #p = _initializer_6kntakj38c.call(this, _initializer_85vtbs8k9o8.call(this, 1));
  [_symbol_cia423fbrag]() {
    return this.#p;
  }
  [_symbol_rlguuf6024o](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_6kntakj38c = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_cia423fbrag],
    set: C.prototype[_symbol_rlguuf6024o]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_85vtbs8k9o8 = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_cia423fbrag],
    set: C.prototype[_symbol_rlguuf6024o]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

const a = new C();

console.assert(a.check() === 20000);