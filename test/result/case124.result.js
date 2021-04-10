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

let _initializer_phavsij4nh;

const _symbol_f6hgii9rde = Symbol();

const _symbol_i32drc47qu = Symbol();

let _initializer_kmrufsidqjg;

class C {
  #p = _initializer_kmrufsidqjg.call(this, _initializer_phavsij4nh.call(this, 10));
  [_symbol_f6hgii9rde]() {
    return this.#p;
  }
  [_symbol_i32drc47qu](v) {
    this.#p = v;
  }
}

_initializer_kmrufsidqjg = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_f6hgii9rde],
    set: C.prototype[_symbol_i32drc47qu]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_phavsij4nh = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_f6hgii9rde],
    set: C.prototype[_symbol_i32drc47qu]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

const a = new C();

console.log(C.prototype[Symbol.metadata]);