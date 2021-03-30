function decorator(value, context) {
  return function(v) {
    value.call(this, v * 2);
  };
}

class C {
  static #P = 0;
  static set P(v) {
    C.#P = v;
  }
  static get P() {
    return C.#P;
  }
}

const _descriptor_c90gfmedoi = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_c90gfmedoi.set = decorator(_descriptor_c90gfmedoi.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_c90gfmedoi.set;

Object.defineProperty(C, "P", _descriptor_c90gfmedoi);

C.P = 10;

console.assert(C.P === 20);