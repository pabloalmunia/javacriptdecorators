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

const _C_member_initializers_001b68 = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_001b68.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_2rq5o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_2rq5o.get = addProperty("a", 1)(_C_p_descriptor_2rq5o.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_001b68.push(initializer)
}) ?? _C_p_descriptor_2rq5o.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_2rq5o);

const _C_p_descriptor_k783k = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_k783k.get = addProperty("b", 2)(_C_p_descriptor_k783k.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_001b68.push(initializer)
}) ?? _C_p_descriptor_k783k.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_k783k);

const _D_member_initializers_sepk2 = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_sepk2.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_b0vk9 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_b0vk9.get = addProperty("c", 3)(_D_p_descriptor_b0vk9.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p"),
  addInitializer: initializer => _D_member_initializers_sepk2.push(initializer)
}) ?? _D_p_descriptor_b0vk9.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_b0vk9);

const _D_p_descriptor_bgbago = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_bgbago.get = addProperty("d", 4)(_D_p_descriptor_bgbago.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p"),
  addInitializer: initializer => _D_member_initializers_sepk2.push(initializer)
}) ?? _D_p_descriptor_bgbago.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_bgbago);

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