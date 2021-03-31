function decorator(value, context) {
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

class C {
  #p = 0;
  set p(v) {
    this.#p = v;
  }
  get p() {
    return this.#p;
  }
}

const _descriptor_9mf5k0do0pg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_9mf5k0do0pg.set = decorator(_descriptor_9mf5k0do0pg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_9mf5k0do0pg.set;

Object.defineProperty(C.prototype, "p", _descriptor_9mf5k0do0pg);

const c = new C();

c.p = 10;

console.assert(c.p === 20);