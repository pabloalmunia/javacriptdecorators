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

class C {
  static #P = 0;
  static set P(v) {
    C.#P = v;
  }
  static get P() {
    return C.#P;
  }
}

const _descriptor_0eqehnhq5mg = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_0eqehnhq5mg.set = decorator(_descriptor_0eqehnhq5mg.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) ?? _descriptor_0eqehnhq5mg.set;

Object.defineProperty(C, "P", _descriptor_0eqehnhq5mg);

C.P = 10;

console.assert(C.P === 20);