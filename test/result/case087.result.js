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

let _initializer_k2ekp1odh3g;

class C {
  static #_property_m10tj79vjqo = 10;
  static get P() {
    return this.#_property_m10tj79vjqo;
  }
  static set P(v) {
    this.#_property_m10tj79vjqo = v;
  }
}

const _descriptor_d06qhsd2dd8 = Object.getOwnPropertyDescriptor(C, "P");

const _result_4g34rm9djfo = deco({
  get: _descriptor_d06qhsd2dd8.get,
  set: _descriptor_d06qhsd2dd8.set
}, {
  kind: "auto-accessor",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
});

_initializer_k2ekp1odh3g = _result_4g34rm9djfo.initialize;

Object.defineProperty(C, "P", {
  get: _result_4g34rm9djfo.get || _descriptor_d06qhsd2dd8.get,
  set: _result_4g34rm9djfo.set || _descriptor_d06qhsd2dd8.set
});

C.P = _initializer_k2ekp1odh3g(C.P);

console.assert(C.P === 20);