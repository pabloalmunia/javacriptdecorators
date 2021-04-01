function meta(key, value) {
  return function decorator1(_, context) {
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

let _initializer_3r9u9kfasp;

const _symbol_5i7incmpf6 = Symbol();

const _symbol_bakoeh0e0u = Symbol();

let _initializer_85nmc2ha9t;

let _initializer_s7phv0brveo;

const _symbol_9u2d083gv9g = Symbol();

const _symbol_dr525g234s8 = Symbol();

let _initializer_i8l8seh7t6o;

class C {
  #p = _initializer_85nmc2ha9t(_initializer_3r9u9kfasp(10));
  [_symbol_5i7incmpf6]() {
    return this.#p;
  }
  [_symbol_bakoeh0e0u](v) {
    this.#p = v;
  }
  #f = _initializer_i8l8seh7t6o(_initializer_s7phv0brveo(20));
  [_symbol_9u2d083gv9g]() {
    return this.#f;
  }
  [_symbol_dr525g234s8](v) {
    this.#f = v;
  }
}

_initializer_i8l8seh7t6o = meta("d", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_symbol_9u2d083gv9g],
    set: C.prototype[_symbol_dr525g234s8]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#f")
}) ?? (v => v);

_initializer_s7phv0brveo = meta("c", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_symbol_9u2d083gv9g],
    set: C.prototype[_symbol_dr525g234s8]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#f")
}) ?? (v => v);

_initializer_85nmc2ha9t = meta("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_5i7incmpf6],
    set: C.prototype[_symbol_bakoeh0e0u]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_3r9u9kfasp = meta("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_5i7incmpf6],
    set: C.prototype[_symbol_bakoeh0e0u]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);