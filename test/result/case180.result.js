function double(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 2);
    }
  };
}

const A = Symbol();

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

let _C_A_initializer_m1sofo;

class C {
  #_A_private_property_8vqan8 = _C_A_initializer_m1sofo.call(this, 10);
  get [A]() {
    return this.#_A_private_property_8vqan8;
  }
  set [A](v) {
    this.#_A_private_property_8vqan8 = v;
  }
}

const _C_A_descriptor_vof94 = Object.getOwnPropertyDescriptor(C.prototype, A);

const _C_A_result_g5of = double({
  get: _C_A_descriptor_vof94.get,
  set: _C_A_descriptor_vof94.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, A)
}) || {};

_C_A_initializer_m1sofo = _C_A_result_g5of.initialize || (v => v);

Object.defineProperty(C.prototype, A, {
  get: _C_A_result_g5of.get || _C_A_descriptor_vof94.get,
  set: _C_A_result_g5of.set || _C_A_descriptor_vof94.set
});

const c = new C();

console.assert(c[A] === 10);

c[A] = 20;

console.assert(c[A] === 40);