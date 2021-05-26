function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_static_initializers_9h87t8 = [];

class C {
  static get p() {}
}

const _C_p_descriptor_b3v2cg = Object.getOwnPropertyDescriptor(C, "p");

_C_p_descriptor_b3v2cg.get = decorator(_C_p_descriptor_b3v2cg.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_9h87t8.push(initializer)
}) ?? _C_p_descriptor_b3v2cg.get;

Object.defineProperty(C, "p", _C_p_descriptor_b3v2cg);

_C_static_initializers_9h87t8.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 10);