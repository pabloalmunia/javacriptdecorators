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

let _C_A_initializer_o3veio;

class C {
  static #_A_private_property_0gqadg = 10;
  static get [A]() {
    return this.#_A_private_property_0gqadg;
  }
  static set [A](v) {
    this.#_A_private_property_0gqadg = v;
  }
}

const _C_A_descriptor_ntkjjg = Object.getOwnPropertyDescriptor(C, A);

const _C_A_result_q9tvl8 = double({
  get: _C_A_descriptor_ntkjjg.get,
  set: _C_A_descriptor_ntkjjg.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, A)
}) || {};

_C_A_initializer_o3veio = _C_A_result_q9tvl8.initialize || (v => v);

Object.defineProperty(C, A, {
  get: _C_A_result_q9tvl8.get || _C_A_descriptor_ntkjjg.get,
  set: _C_A_result_q9tvl8.set || _C_A_descriptor_ntkjjg.set
});

C.A = _C_A_initializer_o3veio(C.A);

console.assert(C[A] === 10);

C[A] = 20;

console.assert(C[A] === 40);