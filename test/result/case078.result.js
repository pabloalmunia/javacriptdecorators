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

const _C_static_initializers_4ik4ro = [];

class C {
  constructor() {
    this.z = 100;
  }
  static set p(v) {}
}

const _C_p_descriptor_6r7ua8 = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_6r7ua8.set = addProperty("b", 2)(_C_p_descriptor_6r7ua8.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_4ik4ro.push(initializer)
}) ?? _C_p_descriptor_6r7ua8.set;

Object.defineProperty(C, "p", _C_p_descriptor_6r7ua8);

const _C_p_descriptor_pctmk = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_pctmk.set = addProperty("a", 1)(_C_p_descriptor_pctmk.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_4ik4ro.push(initializer)
}) ?? _C_p_descriptor_pctmk.set;

Object.defineProperty(C, "p", _C_p_descriptor_pctmk);

_C_static_initializers_4ik4ro.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_fl4bmg = [];

class D extends C {
  static set p(v) {}
}

const _D_p_descriptor_lutcq8 = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_lutcq8.set = addProperty("d", 4)(_D_p_descriptor_lutcq8.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p"),
  addInitializer: initializer => _D_static_initializers_fl4bmg.push(initializer)
}) ?? _D_p_descriptor_lutcq8.set;

Object.defineProperty(D, "p", _D_p_descriptor_lutcq8);

const _D_p_descriptor_hcsp8o = Object.getOwnPropertyDescriptor(D, "p");

_D_p_descriptor_hcsp8o.set = addProperty("c", 3)(_D_p_descriptor_hcsp8o.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p"),
  addInitializer: initializer => _D_static_initializers_fl4bmg.push(initializer)
}) ?? _D_p_descriptor_hcsp8o.set;

Object.defineProperty(D, "p", _D_p_descriptor_hcsp8o);

_D_static_initializers_fl4bmg.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);