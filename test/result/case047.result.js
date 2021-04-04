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

let _initializer_hraoibfmkb8;

class C {
  #_property_guqijbmnpjg = _initializer_hraoibfmkb8(10);
  get p() {
    return this.#_property_guqijbmnpjg;
  }
  set p(v) {
    this.#_property_guqijbmnpjg = v;
  }
}

const _descriptor_0saac7780g8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_nkspgqfhsto = deco({
  get: _descriptor_0saac7780g8.get,
  set: _descriptor_0saac7780g8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
});

_initializer_hraoibfmkb8 = _result_nkspgqfhsto.initialize;

Object.defineProperty(C.prototype, "p", {
  get: _result_nkspgqfhsto.get || _descriptor_0saac7780g8.get,
  set: _result_nkspgqfhsto.set || _descriptor_0saac7780g8.set
});

const c = new C();

console.log(c.p);