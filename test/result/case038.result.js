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

const _C_member_initializers_dkomr8 = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_dkomr8.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _C_p_descriptor_8kut2g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_8kut2g.set = addProperty("a", 1)(_C_p_descriptor_8kut2g.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_dkomr8.push(initializer)
}) ?? _C_p_descriptor_8kut2g.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_8kut2g);

const _C_p_descriptor_c8kl6 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_c8kl6.set = addProperty("b", 2)(_C_p_descriptor_c8kl6.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_dkomr8.push(initializer)
}) ?? _C_p_descriptor_c8kl6.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_c8kl6);

const _D_member_initializers_3b3up = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_3b3up.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _D_p_descriptor_jutaoo = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_jutaoo.set = addProperty("c", 3)(_D_p_descriptor_jutaoo.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p"),
  addInitializer: initializer => _D_member_initializers_3b3up.push(initializer)
}) ?? _D_p_descriptor_jutaoo.set;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_jutaoo);

const _D_p_descriptor_bjk4sg = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_bjk4sg.set = addProperty("d", 4)(_D_p_descriptor_bjk4sg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p"),
  addInitializer: initializer => _D_member_initializers_3b3up.push(initializer)
}) ?? _D_p_descriptor_bjk4sg.set;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_bjk4sg);

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);