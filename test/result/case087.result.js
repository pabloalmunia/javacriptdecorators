function deco(value, name) {
  return {
    initialize(v) {
      return v * 2;
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

let _initializer_pvq10r16rrg;

class C {
  static #_property_9vhid56k1eg = 10;
  static get P() {
    return this.#_property_9vhid56k1eg;
  }
  static set P(v) {
    this.#_property_9vhid56k1eg = v;
  }
}

const _descriptor_ke9qsho9m4 = Object.getOwnPropertyDescriptor(C, "P");

const _result_dbh4c38bjho = deco({
  get: _descriptor_ke9qsho9m4.get,
  set: _descriptor_ke9qsho9m4.set
}, {
  kind: "auto-accessor",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
}) || {};

_initializer_pvq10r16rrg = _result_dbh4c38bjho.initialize || (v => v);

Object.defineProperty(C, "P", {
  get: _result_dbh4c38bjho.get || _descriptor_ke9qsho9m4.get,
  set: _result_dbh4c38bjho.set || _descriptor_ke9qsho9m4.set
});

C.P = _initializer_pvq10r16rrg(C.P);

console.assert(C.P === 20);