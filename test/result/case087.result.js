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

let _initializer_qsd9ll7fr4o;

class C {
  static #_property_1mu5ceoomt8 = 10;
  static get P() {
    return this.#_property_1mu5ceoomt8;
  }
  static set P(v) {
    this.#_property_1mu5ceoomt8 = v;
  }
}

const _descriptor_0pmqfecm1hg = Object.getOwnPropertyDescriptor(C, "P");

const _result_vpobsngfqs8 = deco({
  get: _descriptor_0pmqfecm1hg.get,
  set: _descriptor_0pmqfecm1hg.set
}, {
  kind: "auto-accessor",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "P")
});

_initializer_qsd9ll7fr4o = _result_vpobsngfqs8.initialize || (v => v);

Object.defineProperty(C, "P", {
  get: _result_vpobsngfqs8.get || _descriptor_0pmqfecm1hg.get,
  set: _result_vpobsngfqs8.set || _descriptor_0pmqfecm1hg.set
});

C.P = _initializer_qsd9ll7fr4o(C.P);

console.assert(C.P === 20);