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

let _initializer_6ib9o6magh8;

class C {
  #_property_2dprcr3b0a = _initializer_6ib9o6magh8.call(this, 10);
  get p() {
    return this.#_property_2dprcr3b0a;
  }
  set p(v) {
    this.#_property_2dprcr3b0a = v;
  }
}

const _descriptor_mvg4m80asl8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_ldu88k0k4no = deco({
  get: _descriptor_mvg4m80asl8.get,
  set: _descriptor_mvg4m80asl8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
});

_initializer_6ib9o6magh8 = _result_ldu88k0k4no.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_ldu88k0k4no.get || _descriptor_mvg4m80asl8.get,
  set: _result_ldu88k0k4no.set || _descriptor_mvg4m80asl8.set
});

const c = new C();

console.log(c.p);