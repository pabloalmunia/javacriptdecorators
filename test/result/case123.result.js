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

let _initializer_4gdh9isi73o;

const _symbol_5fht6g0emg8 = Symbol();

const _symbol_d8ovm09gldo = Symbol();

let _initializer_ev84e5b6ji;

class C {
  #p = _initializer_ev84e5b6ji(_initializer_4gdh9isi73o(1));
  [_symbol_5fht6g0emg8]() {
    return this.#p;
  }
  [_symbol_d8ovm09gldo](v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

_initializer_ev84e5b6ji = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_5fht6g0emg8],
    set: C.prototype[_symbol_d8ovm09gldo]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_4gdh9isi73o = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_5fht6g0emg8],
    set: C.prototype[_symbol_d8ovm09gldo]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

const a = new C();

console.assert(a.check() === 20000);