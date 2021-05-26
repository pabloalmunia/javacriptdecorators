function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
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

const _C_static_initializers_8chq3o = [];

class C {
  constructor() {
    this.z = 100;
  }
  static get p() {}
}

const _C_p_descriptor_4i934o = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_4i934o.get = addProperty("b", 2)(_C_p_descriptor_4i934o.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_8chq3o.push(initializer)
}) ?? _C_p_descriptor_4i934o.get;

Object.defineProperty(C, "p", _C_p_descriptor_4i934o);

const _C_p_descriptor_424qdo = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_424qdo.get = addProperty("a", 1)(_C_p_descriptor_424qdo.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_8chq3o.push(initializer)
}) ?? _C_p_descriptor_424qdo.get;

Object.defineProperty(C, "p", _C_p_descriptor_424qdo);

_C_static_initializers_8chq3o.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_racseg = [];

class D extends C {
  static get p() {}
}

const _D_p_descriptor_54nd4 = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_54nd4.get = addProperty("d", 4)(_D_p_descriptor_54nd4.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p"),
  addInitializer: initializer => _D_static_initializers_racseg.push(initializer)
}) ?? _D_p_descriptor_54nd4.get;

Object.defineProperty(D, "p", _D_p_descriptor_54nd4);

const _D_p_descriptor_7hca3 = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_7hca3.get = addProperty("c", 3)(_D_p_descriptor_7hca3.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p"),
  addInitializer: initializer => _D_static_initializers_racseg.push(initializer)
}) ?? _D_p_descriptor_7hca3.get;

Object.defineProperty(D, "p", _D_p_descriptor_7hca3);

_D_static_initializers_racseg.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);