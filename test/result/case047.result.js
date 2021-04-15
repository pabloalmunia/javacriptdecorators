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

let _initializer_v4a3qp7ncb8;

class C {
  #_property_p98orlnh9s8 = _initializer_v4a3qp7ncb8.call(this, 10);
  get p() {
    return this.#_property_p98orlnh9s8;
  }
  set p(v) {
    this.#_property_p98orlnh9s8 = v;
  }
}

const _descriptor_qdev7g1gmn8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_ia6i6sc9u6 = deco({
  get: _descriptor_qdev7g1gmn8.get,
  set: _descriptor_qdev7g1gmn8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_initializer_v4a3qp7ncb8 = _result_ia6i6sc9u6.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_ia6i6sc9u6.get || _descriptor_qdev7g1gmn8.get,
  set: _result_ia6i6sc9u6.set || _descriptor_qdev7g1gmn8.set
});

const c = new C();

console.log(c.p);