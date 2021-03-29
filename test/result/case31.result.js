class A {
  set p(v) {}
}

const _descriptor_d8jlecmc8to = Object.getOwnPropertyDescriptor(A.prototype, "p");

_descriptor_d8jlecmc8to.set = decorator(_descriptor_d8jlecmc8to.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!A.prototype[Symbol.metadata]) {
      A.prototype[Symbol.metadata] = Object.create(null);
    }
    if (!A.prototype[Symbol.metadata].p) {
      A.prototype[Symbol.metadata].p = {};
    }
    const db = A.prototype[Symbol.metadata].p;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_d8jlecmc8to.set;

Object.defineProperty(A.prototype, "p", _descriptor_d8jlecmc8to);