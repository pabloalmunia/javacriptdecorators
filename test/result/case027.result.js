function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return function() {
    return value.call(this) * 2;
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

const _C_member_initializers_9hpq6g = [];

class C {
  constructor() {
    _C_member_initializers_9hpq6g.forEach(initialize => initialize.call(this));
  }
  #p = 10;
  get p() {
    return this.#p;
  }
}

const _C_p_descriptor_26cmq8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_26cmq8.get = decorator(_C_p_descriptor_26cmq8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_9hpq6g.push(initializer)
}) ?? _C_p_descriptor_26cmq8.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_26cmq8);

console.assert(new C().test === 10);

console.assert(new C().p === 20);