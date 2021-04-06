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

let _initializer_nq0jjuvf3j8;

class C {
  #_property_23bke1fm288 = _initializer_nq0jjuvf3j8(10);
  get p() {
    return this.#_property_23bke1fm288;
  }
  set p(v) {
    this.#_property_23bke1fm288 = v;
  }
}

const _descriptor_50jje3727ng = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_n015gna87fg = deco({
  get: _descriptor_50jje3727ng.get,
  set: _descriptor_50jje3727ng.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
});

_initializer_nq0jjuvf3j8 = _result_n015gna87fg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_n015gna87fg.get || _descriptor_50jje3727ng.get,
  set: _result_n015gna87fg.set || _descriptor_50jje3727ng.set
});

const c = new C();

console.log(c.p);