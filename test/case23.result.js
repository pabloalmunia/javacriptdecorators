class C {
  get p() {
    return "a";
  }
}

const _descriptor_j35fmef7ia = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_j35fmef7ia.get = decorator2(_descriptor_j35fmef7ia.get, {
  kind: "getter",
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
}) ?? _descriptor_j35fmef7ia.get;

Object.defineProperty(C.prototype, "p", _descriptor_j35fmef7ia);
const _descriptor_g4p6nt13g8o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_g4p6nt13g8o.get = decorator1(_descriptor_g4p6nt13g8o.get, {
  kind: "getter",
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
}) ?? _descriptor_g4p6nt13g8o.get;

Object.defineProperty(C.prototype, "p", _descriptor_g4p6nt13g8o);
const a = new C();
console.assert(a.p === "b");