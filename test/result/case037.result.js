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

const _C_member_initializers_pgnbeo = [];

class C {
  constructor() {
    _C_member_initializers_pgnbeo.forEach(initialize => initialize.call(this));
  }
  #p = 10;
  get p() {
    return this.#p;
  }
  set p(v) {
    this.#p = v;
  }
}

const _C_p_descriptor_iqge0o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_iqge0o.set = decorator(_C_p_descriptor_iqge0o.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_pgnbeo.push(initializer)
}) ?? _C_p_descriptor_iqge0o.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_iqge0o);

console.assert(new C().test === 10);

const c = new C();

c.p = 20;

console.assert(c.p === 40);