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

const _static_initializers_6q48711vue = [];

class C {
  constructor() {
    this.z = 100;
  }
  static get p() {}
}

const _initializer_pq8709378l = Object.getOwnPropertyDescriptor(C, "p");

_initializer_pq8709378l.get = __applyDecorator(addProperty("b", 2)(_initializer_pq8709378l.get, {
  kind: "init-getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_pq8709378l.get, _static_initializers_6q48711vue);

Object.defineProperty(C, "p", _initializer_pq8709378l);

const _initializer_t8ljuq3o7a = Object.getOwnPropertyDescriptor(C, "p");

_initializer_t8ljuq3o7a.get = __applyDecorator(addProperty("a", 1)(_initializer_t8ljuq3o7a.get, {
  kind: "init-getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_t8ljuq3o7a.get, _static_initializers_6q48711vue);

Object.defineProperty(C, "p", _initializer_t8ljuq3o7a);

_static_initializers_6q48711vue.forEach(initialize => initialize.call(C, C));

const _static_initializers_397pt9r8rv = [];

class D extends C {
  static get p() {}
}

const _initializer_nvm5vq4rq6g = Object.getOwnPropertyDescriptor(D, "p");

_initializer_nvm5vq4rq6g.get = __applyDecorator(addProperty("d", 4)(_initializer_nvm5vq4rq6g.get, {
  kind: "init-getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p")
}), _initializer_nvm5vq4rq6g.get, _static_initializers_397pt9r8rv);

Object.defineProperty(D, "p", _initializer_nvm5vq4rq6g);

const _initializer_a7n0onp0ic = Object.getOwnPropertyDescriptor(D, "p");

_initializer_a7n0onp0ic.get = __applyDecorator(addProperty("c", 3)(_initializer_a7n0onp0ic.get, {
  kind: "init-getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p")
}), _initializer_a7n0onp0ic.get, _static_initializers_397pt9r8rv);

Object.defineProperty(D, "p", _initializer_a7n0onp0ic);

_static_initializers_397pt9r8rv.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);