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

const _static_initializers_oqlqh1ct7r8 = [];

class C {
  constructor() {
    this.z = 100;
  }
  static set p(v) {}
}

const _initializer_f1opt7e4u3g = Object.getOwnPropertyDescriptor(C, "p");

_initializer_f1opt7e4u3g.set = __applyDecorator(addProperty("b", 2)(_initializer_f1opt7e4u3g.set, {
  kind: "init-setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_f1opt7e4u3g.set, _static_initializers_oqlqh1ct7r8);

Object.defineProperty(C, "p", _initializer_f1opt7e4u3g);

const _initializer_u0s5a77d5ko = Object.getOwnPropertyDescriptor(C, "p");

_initializer_u0s5a77d5ko.set = __applyDecorator(addProperty("a", 1)(_initializer_u0s5a77d5ko.set, {
  kind: "init-setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}), _initializer_u0s5a77d5ko.set, _static_initializers_oqlqh1ct7r8);

Object.defineProperty(C, "p", _initializer_u0s5a77d5ko);

_static_initializers_oqlqh1ct7r8.forEach(initialize => initialize.call(C, C));

const _static_initializers_4oc961q8uug = [];

class D extends C {
  static set p(v) {}
}

const _initializer_c7098rpl7oo = Object.getOwnPropertyDescriptor(D, "p");

_initializer_c7098rpl7oo.set = __applyDecorator(addProperty("d", 4)(_initializer_c7098rpl7oo.set, {
  kind: "init-setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p")
}), _initializer_c7098rpl7oo.set, _static_initializers_4oc961q8uug);

Object.defineProperty(D, "p", _initializer_c7098rpl7oo);

const _initializer_e11b6ghcrto = Object.getOwnPropertyDescriptor(D, "p");

_initializer_e11b6ghcrto.set = __applyDecorator(addProperty("c", 3)(_initializer_e11b6ghcrto.set, {
  kind: "init-setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D, "p")
}), _initializer_e11b6ghcrto.set, _static_initializers_4oc961q8uug);

Object.defineProperty(D, "p", _initializer_e11b6ghcrto);

_static_initializers_4oc961q8uug.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);