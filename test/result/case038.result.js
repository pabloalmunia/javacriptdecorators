function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "init-method" || context.kind === "init-getter" || context.kind === "init-setter") {
      return {
        initialize() {
          this[key] = value;
        }
      };
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

function __applyDecorator(result, origin, collection) {
  if (typeof result === "undefined") {
    return origin;
  }
  if (typeof result === "function") {
    return result;
  }
  if (typeof result === "object") {
    if (typeof result.initialize === "function") {
      collection.push(result.initialize);
    }
    return result.method || result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _member_initializers_uinubtqj5 = [];

class C {
  constructor() {
    this.z = 100;
    _member_initializers_uinubtqj5.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _descriptor_gkhj90fkj8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_gkhj90fkj8.set = __applyDecorator(addProperty("a", 1)(_descriptor_gkhj90fkj8.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_gkhj90fkj8.set, _member_initializers_uinubtqj5);

Object.defineProperty(C.prototype, "p", _descriptor_gkhj90fkj8);

const _descriptor_geffr0vpiuo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_geffr0vpiuo.set = __applyDecorator(addProperty("b", 2)(_descriptor_geffr0vpiuo.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_geffr0vpiuo.set, _member_initializers_uinubtqj5);

Object.defineProperty(C.prototype, "p", _descriptor_geffr0vpiuo);

const _member_initializers_jite89rcm8o = [];

class D extends C {
  constructor() {
    super();
    _member_initializers_jite89rcm8o.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _descriptor_8mq9rncak6 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_descriptor_8mq9rncak6.set = __applyDecorator(addProperty("c", 3)(_descriptor_8mq9rncak6.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p")
}), _descriptor_8mq9rncak6.set, _member_initializers_jite89rcm8o);

Object.defineProperty(D.prototype, "p", _descriptor_8mq9rncak6);

const _descriptor_lmkckrsmcco = Object.getOwnPropertyDescriptor(D.prototype, "p");

_descriptor_lmkckrsmcco.set = __applyDecorator(addProperty("d", 4)(_descriptor_lmkckrsmcco.set, {
  kind: "init-setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p")
}), _descriptor_lmkckrsmcco.set, _member_initializers_jite89rcm8o);

Object.defineProperty(D.prototype, "p", _descriptor_lmkckrsmcco);

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