function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_static_initializers_afto2g = [];

class C {
  static #p = 10;
  static get p() {
    return this.#p;
  }
  static set p(v) {
    this.#p = v;
  }
}

const _C_p_descriptor_ibfc88 = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_ibfc88.set = decorator(_C_p_descriptor_ibfc88.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_afto2g.push(initializer)
}) ?? _C_p_descriptor_ibfc88.set;

Object.defineProperty(C, "p", _C_p_descriptor_ibfc88);

_C_static_initializers_afto2g.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 10);

C.p = 20;

console.assert(C.p === 40);