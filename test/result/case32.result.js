function decorator(value, context) {
  return function(v) {
    value.call(this, v * 2);
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

const _descriptor_u0jge3n4fr8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_u0jge3n4fr8.set = decorator(_descriptor_u0jge3n4fr8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C.prototype[Symbol.metadata]) {
      C.prototype[Symbol.metadata] = Object.create(null);
    }
    if (!C.prototype[Symbol.metadata].p) {
      C.prototype[Symbol.metadata].p = {};
    }
    const db = C.prototype[Symbol.metadata].p;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_u0jge3n4fr8.set;

Object.defineProperty(C.prototype, "p", _descriptor_u0jge3n4fr8);

const c = new C();

c.p = 10;

console.assert(c.p === 20);